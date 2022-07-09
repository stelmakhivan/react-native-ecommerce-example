import {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ErrorBoundary} from 'components/ErrorBoundary/ErrorBoundary';

import {navigationRef} from 'navigators/navigationRef';
import {MainTabNavigator} from 'navigators/tabs/MainTabNavigator/MainTabNavigator';

import {useNavigationContainer} from 'hooks/useNavigationContainer/useNavigationContainer';

const App: FC = () => {
  const {onReady, onStateChange} = useNavigationContainer();

  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <PaperProvider>
          <NavigationContainer
            ref={navigationRef}
            onReady={onReady}
            onStateChange={onStateChange}>
            <MainTabNavigator />
          </NavigationContainer>
        </PaperProvider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default App;
