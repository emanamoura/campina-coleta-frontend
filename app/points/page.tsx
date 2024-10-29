import { MantineProvider } from "@mantine/core";
import CollectPointsList from "../collect-points-list";
import '@mantine/core/styles.css';

function Points() {

    return (
        <MantineProvider>
            <CollectPointsList />
        </MantineProvider>
    )
}
export default Points;