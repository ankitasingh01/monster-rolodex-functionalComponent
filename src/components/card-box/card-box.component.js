import React from "react";
import "./card-box.styles.css";

// const CardBox = ({ monster: {name, id, email} }) => {
// Destructuring also works like above one

const CardBox = ({ monster }) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}/size=180*180?set=set2`}
        width="180px"
        height="180px"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardBox;
