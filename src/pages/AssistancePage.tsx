import { FooterGlobal, Nav } from 'components';
import { AssistanceDonateOverView, HowToContribute } from 'components/AssistanceComponentPage';

export function AssistancePage() {

    return (
        <>
            <Nav />
            <AssistanceDonateOverView />
            <HowToContribute />
            <FooterGlobal />
        </>
    );
}
