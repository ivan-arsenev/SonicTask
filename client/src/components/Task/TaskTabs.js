import React from "react";
import style from "./styles.module.css";

export function TabItem(props) {
  return <div {...props} />;
}

export function Tabs(props) {
  const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);
  const changeTab = newIndex => {
    if (typeof props.onTabClick === "function") props.onTabClick(newIndex);
    setBindIndex(newIndex);
  };
  const items = props.children.filter(item => item.type.name === "TabItem");

  return (
    <>
      <div className={style.menu_section}>
        {items.map(({ props: { index, label, icon, counter } }) => (
          <button
            key={`${index}`}
            onClick={() => changeTab(index)}
            className={
              style.section_button +
              " " +
              (bindIndex === index ? style.focus : "")
            }
          >
            {icon}
            <span style={{ color: bindIndex === index ? "#ffff" : "#5e6165" }}>
              {label}
            </span>
            {counter}
          </button>
        ))}
      </div>
      <div className={style.tabview}>
        {items.map(({ props }) => (
          <div
            {...props}
            className={style.tabview_item}
            key={props.index}
            style={{ display: bindIndex === props.index ? "block" : "none" }}
          />
        ))}
      </div>
    </>
  );
}
