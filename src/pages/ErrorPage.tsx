import { FooterGlobal, Nav } from 'components';
import { Error404 } from 'components/ErrorPage/Error404';

export function ErrorPage() {
    return (
        <>
            <Nav />
            <Error404 />
            <FooterGlobal />
        </>
    );
}
