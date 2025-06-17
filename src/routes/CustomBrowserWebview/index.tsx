import React, {useCallback} from 'react';
import type {LayoutChangeEvent} from 'react-native';
import {
  View,
  Share,
  Animated,
  StatusBar,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute, useNavigation, useFocusEffect} from '@react-navigation/core';
import type {RouteProp} from '@react-navigation/core';
import type {WebView} from 'react-native-webview';
import type {
  WebViewNavigation,
  WebViewScrollEvent,
} from 'react-native-webview/lib/WebViewTypes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {WebView as RNWebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@/styles/colors';
import {verticalScale} from '@/utils/styles';
import styles from './styles';

type RouteParams = {
  uri: string;
  title?: string;
  cacheEnabled?: boolean;
  barStyle?: 'dark-content' | 'light-content';
  injectedJavaScriptBeforeContentLoaded?: string;
};

const Constants = {
  showHideNavbarDuration: 300,
};

export function CustomBrowserWebview(): JSX.Element {
  const [disableBackButton, setDisableBackButton] = React.useState(true);
  const [disableForwardButton, setDisableForwardButton] = React.useState(true);
  const {
    uri = '',
    cacheEnabled,
    barStyle,
    injectedJavaScriptBeforeContentLoaded,
  } = useRoute<RouteProp<{params: RouteParams}, 'params'>>().params || {};

  const insets = useSafeAreaInsets();

  const {goBack} = useNavigation();
  const webviewRef = React.useRef<WebView>(null);
  const handleBack = React.useCallback(() => webviewRef.current?.goBack(), []);
  const handleForward = React.useCallback(
    () => webviewRef.current?.goForward(),
    [],
  );

  const translateYRef = React.useRef<Animated.Value>(new Animated.Value(0));

  const navBarsAreVisible = React.useRef(true);
  const hideNavbar = React.useCallback(() => {
    navBarsAreVisible.current = false;
    Animated.timing(translateYRef.current, {
      duration: Constants.showHideNavbarDuration,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);
  const showNavbar = React.useCallback(() => {
    navBarsAreVisible.current = true;
    Animated.timing(translateYRef.current, {
      duration: Constants.showHideNavbarDuration,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  const prevYRef = React.useRef(0);
  const onScrollListener = React.useCallback(
    ({
      nativeEvent: {
        contentOffset: {y},
      },
    }: WebViewScrollEvent) => {
      const prevY = prevYRef.current;
      const scrollY = y + insets.top;
      const isScrollingUp = prevY - scrollY < 0;

      if (isScrollingUp && navBarsAreVisible.current && scrollY > 0) {
        hideNavbar();
      } else if (!isScrollingUp && !navBarsAreVisible.current) {
        showNavbar();
      }

      prevYRef.current = scrollY;
    },
    [hideNavbar, showNavbar, insets.top],
  );

  const handleOnScroll = React.useMemo(
    () =>
      Animated.event(
        [],
        // Currently WebView component does not support native driver
        // ref. https://github.com/react-native-webview/react-native-webview/issues/740
        {listener: onScrollListener, useNativeDriver: false},
      ),
    [onScrollListener],
  );
  const [topTabHeight, setTopTabHeight] = React.useState(0);
  const topTabContainer = React.useMemo(
    () => ({
      ...styles.topTabContainer,
      transform: [
        {
          translateY: translateYRef.current.interpolate({
            extrapolate: 'clamp',
            inputRange: [0, 1],
            outputRange: [0, -topTabHeight],
          }),
        },
      ],
    }),
    [topTabHeight],
  );
  const handleShare = React.useCallback(async () => {
    if (!uri) return;
    try {
      await Share.share({
        url: uri,
      });
    } catch (error) {
      console.error('Share error:', error);
    }
  }, [uri]);

  const measureTopTabHeight = React.useCallback(
    ({
      nativeEvent: {
        layout: {height},
      },
    }: LayoutChangeEvent) => {
      setTopTabHeight(height);
    },
    [],
  );

  const handleNavigationStateChange = React.useCallback(
    ({canGoBack, canGoForward}: WebViewNavigation) => {
      setDisableBackButton(!canGoBack);
      setDisableForwardButton(!canGoForward);
    },
    [],
  );

  useFocusEffect(
    useCallback(() => {
      const handleBackPress = () => {
        goBack();
        return true;
      };
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress,
      );
      return () => subscription.remove();
    }, [goBack]),
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={barStyle ?? 'light-content'}
        translucent
      />

      <RNWebView
        source={{uri}}
        ref={webviewRef}
        onScroll={handleOnScroll}
        onLoadStart={showNavbar}
        cacheEnabled={cacheEnabled}
        onNavigationStateChange={handleNavigationStateChange}
        injectedJavaScriptBeforeContentLoaded={
          injectedJavaScriptBeforeContentLoaded
        }
        bounces={false}
        style={styles.webview}
      />
      <View
        style={[
          styles.bottomTabContainer,
          {paddingBottom: verticalScale(14) + insets.bottom},
        ]}>
        <View style={styles.leftButtonsContainer}>
          <TouchableOpacity
            style={styles.leftButton}
            onPress={handleBack}
            disabled={disableBackButton}>
            <Icon
              name="arrow-back"
              size={24}
              color={
                disableBackButton
                  ? 'rgba(255,255,255,0.5)'
                  : colors.secondary.white
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleForward}
            disabled={disableForwardButton}>
            <Icon
              name="arrow-forward"
              size={24}
              color={
                disableForwardButton
                  ? 'rgba(255,255,255,0.5)'
                  : colors.secondary.white
              }
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleShare}>
          <Icon name="share" size={24} color={colors.secondary.white} />
        </TouchableOpacity>
      </View>
      <Animated.View
        onLayout={measureTopTabHeight}
        style={topTabContainer}
        pointerEvents="box-none">
        <TouchableOpacity onPress={goBack} style={styles.closeButton}>
          <Icon name="close" size={24} color={colors.text.primary} />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

