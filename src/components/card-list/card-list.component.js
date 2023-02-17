import React from "react";
import CardBox from "../card-box/card-box.component";
import "./card-list.styles.css";

const CardList = ({ filterMonsters }) => {
  return (
    <div className="card-list">
      {filterMonsters.map((newMonster) => {
        return <CardBox key={newMonster.id} monster={newMonster} />;
      })}
    </div>
  );
};

export default CardList;
