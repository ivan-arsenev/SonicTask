import React, { useState } from "react";
import styles from "./styles.module.css";
import Icon from "../Utils/Icon";
import { Tabs, TabItem } from "./TaskTabs";
import PropTypes from "prop-types";

const TaskCounter = ({ count }) => {
  return (
    <div className={styles.task_counter}>
      <h3>{count}</h3>
    </div>
  );
};

const Task = props => {
  const [indexLayout, setIndexLayout] = useState("2");
  const [indexGeneral, setindexGeneral] = useState("1");
  return (
    <nav className={styles.main_container}>
      <div className={styles.menu_container}>
        <div className={styles.menu_header}>Layout</div>
        <Tabs defaultIndex={indexLayout} onTabClick={setIndexLayout}>
          <TabItem
            icon={
              <Icon
                color={indexLayout === "1" ? "primary" : "default"}
                width={26}
                height={26}
                icon='list_view'
              />
            }
            label={"Grid view"}
            index='1'
          ></TabItem>
          <TabItem
            icon={
              <Icon
                color={indexLayout === "2" ? "primary" : "default"}
                width={26}
                height={26}
                icon='grid_view'
              />
            }
            label={"List view"}
            index='2'
          ></TabItem>
        </Tabs>
        <div className={styles.menu_header}>General</div>
        <Tabs defaultIndex={indexGeneral} onTabClick={setindexGeneral}>
          <TabItem
            icon={
              <Icon
                color={indexGeneral === "1" ? "primary" : "default"}
                width={26}
                height={26}
                icon='active'
              />
            }
            label={"Active"}
            index='1'
            counter={<TaskCounter count={8} />}
          ></TabItem>
          <TabItem
            icon={
              <Icon
                color={indexGeneral === "2" ? "primary" : "default"}
                width={26}
                height={26}
                icon='completed'
              />
            }
            label={"Completed"}
            index='2'
            counter={<TaskCounter count={5} />}
          ></TabItem>
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
