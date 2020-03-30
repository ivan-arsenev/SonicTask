import React from "react";
import style from "./style.module.css";
import PropTypes from "prop-types";

const Nav = props => {
  return (
    <nav className={style.top_nav}>
      <div className={style.search}>
        <svg
          width='17'
          height='16'
          viewBox='0 0 17 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M6.25 11.5134C3.346 11.5134 0.992 9.1594 0.992 6.2554C0.992 3.3514 3.346 0.996402 6.25 0.996402C9.154 0.996402 11.508 3.3514 11.508 6.2554C11.508 9.1594 9.154 11.5134 6.25 11.5134M15.907 15.1464L11.048 10.2574C11.954 9.1734 12.5 7.7784 12.5 6.2554C12.5 2.8034 9.702 0.00540161 6.25 0.00540161C2.798 0.00540161 0 2.8034 0 6.2554C0 9.7064 2.798 12.5054 6.25 12.5054C7.818 12.5054 9.248 11.9234 10.345 10.9694L15.2 15.8534C15.395 16.0484 15.712 16.0484 15.907 15.8534C16.102 15.6584 16.102 15.3414 15.907 15.1464'
            fill='#7F8083'
          />
        </svg>
      </div>
      <div className={style.account}>
        <div className={style.avatar}></div>
        <svg
          width='9'
          height='5'
          viewBox='0 0 9 5'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M4.495 4.99L8.992 0.001L0 0L4.495 4.99Z'
            fill='#F9F9F9'
            fill-opacity='0.4'
          />
        </svg>
      </div>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
