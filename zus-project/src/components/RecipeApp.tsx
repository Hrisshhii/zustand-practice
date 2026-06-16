import useStore from "../store/useStore";

const RecipeApp=()=>{
  const {recipes,addRecipe,removeRecipe}=useStore();
  return (
    <div>RecipeApp</div>
  )
}

export default RecipeApp