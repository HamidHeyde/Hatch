import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./SearchBar.scss";
import { useTodoList } from "../../hooks/useTodoList";

export function SearchBar() {
  const [searchItem, SetSearchItem] = useState("");
  const { todoList, SetSearchRes } = useTodoList();

  const handleOnChange = (e) => SetSearchItem(e.target.value);

  useEffect(() => {
    const filterRes = !!searchItem
      ? todoList.filter(
          (item) => item.text.toLowerCase().indexOf(searchItem) > -1
        )
      : [...todoList];

    SetSearchRes([...filterRes]);
  }, [searchItem]);

  return (
    <div className="searchBarWrapper">
      <TextField
        className="searchInput"
        label="Type to Search"
        variant="outlined"
        value={searchItem}
        onChange={handleOnChange}
        focused
      />
    </div>
  );
}
