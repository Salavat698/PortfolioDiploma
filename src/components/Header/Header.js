import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import classnames from "classnames";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";

import { Menu } from "../Menu/Menu";
import { useState } from "react";

import { LanguageSelect } from "../LanguageButton/LanguageSelect";
import { FormattedMessage } from "react-intl";


function Header(props) {
  const isOnIndex = props.path === "/";
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav>
          <div className={menuActive ? classnames(styles.burger_btn, styles.active_btn) : classnames(styles.burger_btn)} onClick={() => setMenuActive(!menuActive)}>
            <span/>
          </div>
          <Menu active={menuActive} setActive={setMenuActive} OnIndex={isOnIndex}/>
        </nav>
        <div className={styles.controlsGroup}>
          <LanguageSelect/>
          <ThemeToggler/>
        </div>
      </header>
    </>
  );
}

export default Header;
