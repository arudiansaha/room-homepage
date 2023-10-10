import { MouseEvent } from 'react';
import closeIcon from '/images/icons/icon-close.svg';

type NavigationBarProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
}

export default function NavigationBar({
  onClick, isActive,
}: NavigationBarProps) {
  const className = isActive ? 'navbar active' : 'navbar';

  return (
    <nav className={className}>
      <button
        className="navbar__button"
        type="button"
        aria-label="close navigation bar"
        onClick={onClick}
      >
        <img src={closeIcon} alt="" />
      </button>
      <ul className="navbar__list">
        <li className="navbar__item"><a href="/home">home</a></li>
        <li className="navbar__item"><a href="/shop">shop</a></li>
        <li className="navbar__item"><a href="/about">about</a></li>
        <li className="navbar__item"><a href="/contact">contact</a></li>
      </ul>
    </nav>
  );
}
