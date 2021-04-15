import React, {useState} from 'react';

const HomeGeneratorRecipeTemplate = (props) => {
    if (props.recipe == null){
        return (<h3>Loading...</h3>)
    }
    const recipe = props.recipe;
    const name = recipe.name;
    const author = recipe.author;
    const description = recipe.description;
    //write function to map method steps and ingredients to li documents
    const method = recipe.method;
    const ingredients = recipe.ingredients;
    const servings = recipe.servings;
    
    return(
    <div key={props.recipe}className ="generator-recipe">
        <h1>{name}</h1>
        <h2>{author}</h2>
        <h3>{description}</h3>
        <ul>
            {ingredients.map((ingredient,index)=>{
                return(
                    <li className="ingredient-list-item" key={index}><h3>{ingredient}</h3></li>
                )
            })}
        </ul>
        <ul>
            {method.map((step,index)=>{
                return(
                    <li className="method-list-item" key={index}><h3>{step}</h3></li>
                )
            })}
        </ul>
        <h3>{servings}</h3>
    </div>)
}

export default HomeGeneratorRecipeTemplate;