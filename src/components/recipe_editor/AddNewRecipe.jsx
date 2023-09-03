import { useState, useRef } from "react";
import AddIngredients from "./AddIngredients";
import IngredientMap from "./IngredientMap";

const AddNewRecipe = ({ tags }) => {

    const recName = useRef("");
    const recDesc = useRef("");
    const [closeWindow, setCloseWindow] = useState(false);
    const [ingredientList, setIngredientList] = useState([]);
    //when form is submitted, set ingredientList to empty arr

    const sendRecipe = () => {
        let recipeObj = {
            recipeName: recName,
            recipeDescr: recDesc,
            ingredients: ingredientList
        }
        setIngredientList([]);
    }

    const addIngredientToList = (name, tagId) => {
        setIngredientList([...ingredientList, { name: name.current.value, tag: tagId }]);
    }

    return (
        <div >
            <form className="flex flex-col gap-4 p-4">
                <div>
                    <label for="recipe_name">Recipe name</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="recipe_name" placeholder="casserole" ref={recName}></input>
                </div>
                <div>
                    <label for="recipe_description">Description</label>
                    <input className=" h-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="recipe" placeholder="Steps..." ref={recDesc}></input>
                </div>
                <div>
                    <label for="recipe_category">Category</label>
                    <select name="recipe_category">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
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
                    <button onClick={() => sendRecipe()}>Save</button>
                </div>
            </form>
                    /*modal */
            {closeWindow ? (
                <>
                    <AddIngredients
                        arrayOfTagCategories={tags}
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

export default AddNewRecipe;
