import React from "react"; 
import style from './recipe.css'; 

const Recipe = ({title,calories,image,ingredients}) =>{ 
	const displayIngredients = ingredients.slice(0, 4); 

	return( 
		<div className={style.recipe}> 
			<h1>{title}</h1> 
			<ol> 
				{displayIngredients.map((ingredient,index)=>( 
				
					<li key={index}>{ingredient}</li> 



					
					
				))} 
			</ol> 
			
<p>Calories : {calories}</p> 

			<img className={style.image} src={image} alt=""/> 

		</div> 
	); 

} 
export default Recipe;
