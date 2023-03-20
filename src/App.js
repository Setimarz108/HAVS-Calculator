import HavsCalculator from "./components/HavsCalculator";
import { ChakraProvider } from '@chakra-ui/react'



export default function App() {
  return (
    <ChakraProvider>
    <div className="App">
   
      <HavsCalculator/>
    </div></ChakraProvider>
  );
}
