import React from "react";
import { Item } from "../item/Item";
import "./ItemsList.scss";

export function ItemsList({ data }) {
  const { title, list } = data;
  return (
    <div className="itemsWrapper">
      <div className="title">{title}</div>
      {list.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  );
}
