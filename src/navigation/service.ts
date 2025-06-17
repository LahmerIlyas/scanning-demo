import type {
    EventListenerCallback,
    NavigationContainerEventMap,
    NavigationContainerRef,
    NavigationState,
    PartialState,
  } from '@react-navigation/native';
  import { CommonActions } from '@react-navigation/native';
  
  import { useEffect, useState } from 'react';
  
  let navigator: NavigationContainerRef | null;
  
  const setTopLevelNavigator = (
    navigatorRef: NavigationContainerRef | null,
  ): void => {
    navigator = navigatorRef;
  };
  
  const navigate = <RouteName extends keyof AllNavigationParams>(
    name?: RouteName,
    params?: AllNavigationParams[RouteName],
    nestedNavigatorRoute?: NestedNavigatorRoute,
  ): void => {
    if (!navigator) {
      return;
    }
  
    if (name) {
      CommonActions.navigate(name, { params });
    } else if (nestedNavigatorRoute) {
      navigator.dispatch(
        CommonActions.navigate(nestedNavigatorRoute.stackName, {
          ...nestedNavigatorRoute.params,
        }),
      );
    }
  };
  
  
  const getActiveRoute = (
    state: NavigationState | PartialState<NavigationState> | undefined,
  ):
    | NavigationState['routes'][0]
    | PartialState<NavigationState>['routes'][0]
    | undefined => {
    if (!state || state.index === null || state.index === undefined)
      return undefined;
    const route = state.routes[state.index];
  
    if (route.state) {
      return getActiveRoute(route.state);
    }
  
    return route;
  };
  
  const getActiveRouteName = (
    state: NavigationState | PartialState<NavigationState> | undefined,
  ): string | undefined => {
    if (!state || state.index === null || state.index === undefined)
      return undefined;
    return getActiveRoute(state)?.name;
  };
  
  const getCurrentRouteName = (): string | undefined => {
    return getActiveRouteName(navigator?.getRootState());
  };
  
  type NavigationServiceType = {
    currentRoute: string | undefined;
  };
  
  export const useNavigationService = (): NavigationServiceType => {
    const [currentRoute, setCurrentRoute] = useState<string | undefined>(
      undefined,
    );
  
    useEffect(() => {
      const callback: EventListenerCallback<
        NavigationContainerEventMap,
        'state'
      > = (event) => {
        setCurrentRoute(getActiveRouteName(event.data?.state));
      };
  
      navigator?.addListener('state', callback);
      return () => navigator?.removeListener('state', callback);
    }, []);
    return {
      currentRoute,
    };
  };
  
  export default {
    getActiveRoute,
    getActiveRouteName,
    getCurrentRouteName,
    navigate,
    setTopLevelNavigator,
  };