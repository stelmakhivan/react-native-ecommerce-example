import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ErrorBoundary} from 'components/ErrorBoundary/ErrorBoundary';

import {navigationRef} from 'navigators/navigationRef';
import {MainTabNavigator} from 'navigators/tabs/MainTabNavigator/MainTabNavigator';

const App = () => (
  <SafeAreaProvider>
    <ErrorBoundary>
      <PaperProvider>
        <NavigationContainer ref={navigationRef}>
          <MainTabNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ErrorBoundary>
  </SafeAreaProvider>
);

export default App;
