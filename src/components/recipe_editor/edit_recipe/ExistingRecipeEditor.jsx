import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

//components
import AddIngredients from "../AddIngredients";
import IngredientMap from "../IngredientMap";
import RecipeTagCategoryMap from "../RecipeTagCategoryMap";

const ExistingRecipeEditor = ({ ingredientTag, recipeTag }) => {

    const recipeName = useRef("");
    const recipeDescription = useRef("");
    const recipeCategory = useRef("");
    const [closeWindow, setCloseWindow] = useState(false);
    const [ingredientList, setIngredientList] = useState([]);
    const navigate = useNavigate();

    const sendRecipe = (e) => {
        e.preventDefault();

        setIngredientList([]);
        window.alert("Recipe added!");
        navigate("/");
    }
    
    const addIngredientToList = (name, tagId) => {
        setIngredientList([...ingredientList, { name: name, tag: tagId }]);
    }

    return (
        <div>
            <form className="flex flex-col gap-4 p-4">
                <div>
                    <label for="recipe_name">Recipe name</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="recipe_name" placeholder="casserole" ref={recipeName}></input>
                </div>
                <div>
                    <label for="recipe_description">Description</label>
                    <input className=" h-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="recipe" placeholder="Steps..." ref={recipeDescription}></input>
                </div>
                <div>
                    <label for="recipe_category">Category</label>
                    <select ref={recipeCategory} name="recipe_category">
                        <RecipeTagCategoryMap
                            array={recipeTag}
                        />
                    </select>
                </div>
                <div>
                    <button onClick={() => setCloseWindow(true)} type="button" className="text-xl m-0.5 p-1 border border-gray-400 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Add new ingredient</button>
                </div>
                <div className="flex flex-row flex-wrap p-4 gap-4 justify-center">
                    {
                        ingredientList.length < 1 ? (
                            <></>
                        ) : (
                            <IngredientMap setter={setIngredientList} ingredientList={ingredientList} />
                        )
                    }
                </div>
                <div>
                    <button onClick={(e) => sendRecipe(e)}>Save</button>
                </div>
            </form>

            {closeWindow ? (
                <>
                    <AddIngredients
                        arrayOfTagCategories={ingredientTag}
                        getIngredient={addIngredientToList}
                        closeWindow={setCloseWindow} />
                </>
            )
                : (
                    <>
                    </>
                )}

        </div>
    )
};

export default ExistingRecipeEditor;
