import React from "react";
import { ICONS } from "./Icons";
import PropTypes from "prop-types";

const iconColors = {
  default: "#5e6165",
  primary: "#389bff"
};

const Icon = props => {
  const { icon, color, width, height } = props;

  return (
    <svg
      className='tab-icon'
      width={width}
      height={height}
      viewBox={ICONS[icon].viewBox}
    >
      <path d={ICONS[icon].path} fill={iconColors[color]} />
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

Icon.defaultProps = {
  width: 22,
  height: 22
};

export default Icon;
