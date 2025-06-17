import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@/styles/colors';
import styles from './styles';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function CollapsibleSection({
  title,
  children,
  defaultExpanded = false,
}: CollapsibleSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [contentHeight, setContentHeight] = useState(0);
  const animationProgress = useSharedValue(defaultExpanded ? 1 : 0);

  const toggleExpanded = () => {
    const newExpanded = !expanded;
    animationProgress.value = withTiming(newExpanded ? 1 : 0, {
      duration: 300,
    });
    runOnJS(setExpanded)(newExpanded);
  };

  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      animationProgress.value,
      [0, 1],
      [0, contentHeight],
    );

    return {
      height: height,
      opacity: interpolate(animationProgress.value, [0, 1], [0, 1]),
    };
  });

  const arrowStyle = useAnimatedStyle(() => {
    const rotation = interpolate(animationProgress.value, [0, 1], [0, 180]);
    return {
      transform: [{rotateZ: `${rotation}deg`}],
    };
  });

  const onContentLayout = (event: any) => {
    const {height} = event.nativeEvent.layout;
    if (height > 0 && contentHeight !== height) {
      setContentHeight(height);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleExpanded}>
        <Text style={styles.title}>{title}</Text>
        <Animated.View style={arrowStyle}>
          <Icon
            name="keyboard-arrow-down"
            size={24}
            color={colors.text.primary}
          />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={[styles.content, animatedStyle]}>
        <View style={styles.contentInner} onLayout={onContentLayout}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
}
