import Login from './components/login'
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}



export default App;
