import React, { useState } from "react";
import styles from "./styles.module.css";
import Icon from "../Utils/Icon";
import { Tabs, TabItem } from "./TaskTabs";
import PropTypes from "prop-types";
import TaskCard from "../TaskCard/TaskCard";
import { ControlledInput } from "../Utils/InputHelpers";
// placeholder
import placeholder_avatar from "./avatar_placeholder.png";

const CommentInput = props => {
  return (
    <div className={styles.comment_input}>
      <ControlledInput
        bg_color='#22252a'
        placeholder='Add your comment...'
        callback={val => console.log(val)}
      />
    </div>
  );
};

const Comment = ({ nickname, avatar_url, comment_text }) => {
  console.log(avatar_url);
  return (
    <div className={styles.comment_container}>
      <div className={styles.comment_title}>
        <img
          className={styles.comment_avatar}
          src={avatar_url}
          alt='comment avatar'
        />
        <span className={styles.comment_nickname}>{nickname}</span>
      </div>
      <div className={styles.comment_text}>{comment_text}</div>
    </div>
  );
};

const Card = ({
  title,
  done,
  project,
  priority_text,
  due_date,
  description
}) => {
  const [checkBox, setCheckBox] = useState(done);

  return (
    <div className={styles.card}>
      <div className={styles.card_title_bar}>
        <div
          className={
            styles.card_checkbox + " " + (checkBox ? styles.focus_checkbox : "")
          }
          onClick={() => setCheckBox(!checkBox)}
        >
          {checkBox ? <Icon color='white' icon='checkbox' /> : ""}
        </div>
        <span className={styles.card_titile}>{title}</span>
      </div>
      <div className={styles.card_project_label}>
        <div
          style={{
            backgroundColor: "#4A89DC",
            height: "12px",
            width: "12px",
            borderRadius: "5px",
            marginRight: "15px"
          }}
        ></div>
        <span className={styles.card_project_title}>Project:</span>
        <span className={styles.card_project_text}>{project}</span>
      </div>
      <div className={styles.card_meta_box}>
        <div className={styles.card_meta_tegs}>
          <section style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#4A89DC",
                height: "12px",
                width: "12px",
                borderRadius: "5px",
                marginRight: "15px"
              }}
            ></div>
            <div className={styles.card_project_title}>Priority:</div>
            <div className={styles.card_project_text}>{priority_text}</div>
          </section>

          <section style={{ display: "flex" }}>
            <div className={styles.card_project_title}>Due:</div>
            <div className={styles.card_project_text}>{due_date}</div>
          </section>
        </div>
        <div className={styles.card_discription}>{description}</div>
      </div>
      <Comment
        nickname='John Due'
        avatar_url={placeholder_avatar}
        comment_text='This is unbelivable so cool, This is unbelivable so cool .This is unbelivable so cool'
      />
      <Comment
        nickname='Stefan Sam'
        avatar_url={placeholder_avatar}
        comment_text='This is unbelivable so cool'
      />
      <Comment
        nickname='Domenic Clock'
        avatar_url={placeholder_avatar}
        comment_text='Just want to say hi'
      />
      <CommentInput />
    </div>
  );
};

const CardContainer = props => {
  return (
    <div className={styles.card_container}>
      <Card
        title='Integrate PayPal and Stripe 
checkout '
        done={true}
        project='Payments'
        priority_text='High'
        due_date='Today'
        description='This is example description so much staff goind there be cereful'
      />
      <Card
        title='Integrate PayPal and Stripe 
checkout '
        done={true}
        project='Payments'
        priority_text='High'
        due_date='Today'
        description='This is example description so much staff goind there be cereful'
      />
    </div>
  );
};

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
      </div>
      <CardContainer />
    </nav>
  );
};

Task.propTypes = {};

export default Task;
