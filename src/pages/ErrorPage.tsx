import { Error404, FooterGlobal, Nav } from 'components';

export function ErrorPage() {
    return (
        <>
            <Nav />
            <Error404 />
            <FooterGlobal />
        </>
    );
}