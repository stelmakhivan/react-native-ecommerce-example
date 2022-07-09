import {SafeAreaView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => (
  <PaperProvider>
    <SafeAreaView>
      <Text>Ecommerce</Text>
    </SafeAreaView>
  </PaperProvider>
);

export default App;
