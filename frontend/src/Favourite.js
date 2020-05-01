import React from 'react';
import axios from 'axios';
import style from './favourite.module.css';

const Favourite = (props) => {
  const deleteFavourites = () => {
    axios.delete(`http://127.0.0.1:4000/posts/${props.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };


  return (
    <div className={style.recipe}>
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map((ingredient) => (<li>{ingredient.text}</li>))}
      </ol>
      <p>{props.calories}</p>
      <img className={style.image} src={props.image} alt="" />
      <button
        className={style.search_button}
        onClick={(e) => {
          props.update(e);
          deleteFavourites(e);
        }}
      >
        Delete
      </button>
    </div>
  ); 
};

export default Favourite;
