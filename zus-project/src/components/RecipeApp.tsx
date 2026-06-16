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
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          Recipe
        </h1>
      </div>
    </div>
  )
}

export default RecipeApp