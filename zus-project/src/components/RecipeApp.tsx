import { useState } from "react";
import useStore, { type Recipe } from "../store/useStore";

const RecipeApp = () => {
  const {recipes,addRecipe,removeRecipe,updateRecipe}=useStore();

  const [name,setName]=useState("");
  const [ingredients,setIngredients]=useState("");
  const [instructions,setInstructions]=useState("");
  const [editing,setEditing]=useState<Recipe | null>(null);

  const clearForm=()=>{
    setName("");
    setIngredients("");
    setInstructions("");
    setEditing(null);
  };

  const handleAddRecipe=() => {
    if (
      name.trim() !== "" &&
      ingredients.trim() !== "" &&
      instructions.trim() !== ""
    ){
      addRecipe({
        id: Date.now(),
        name,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        instructions: instructions.split("\n").map((item) => item.trim()),
      });

      clearForm();
    }
  };

  const handleEditRecipe=(recipe: Recipe) => {
    setEditing(recipe);

    setName(recipe.name);
    setIngredients(recipe.ingredients.join(", "));
    setInstructions(recipe.instructions.join("\n"));
  };

  const handleUpdateRecipe=()=>{
    if (!editing) return;

    updateRecipe({
      id: editing.id,
      name,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions: instructions.split("\n").map((item) => item.trim()),
    });

    clearForm();
  };

  const handleCancelEdit=()=>{
    clearForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          Recipe Book
        </h1>

        <div className="space-y-4 mb-6">
          <input type="text" value={name} placeholder="Recipe Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input type="text" value={ingredients} placeholder="Ingredients (comma separated)"
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea value={instructions} placeholder="Instructions (one step per line)"
            onChange={(e) => setInstructions(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex gap-3">
            {editing ? (
              <>
                <button onClick={handleUpdateRecipe}
                  className="bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-600"
                >
                  Update Recipe
                </button>

                <button onClick={handleCancelEdit}
                  className="bg-gray-500 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button onClick={handleAddRecipe}
                className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
              >
                Add Recipe
              </button>
            )}
          </div>
        </div>

        <ul className="space-y-4">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="p-4 bg-green-50 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                {recipe.name}
              </h2>

              <p className="text-gray-700 mb-2">
                <strong>Ingredients:</strong>{" "}
                {recipe.ingredients.join(", ")}
              </p>

              <div className="mb-3">
                <strong>Instructions:</strong>
                <ol className="list-decimal ml-5 mt-2">
                  {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="flex gap-3">
                <button onClick={() => handleEditRecipe(recipe)}
                  className="bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button onClick={() => removeRecipe(recipe.id)}
                  className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeApp;