import {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {ErrorBoundary} from 'components/ErrorBoundary/ErrorBoundary';

import {queryClient} from 'api/client/queryClient';
import {navigationRef} from 'navigators/navigationRef';
import {MainTabNavigator} from 'navigators/tabs/MainTabNavigator/MainTabNavigator';
import {store, persistor} from 'store';

import {useNavigationContainer} from 'hooks/useNavigationContainer/useNavigationContainer';

const App: FC = () => {
  const {onReady, onStateChange} = useNavigationContainer();

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <PaperProvider>
                <NavigationContainer
                  ref={navigationRef}
                  onReady={onReady}
                  onStateChange={onStateChange}>
                  <MainTabNavigator />
                </NavigationContainer>
              </PaperProvider>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default App;
