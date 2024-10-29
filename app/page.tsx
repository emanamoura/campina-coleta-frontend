
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import Home from "./components/pages/Home";


export default function Index() {

  return (
    <MantineProvider>
      <Home/>
      
    </MantineProvider>
    
  )
}
