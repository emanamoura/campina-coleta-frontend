
import { MantineProvider } from "@mantine/core";
import CollectPointsList from "./collect-points-list";
import '@mantine/core/styles.css';
import Home from "./components/pages/Home";


export default function Index() {

  return (
    <MantineProvider>
      <Home/>
      
    </MantineProvider>
    
  )
}
