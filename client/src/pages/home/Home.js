import React from 'react';
import {SearchBar} from '../../components/searchBar/SearchBar';
import {AddItemBar} from '../../components/addItemBar/AddItemBar';
import {ItemsDisplay} from '../../components/itemsDisplay/ItemsDisplay';
import {DeleteBar} from '../../components/deleteBar/DeleteBar';
import "./Home.scss";
import {TodoListProvider} from '../../context/TodoListContext';


export const Home = () => {
  return (
    <TodoListProvider>
      <div className="homeWrapper">
        <SearchBar/>
        <AddItemBar/>
        <ItemsDisplay/>
        <DeleteBar/>
      </div>
    </TodoListProvider>
  );
};
