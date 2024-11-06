import { AllActivities, FooterGlobal, Nav } from 'components';
import { TheImportanceOfTithesAndOfferings } from 'components/TithesAndofferingsComponentsPage';

export function TithesOfferings() {
    return (
        <>
            <Nav />
            <TheImportanceOfTithesAndOfferings />
            <AllActivities />
            <FooterGlobal />
        </>
    );
}