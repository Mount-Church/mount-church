import { FooterGlobal, Nav } from 'components';
import { AssistanceDonateOverView, HowToContribute, HowWeUseYourDonation, ToContributeProvidingABetterWorld } from 'components/AssistanceComponentPage';

export function AssistancePage() {

    return (
        <>
            <Nav />
            <AssistanceDonateOverView />
            <HowToContribute />
            <HowWeUseYourDonation />
            <ToContributeProvidingABetterWorld />
            <FooterGlobal />
        </>
    );
}
