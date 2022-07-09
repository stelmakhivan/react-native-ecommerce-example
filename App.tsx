import {Text} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {ErrorBoundary} from 'components/ErrorBoundary/ErrorBoundary';

const App = () => (
  <SafeAreaProvider>
    <ErrorBoundary>
      <PaperProvider>
        <SafeAreaView>
          <Text>Ecommerce</Text>
        </SafeAreaView>
      </PaperProvider>
    </ErrorBoundary>
  </SafeAreaProvider>
);

export default App;
