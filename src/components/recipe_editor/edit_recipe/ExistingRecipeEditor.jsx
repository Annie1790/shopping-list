import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import AddIngredients from "../AddIngredients";
import IngredientMap from "../IngredientMap";
import RecipeTagCategoryMap from "../RecipeTagCategoryMap";

const ExistingRecipeEditor = ({ ingredientTag, recipeTag, selectedRecipe, post, del, ingredientById }) => {


    const recipeName = useRef(selectedRecipe.recipe_name);
    const recipeDescription = useRef(selectedRecipe.recipe_description);
    const recipeCategory = useRef("");
    const [closeWindow, setCloseWindow] = useState(false);
    const [ingredientList, setIngredientList] = useState([]);
    const [loadedRecipeId, setLoadedRecipeId] = useState(null);
    const navigate = useNavigate();

    const sendRecipe = (e) => {
        e.preventDefault();
        let updatedRecipe = {
            recipe_name: recipeName.current.value,
            recipe_description: recipeDescription.current.value,
            recipe_category: parseInt(recipeCategory.current.value),
            recipe_id: selectedRecipe.recipe_id,
            recipe_ingredients: ingredientList
        }
        del(updatedRecipe.recipe_id).then(() => {
            post(updatedRecipe).then(() => {
                window.alert("Recipe modified!");
                navigate("/");
                window.location.reload();
            });
        });
    }

    useEffect(() => {
        const getIngredients = (id) => {
            ingredientById(id).then((data) => {
                setLoadedRecipeId(id);
                setIngredientList(data);
            })
        }
        if (loadedRecipeId !== selectedRecipe.recipe_id) {
            getIngredients(selectedRecipe.recipe_id)
        }
    }, [selectedRecipe, loadedRecipeId])

    const addIngredientToList = (name, tagId) => {
        setIngredientList([...ingredientList, { ingredient_name: name, ingredient_category: tagId }]);
    }

    const Spinner = () => {
        return (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
                <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                    <div className="border-t-transparent border-solid animate-spin  rounded-full border-pink-500 border-8 h-24 w-24"></div>
                </div>
            </div>
        )
    }

    const Editor = () => {
        return (
            <div>
                <form className="flex flex-col gap-4 p-4">
                    <div>
                        <label for="recipe_name">Recipe name</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="recipe_name" placeholder="casserole" ref={recipeName} key={selectedRecipe.recipe_name} defaultValue={selectedRecipe.recipe_name}></input>
                    </div>
                    <div>
                        <label for="recipe_description">Description</label>
                        <input className=" h-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="recipe" placeholder="Steps..." ref={recipeDescription} key={selectedRecipe.recipe_description} defaultValue={selectedRecipe.recipe_description}></input>
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
                        <IngredientMap setter={setIngredientList} ingredientList={ingredientList} />
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
    }

    return (
        loadedRecipeId !== selectedRecipe.recipe_id ? <Spinner /> : <Editor />
    )
};

export default ExistingRecipeEditor;
