
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import Favourite from './Favourite';
import './App.css';

const App = () => {
  let value = null;

  const callbackFunction = () => {
    value = !value1;
    setValue1(value);
    console.log(value);
  };

  const APP_ID = 'f0c02c2a';
  const APP_KEY = '6fa38c66621d47e9c4124a944ef03ced';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [value1, setValue1] = useState(true);


  useEffect(() => {
    getRecipes();
  }, [query]);

  useEffect(() => {
    getFavourites();
  }, [value1]);


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getFavourites = async () => {
    setTimeout(async () => {
      const response1 = await axios.get(`http://127.0.0.1:4000/posts`);
      setFavourites(response1.data);
      console.log(response1.data);
    }, 300);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <hr />
      {favourites.map((favourite) => (
        <Favourite
          id={favourite._id}
          key={favourite.title}
          title={favourite.title}
          calories={favourite.calories}
          image={favourite.image}
          ingredients={favourite.ingredients}
          update={callbackFunction}
        />
      ))}
      <hr />
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            update={callbackFunction}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
