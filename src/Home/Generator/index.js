import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import HomeGeneratorRecipeTemplate from './RecipeTemplate/index.js';
const backendurl = "http://localhost:8000";


//this function will hit a path that brings up a random recipe.
/*
It should be async so that it will say loading until it produces the recipe.
Speed is essential, so that after a short loopable animation the recipe should come up.
All methods to potentially speed up the button results should be explored.
*/

const HomeGenerator = () => {
    const [content, setContent] = useState(null);
    const [recipe, setRecipe] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [shopList, setShopList] = useState(null);

    const generateRandomRecipe = () => {
        let randomnum = Math.floor(Math.random() * 10000)
        axios.get(`${backendurl}/recipes/${randomnum}`)
            .then(res => {
                console.log(res.data)
                if (res.data.name != null) {
                    setRecipe(res.data)
                } else generateRandomRecipe();               
            })
    }
    const generateByIngredient = () => {
        axios.get(`${backendurl}/recipes/${randomnum}`)
            .then(res => {
                console.log(res.data)
                if (res.data.name != null) {
                    setRecipe(res.data)
                } else generateRandomRecipe();               
            })
    }
    const generateWeekMenu = () => {
        let recipeArray = ["1","2","3","4","5","6","7"];
        setRecipes(recipeArray);
    }
    const printShoppingList = () => {
        
    }
    return (
        <div className="generator-div">
            <div className="generator-input-div">
                <h2>What would you like to do today?</h2>
                <ul id="button-radio">
                    <li>
                        <button onClick={generateRandomRecipe}>Generate Random Recipe</button>
                    </li>
                    <li>
                        <button onClick={generateWeekMenu}>Generate Week Menu</button>
                    </li>
                    <li>
                        <button onClick={printShoppingList}>Print Shopping List</button>
                    </li>
                    <li>
                        <button onClick={generateByIngredient}>Find Recipes with an ingredient</button><input type="text"></input>
                    </li>
                </ul>
                <ul id="recipe history">

                </ul>
            </div>
            <div className="generator-output-div">
                <HomeGeneratorRecipeTemplate key={recipe} recipe={recipe}></HomeGeneratorRecipeTemplate>
            </div>
        </div>
    )
}

export default HomeGenerator;