import { MouseEvent, useState } from 'react';
import NavigationBar from './NavigationBar';
import hamburgerIcon from '/images/icons/icon-hamburger.svg';
import roomIcon from '/images/logo.svg';

export default function NavigationHeader() {
  const [active, setActive] = useState<boolean>(false);

  const openHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!active) setActive(true);
  };

  const closeHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (active) setActive(false);
  };

  return (
    <>
      <header className="header">
        <button
          className="header__button"
          type="button"
          aria-label="open navigation bar"
          onClick={openHandler}
        >
          <img src={hamburgerIcon} alt="" />
        </button>
        <img className="header__logo" src={roomIcon} alt="room's logo" />
      </header>
      <NavigationBar onClick={closeHandler} isActive={active} />
    </>
  );
}
