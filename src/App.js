
import React, { useState } from 'react';
import Recipe from './component/recipefeature/recipe';
import Recipe_list from './component/recipelist';


const App = () => {
  const [search, setSearch] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(Recipe_list);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();

    // Filter recipes based on the search input
    const filtered = Recipe_list.filter((recipe) =>
      recipe.label.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredRecipes(filtered);
  };

  return (
    <div className="App">

      <p style={{fontSize:'50px',fontWeight:'500',textAlign:'center',color:'Yellow',marginTop:'5px',textTransform:'uppercase'}}>Recipe Catlog</p>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {filteredRecipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.label}
            calories={recipe.calories}
            image={recipe.image}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
