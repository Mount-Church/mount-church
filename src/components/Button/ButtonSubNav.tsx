import classNames from 'classnames';
import 'assets/css/stylesNav.css';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'dark' | 'primary' | 'light';
  onClick?: VoidFunction;
  children: React.ReactNode;
};

export function ButtonSubNavMenu({ type = 'button', variant, onClick, children }: Props) {

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames('py-2 px-4 rounded-md text-sm nav__item')}
    >
      {children}
    </button>
  );
}
