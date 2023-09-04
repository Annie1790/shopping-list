import { useState } from "react";

import RecipeMap from "./RecipeMap";
import ExistingRecipeEditor from "./ExistingRecipeEditor";

//todo: pass recipes prop
const ExistingRecipeSelector = ({ ingredientTag, recipeTag }) => {

    const [isRecipeSelected, setIsRecipeSelected] = useState(null);
    const [recipe, setRecipe] = useState({});

    //todo: write getter to get back all recipes from be

    return (
        <div className="flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4 overflow-y-scroll no-scrollbar">
            <div className="px-10 py-2">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Edit recipe</h1>
                <div className="pt-5 flex flex-wrap flex-row gap-5">
                    <h1 className="text-3xl">Select recipe:</h1>
                    <select onChange={() => setIsRecipeSelected(true)} className="w-40 rounded">
                        <RecipeMap />
                    </select>
                </div>
            </div>
            <div>
                {isRecipeSelected !== null ? <ExistingRecipeEditor
                    ingredientTag={ingredientTag}
                    recipeTag={recipeTag}
                /> : <></>}
            </div>
        </div>
    )
};

export default ExistingRecipeSelector;