import useStore from "../store/useStore";
import { useState } from "react";

interface Recipe{
  id:number;
  name:string,
  ingredients:string[];
  instructions:string[];
}

const RecipeApp=()=>{
  const {recipes,addRecipe,removeRecipe}=useStore();
  const [name,setName]=useState<string>('');
  const [ingredients,setIngredients]=useState<string>('');
  const [instructions,setInstructions]=useState<string>('');
  const [editing,setEditing]=useState<Recipe | null>(null);

  return (
    <div className=""></div>
  )
}

export default RecipeApp