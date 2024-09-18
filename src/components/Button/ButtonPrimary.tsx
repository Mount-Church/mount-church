import classNames from 'classnames';
import 'assets/css/stylesButtons.css';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'dark' | 'primary' | 'light';
  onClick?: VoidFunction;
  children: React.ReactNode;
};

export function ButtonPrimary({ type = 'button', variant, onClick, children }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames('py-2 px-4 text-sm buttonPrimary')}
    >
      {children}
    </button>
  );
}
