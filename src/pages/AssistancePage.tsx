import { FooterGlobal, Nav } from 'components';
import {
    AssistanceDonateOverView,
    HowToContribute,
    HowWeUseYourDonation,
    JoinOurMinistry,
    ToContributeProvidingABetterWorld
} from 'components/AssistanceComponentsPage';

export function AssistancePage() {

    return (
        <>
            <Nav />
            <AssistanceDonateOverView />
            <HowToContribute />
            <HowWeUseYourDonation />
            <ToContributeProvidingABetterWorld />
            <JoinOurMinistry />
            <FooterGlobal />
        </>
    );
}
