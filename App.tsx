import {Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <PaperProvider>
      <SafeAreaView>
        <Text>Ecommerce</Text>
      </SafeAreaView>
    </PaperProvider>
  </SafeAreaProvider>
);

export default App;
