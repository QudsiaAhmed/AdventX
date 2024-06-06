import React from "react";

const AnimatedBtn = (props) => {
  const { text, size, color, link } = props;

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: color,
    borderRadius: "10px",
    padding: "10px 20px",
    color: color,
    fontSize: size,
    textDecoration: "none",
    textTransform: "uppercase",
    overflow: "hidden",
    transition: "0.5s",
    marginTop: "40px",
    letterSpacing: "4px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  return (
    <div>
      <a href={link} className="button" style={buttonStyle}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
      </a>
    </div>
  );
};

export default AnimatedBtn;
