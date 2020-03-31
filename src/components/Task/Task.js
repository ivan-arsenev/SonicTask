import React, { useState } from "react";
import styles from "./styles.module.css";
import Icon from "../Utils/Icon";
import { Tabs, TabItem } from "./TaskTabs";
import PropTypes from "prop-types";

const Task = props => {
  const [index, setIndex] = useState("2");
  return (
    <nav className={styles.main_container}>
      <div className={styles.menu_container}>
        <div className={styles.menu_header}>Layout</div>
        <Tabs defaultIndex='1' onTabClick={setIndex}>
          <TabItem
            icon={
              <Icon
                color={index === "1" ? "primary" : "default"}
                width='26'
                height='26'
                icon='list_view'
              />
            }
            label={"List view"}
            index='1'
          >
            List view
          </TabItem>
          <TabItem
            icon={
              <Icon
                color={index === "2" ? "primary" : "default"}
                width='26'
                height='26'
                icon='grid_view'
              />
            }
            label={"Grid view"}
            index='2'
          >
            Grid view
          </TabItem>
        </Tabs>
        {/* <div className={styles.menu_section}>
          <button className={styles.section_button}>
            <Icon color={index === "1" ? "primary" : "default"} icon='list_view' width='26' height='26' />{" "}
            <span>List view</span>
          </button>
          <button className={styles.section_button}>
            <Icon color={index === "1" ? "primary" : "default"} icon='grid_view' width='26' height='26' />{" "}
            <span>Grid view</span>
          </button>
        </div> */}
      </div>
    </nav>
  );
};

Task.propTypes = {};

export default Task;
