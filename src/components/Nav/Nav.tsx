import { Link } from 'react-router-dom';

import 'assets/css/stylesNav.css';

import { useNavMobileContext } from 'contexts';
import { Button, HamburgerIcon, NavLogo, NavMobileItem } from 'components';
import { ButtonNavMenu } from 'components/Button/ButtonNavMenu';

export function Nav() {
  const { isVisible, setIsVisible } = useNavMobileContext();
  return (
    <nav className="sectionNav">
      <div className="AdjustmentsDivNav">
        <NavLogo />
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/homepage" className='navItemMenu'>
            <ButtonNavMenu>Home</ButtonNavMenu>
          </Link>
          <Link to="/about" className='navItemMenu'>
            <ButtonNavMenu>Sobre</ButtonNavMenu>
          </Link>
          <Link to="/location" className='navItemMenu'>
            <ButtonNavMenu>Localização</ButtonNavMenu>
          </Link>
          <Link to="/tithesandofferings" className='navItemMenu'>
            <ButtonNavMenu>Ofertas</ButtonNavMenu>
          </Link>
          {/* <Link to="/ministries" className='navItemMenu'>
            <ButtonNavMenu>Ministérios</ButtonNavMenu>
          </Link> */}
          {/* <Link to="/events" className='navItemMenu'>
            <ButtonNavMenu>Eventos</ButtonNavMenu>
          </Link> */}
          <Link to="/assistance" className='navItemMenu'>
            <ButtonNavMenu>Assistência</ButtonNavMenu>
          </Link>
          <Link to="/watch" className='navItemMenu'>
            <ButtonNavMenu>Assista</ButtonNavMenu>
          </Link>
          {/* <Link to="" className='navItemMenu'>
            <ButtonNavMenu onClick={() => window.open(`https://www.youtube.com/@MountChurchoficial/videos`, '_blank')}>
              Assista
            </ButtonNavMenu>
          </Link> */}
        </div>

        <div className="flex lg:hidden">
          <Button onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? (
              <span className="font-bold text-2xl text-[#FFFFFF]">X</span>
            ) : (
              <HamburgerIcon />
            )}
          </Button>
        </div>
      </div>
      {isVisible && (
        <div className="w-full h-[calc(100vh-81px)] fixed top-20 left-0 z-50">
          <div className="flex flex-col items-stretch justify-center">
            <NavMobileItem to="/homepage">Home</NavMobileItem>
            <NavMobileItem to="/about">Sobre</NavMobileItem>
            <NavMobileItem to="/location">Localização</NavMobileItem>
            <NavMobileItem to="/tithesandofferings">Ofertas</NavMobileItem>
            {/* <NavMobileItem to="/ministries">Ministérios</NavMobileItem> */}
            {/* <NavMobileItem to="/events">Eventos</NavMobileItem> */}
            <NavMobileItem to="/assistance">Assistência</NavMobileItem>
            <NavMobileItem to="/watch">Assista</NavMobileItem>
            {/* <NavMobileItem to="/escrever-agora" variant="primary">
              Escrever Agora
            </NavMobileItem> */}
          </div>
        </div>
      )}
    </nav>
  );
}
