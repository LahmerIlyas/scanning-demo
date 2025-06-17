import * as React from 'react';

import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeRoute } from '@/routes/Home';
import { CartRoute } from '@/routes/Cart';
import { CheckoutRoute } from '@/routes/Checkout';
import { SignInRoute } from '@/routes/SignIn';
import { SignUpRoute } from '@/routes/SignUp';
import { ProductDetailsRoute } from '@/routes/ProductDetails';
import { CustomBrowserWebview } from '@/routes/CustomBrowserWebview';
import { useIsUserLoggedIn } from '@/state/local/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountRoute } from '@/routes/Account';
import { OrdersRoute } from '@/routes/Orders';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@/styles/colors';
import { CustomHeader } from '@/components/CustomHeader';
import { createLocale } from '@/locales';
import { BarCodeScannerRoute } from '../routes/BarCodeScanner';
import { View } from 'react-native';
import { BarCodeScannerQuickAddToCartRoute } from '@/routes/BarCodeScannerQuickAddToCart';
import NavigationService from './service';

const Tab = createBottomTabNavigator();

const homeLocalize = createLocale('home');
const ordersLocalize = createLocale('orders');
const accountLocalize = createLocale('account');
const cartLocalize = createLocale('cart');


function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary.blue,
        tabBarInactiveTintColor: colors.secondary.gray,
        tabBarStyle: {
          backgroundColor: colors.secondary.white,
          borderTopWidth: 1,
          borderTopColor: colors.border.light,
        },
        header: () => <CustomHeader />,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeRoute}
        options={{
          title: homeLocalize('home'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartRoute}
        options={{
          title: cartLocalize('cart'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersRoute}
        options={{
          title: ordersLocalize('orders'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="receipt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountRoute}
        options={{
          title: accountLocalize('account'),
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  const isUserLoggedIn = useIsUserLoggedIn();
  return (
    <Stack.Navigator>
      {!isUserLoggedIn && (
        <Stack.Screen name="SignIn" component={SignInRoute} />
      )}
      {isUserLoggedIn && (
        <>
          <Stack.Screen
            name="TabsNavigator"
            component={TabsNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Checkout" component={CheckoutRoute} />
          <Stack.Screen name="BarCodeScanner" component={BarCodeScannerRoute}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BarCodeScannerQuickAddToCart"
            component={BarCodeScannerQuickAddToCartRoute}
            
            options={{
              title: "Alternatives",
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsRoute}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={CartRoute}
            options={{
              presentation: 'modal',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CustomBrowserWebview"
            component={CustomBrowserWebview}
            options={{
              presentation: 'modal',
              headerShown: false,
            }}
          />
          <Stack.Screen name="SignUp" component={SignUpRoute} />
        </>
      )}
    </Stack.Navigator>
  );
}

export function MainNavigator() {
  const navigationRef = React.useRef<NavigationContainerRef | null>(null);

  const handleNavigationRef = (ref: NavigationContainerRef | null): void => {
    navigationRef.current = ref;
    NavigationService.setTopLevelNavigator(ref);
  };


  return (
    <NavigationContainer ref={handleNavigationRef}>
      <RootStack />
    </NavigationContainer>
  );
}
