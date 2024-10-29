import { MantineProvider } from "@mantine/core";
import CollectPointsList from "../collect-points-list";


function Points() {
    return (
        <MantineProvider>
        <CollectPointsList/>
        </MantineProvider>
    )
}
export default Points;