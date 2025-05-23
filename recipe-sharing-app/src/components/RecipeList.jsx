import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);
  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No matching recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
