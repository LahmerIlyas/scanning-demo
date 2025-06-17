import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { MainNavigator } from '@/navigation';
import { ApolloProvider } from '@apollo/client/react';
import { client } from '@/client';
import { AuthContextProvider } from '@/context/Auth';

export function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AuthContextProvider>
        <ApolloProvider client={client}>
          <MainNavigator />
        </ApolloProvider>
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
