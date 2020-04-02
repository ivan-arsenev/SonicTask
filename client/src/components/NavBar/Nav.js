import React from "react";
import style from "./style.module.css";
import Icon from "../Utils/Icon";

const Nav = props => {
  return (
    <nav className={style.top_nav}>
      <div className={style.search}>
        <Icon width={17} height={16} icon='search' color='default' />
      </div>
      <div className={style.account}>
        <div className={style.avatar}></div>
        <Icon width={9} height={5} icon='expand_down' color='default' />
      </div>
    </nav>
  );
};

export default Nav;
