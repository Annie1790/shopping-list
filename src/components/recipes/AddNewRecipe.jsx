import { useState, useRef } from "react";
import AddIngredients from "./AddIngredients";

const AddNewRecipe = ({tags}) => {

    const recName = useRef("");
    const recDesc = useRef("");
    const [closeWindow, setCloseWindow] = useState(false);

    return (
        <div >
            <form className="grid grid-cols-2 grid-rows-4 gap-4 p-4">
                <div className="col-span-1 row-span-1">
                    <label for="recipe_name">Recipe name</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="recipe_name" placeholder="casserole" ref={recName}></input>
                </div>
                <div className="col-span-2 row-span-1">
                    <label for="recipe_description">Description</label>
                    <input className=" h-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="recipe" placeholder="Steps..." ref={recDesc}></input>
                </div>
                <div className="col-span-2 row-span-1">
                    <label for="recipe_category">Category</label>
                    <select name="recipe_category">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="col-span-2 row-span-1">
                    <button onClick={() => setCloseWindow(true)} type="button" className="text-xl m-0.5 p-1 border border-gray-400 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Add new ingredient</button>
                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>

            {closeWindow ? (
                <>
                <AddIngredients 
                arrayOfTagCategories={tags}
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
