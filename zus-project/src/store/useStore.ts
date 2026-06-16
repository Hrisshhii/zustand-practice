import { create } from "zustand";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipeStore {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: number) => void;
  updateRecipe: (recipe: Recipe) => void;
}

const useStore = create<RecipeStore>((set) => ({
  recipes: [],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter(
        (recipe) => recipe.id !== id
      ),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id
          ? updatedRecipe
          : recipe
      ),
    })),
}));

export default useStore;