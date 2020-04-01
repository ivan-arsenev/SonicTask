import React, { useEffect } from "react";

export function LimitedWordTextarea({ callback, rows, cols, value, limit }) {
  const [content, setContent] = React.useState(value);
  const [wordCount, setWordCount] = React.useState(0);

  useEffect(() => {
    callback(content);
  }, [content]);

  const setFormattedContent = text => {
    let words = text.split(" ");
    if (words.filter(Boolean).length > limit) {
      setContent(
        text
          .split(" ")
          .slice(0, limit)
          .join(" ")
      );
      setWordCount(limit);
    } else {
      setContent(text);
      setWordCount(words.filter(Boolean).length);
    }
  };

  React.useEffect(() => {
    setFormattedContent(content);
  }, []);

  return (
    <div>
      <textarea
        style={{
          backgroundColor: "#2d3035",
          border: "none"
        }}
        rows={rows}
        cols={cols}
        onChange={event => setFormattedContent(event.target.value)}
        value={content}
      />
    </div>
  );
}

export function ControlledInput({
  callback,
  type = "text",
  disabled = false,
  readOnly = false,
  defaultValue,
  placeholder = "",
  bg_color
}) {
  const [value, setValue] = React.useState(defaultValue);

  useEffect(() => {
    callback(value);
  }, [value]);

  return (
    <input
      style={{
        backgroundColor: `${bg_color}`,
        color: "#ffffff",
        fontSize: "18px",
        border: "none",
        outline: "0"
      }}
      maxLength={40}
      defaultValue={defaultValue}
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={({ target: { value } }) => setValue(value)}
    />
  );
}
