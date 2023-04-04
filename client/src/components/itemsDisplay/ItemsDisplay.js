import React from "react";
import "./ItemsDisplay.scss";
import { ItemsList } from "./itemsList/ItemsList";
import { useTodoList } from "../../hooks/useTodoList";

export function ItemsDisplay() {
  const { searchRes } = useTodoList();

  return (
    <div className="itemsDisplayWrapper">
      {/* TODO List */}
      <ItemsList
        data={{
          title: "ToDo",
          list: searchRes.filter((item) => !item.checked).sort((a,b)=> a.text.localeCompare(b.text)),
        }}
      />

      {/* DONE List */}
      <ItemsList
        data={{
          title: "DONE",
          list: searchRes.filter((item) => item.checked).sort((a,b)=> a.text.localeCompare(b.text)),
        }}
      />
    </div>
  );
}
