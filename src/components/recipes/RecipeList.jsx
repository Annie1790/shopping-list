import RecipeListItem from "./recipe_list_items/RecipeListItem";

const RecipeList = ({ recipeArray, ingredientArray,deleteRecipe, starRecipe, addMealPlan }) => {

    const returnRecipesArray = () => {
        let arr = [];
        for (let segment of recipeArray) {
            arr.push(
                <RecipeListItem
                    ingredientArray={ingredientArray}
                    segment={segment}
                    deleteRecipe={deleteRecipe}
                    starRecipe={starRecipe}
                    addMealPlan={addMealPlan}
                />
            )
        }
        return arr;
    }

    return (
        <div className="flex flex-row flex-wrap gap-4 justify-center">
            {(returnRecipesArray())}
        </div>
    )
};

export default RecipeList;
