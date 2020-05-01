import React from 'react';
import axios from 'axios';
import style from './recipe.module.css';

const Recipe = (props) => {
  const addToFavourites = async () => {
    // dodawanie tylko jednego przepisu do ulubionych
    let i = 0;
    const response2 = await axios.get(`http://127.0.0.1:4000/posts`);
    response2.data.map((favourite) => {
      if (favourite.title === props.title) {
        i = i + 1;
      }
    });
    if (i < 1) {
      const data = {
        title: props.title,
        ingredients: props.ingredients,
        calories: props.calories,
        image: props.image,
      };

      axios.post('http://127.0.0.1:4000/posts', data);
    }
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
          addToFavourites(e);
        }}
      >
        Add to favourites
      </button>
    </div>
  ); 
};

export default Recipe;
