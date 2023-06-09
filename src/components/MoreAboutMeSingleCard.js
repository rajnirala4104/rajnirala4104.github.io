import React from "react";

export const MoreAboutMeSingleCard = (props) => {
  return (
    <div className="moreAboutMeCard">
      <img
        className="shadow"
        src={props.cardImage}
        alt="Oops!!"
        loading="lazy"
      />
      <div className={`cardRightContent ${props.backgroundImage}`}>
        <div className="text">
          <h3>{props.cardTitle}</h3>
          <p>
            {props.cardAbout}
          </p>
        </div>
      </div>
    </div>
  );
};
