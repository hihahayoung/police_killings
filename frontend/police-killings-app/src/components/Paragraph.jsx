import React from "react";
import '../styles/Paragraph.css';

const Paragraph = ({ items }) => {
    return (
      <>
        {items.map((item, index) => (
          <p key={index} className={item.className}>
            {item.text}
          </p>
        ))}
      </>
    );
  };

export default Paragraph;