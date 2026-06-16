import useStore from "../store/useStore";
import { useState } from "react";

const RecipeApp=()=>{
  const {recipes,addRecipe,removeRecipe}=useStore();
  const [name,setName]=useState<string>('');
  const [ingredients,setIngredients]=useState<string>('');
  const [instructions,setInstructions]=useState<string>('');
  const [editing,setEditing]=useState(null);

  return (
    <div>RecipeApp</div>
  )
}

export default RecipeApp