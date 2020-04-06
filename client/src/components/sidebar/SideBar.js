import React, { useState } from "react";

import { Tabs, TabItem } from "./Tabs";
import Icon from "../icon/Icon";
import Task from "../Task/Task";

// TODO : Починить последный expand его не видно, селектор на last child

const SideBar = (props) => {
  const [index, setIndex] = useState("3");

  return (
    <Tabs defaultIndex='3' onTabClick={setIndex}>
      <TabItem
        label={
          <Icon color={index === "1" ? "primary" : "default"} icon='home' />
        }
        index='1'
      >
        home
      </TabItem>
      <TabItem
        label={
          <Icon color={index === "2" ? "primary" : "default"} icon='projects' />
        }
        index='2'
      >
        projects
      </TabItem>
      <TabItem
        label={
          <Icon color={index === "3" ? "primary" : "default"} icon='task' />
        }
        index='3'
      >
        <Task />
      </TabItem>
      <TabItem
        label={
          <Icon color={index === "4" ? "primary" : "default"} icon='contacts' />
        }
        index='4'
      >
        Contacts
      </TabItem>
      <TabItem
        label={
          <Icon color={index === "5" ? "primary" : "default"} icon='chat' />
        }
        index='5'
      >
        chat
      </TabItem>
      <TabItem
        label={
          <Icon color={index === "6" ? "primary" : "default"} icon='mail' />
        }
        index='6'
      >
        Mail
      </TabItem>
      <TabItem
        label={
          <Icon
            color={index === "7" ? "primary" : "default"}
            icon='statistics'
          />
        }
        index='7'
      >
        statistics
      </TabItem>
      <TabItem
        label={
          <Icon color={index === "8" ? "primary" : "default"} icon='expand' />
        }
        index='8'
      >
        expand
      </TabItem>
    </Tabs>
  );
};

SideBar.propTypes = {};

export default SideBar;
