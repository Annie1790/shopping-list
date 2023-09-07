import NavAndSearch from "./NavAndSearch";
import RecipeCategoryButtons from "./RecipeCategoryButtons";
import RecipesArray from "./RecipeButtonAndModal";

const Recipes = ({recipeArray, fetch, ingredientArray}) => {
    return (
        <div className='flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4 overflow-y-scroll no-scrollbar'>
            <NavAndSearch />
            <RecipeCategoryButtons fetch={fetch} />
            <RecipesArray 
            recipeArray={recipeArray} 
            ingredientArray={ingredientArray}
            />
        </div>
    )
}

export default Recipes;