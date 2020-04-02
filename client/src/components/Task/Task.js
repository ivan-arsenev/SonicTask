import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Icon from "../Utils/Icon";
import { Tabs, TabItem } from "./TaskTabs";

// placeholder
import placeholder_avatar from "./avatar_placeholder.png";

const CommentInput = props => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return (
    <form
      className={styles.comment_form}
      onSubmit={e => {
        e.preventDefault();
        setInputValue(value);
        setValue("");
      }}
    >
      <input
        className={styles.comment_input}
        type='text'
        value={value}
        placeholder='Add your comment...'
        onChange={({ target: { value } }) => setValue(value)}
      />
    </form>
  );
};

const Comment = ({ nickname, avatar_url, comment_text }) => {
  return (
    <div className={styles.comment_container}>
      <div className={styles.comment_title}>
        <img
          className={styles.comment_avatar}
          src={avatar_url === "" ? placeholder_avatar : avatar_url}
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
  description,
  comments = []
}) => {
  const [checkBox, setCheckBox] = useState(done);

  let commentList = comments.map(comment => (
    <Comment
      nickname={comment.nickname}
      avatar_url={comment.avatar_url}
      comment_text={comment.comment_text}
      key={comment.id}
    />
  ));

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
      {commentList}
      <CommentInput />
    </div>
  );
};

const CardContainer = () => {
  const cardInitialData = {
    cards: [
      {
        id: "35",
        title: "Make dinner!",
        done: false,
        project: "Home",
        priority_text: "Modern",
        due_date: "01.02.2020",
        description: "Make dinner for this day, thank honny 😆️",
        comments: [
          {
            nickname: "Ivan",
            avatar_url: "",
            comment_text: "I will try to do that!",
            id: 1
          },
          {
            nickname: "Mike",
            avatar_url: "",
            comment_text: "Wow, i hope you could do that",
            id: 2
          }
        ]
      },
      {
        id: "43",
        title: "Take your trash out",
        done: true,
        project: "Office",
        priority_text: "High",
        due_date: "Today",
        description: "Please, put your messy staff in trash and put it out",
        comments: [
          {
            nickname: "John travis",
            avatar_url: "",
            comment_text: "I will try to do that!",
            id: 1
          },
          {
            nickname: "Mike",
            avatar_url: "",
            comment_text: "Wow, i hope you could do that",
            id: 2
          }
        ]
      }
    ]
  };

  return (
    <div className={styles.card_container}>
      {cardInitialData.cards.map(card => {
        let {
          id,
          title,
          done,
          project,
          priority_text,
          due_date,
          description,
          comments
        } = card;
        return (
          <Card
            key={id}
            title={title}
            done={done}
            project={project}
            priority_text={priority_text}
            due_date={due_date}
            description={description}
            comments={comments}
          />
        );
      })}
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

export default Task;
