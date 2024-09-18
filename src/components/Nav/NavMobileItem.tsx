import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import { useNavMobileContext } from 'contexts';

import 'assets/css/stylesNav.css';

type Props = {
  to: string;
  variant?: 'default' | 'primary';
  children: React.ReactNode;
};

export function NavMobileItem({ to, variant = 'default', children }: Props) {
  const navigate = useNavigate();
  const { setIsVisible } = useNavMobileContext();

  let bgColor =
    'navItemMenuMobile'
  if (variant === 'primary') {
    bgColor =
      'bg-primary hover:bg-primaryLight active:bg-primaryDark transition-all text-white';
  }

  function handleButtonClick() {
    setIsVisible(false);
    navigate(to);
    console.log(setIsVisible, navigate, '[DEBUG] Clicou para trocar de pagina')
  }

  return (
    <button
      onClick={handleButtonClick}
      className={classNames('w-full p-4 border-b border-gray-100 flex items-start', bgColor)}
    >
      {children}
    </button>
  );
}
