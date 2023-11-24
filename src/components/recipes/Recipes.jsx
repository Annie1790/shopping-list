import NavAndSearch from "./NavAndSearch";
import RecipeCategoryButtons from "./RecipeCategoryButtons";
import RecipeList from "./RecipeList";

const Recipes = ({recipeArray, fetch, ingredientArray, deleteRecipe, starRecipe, addMealPlan}) => {
    return (
        <div className='flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4 overflow-y-scroll no-scrollbar'>
            <NavAndSearch />
            <RecipeCategoryButtons fetch={fetch} />
            <RecipeList 
            recipeArray={recipeArray} 
            ingredientArray={ingredientArray}
            deleteRecipe={deleteRecipe}
            starRecipe={starRecipe}
            addMealPlan={addMealPlan}
            />
        </div>
    )
}

export default Recipes;