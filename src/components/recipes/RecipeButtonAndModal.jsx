import { useEffect, useState } from "react";

const RecipesArray = ({ recipeArray, ingredientArray }) => {

    const [showRecipeId, setShowRecipeId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ingredients, setIngredients] = useState([]);


    useEffect(() => {
        const getIngredients = (id) => {
            ingredientArray(id).then((data) => {
                setLoading(false);
                setIngredients(data)
            });
        }
        if (showRecipeId !== null) {
            getIngredients(showRecipeId);
        }
    }, [showRecipeId, ingredientArray])

    return (
        <div className="flex flex-row flex-wrap p-4 gap-4 justify-center ">{
            recipeArray.map((data) => {
                return (
                    <>
                        <button key={data.recipe_id} onClick={() => setShowRecipeId(data.recipe_id)} className="bg-gradient-to-b from-orange-50 to-slate-50 basis-1/4 h-24 rounded-lg shadow">
                            <p className="font-extralight break-all truncate p-2 text-lg">{data.recipe_name}</p>
                        </button>
                        {showRecipeId === data.recipe_id && !loading ? (
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{data.recipe_name}</h1>
                                            <button
                                                className="shadow-sm text-2xl font-bold text-gray-400 p-1"
                                                onClick={() => setShowRecipeId(null)}>X</button>
                                        </div>
                                        <div className="relative p-4 flex text-center justify-around break-all">
                                            <p>{data.recipe_description}</p>
                                        </div>
                                        <div className="relative p-4 flex text-center justify-around break-all">

                                        </div>
                                        <div className=" mt-2 flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b gap-2">
                                            <button className="p-2">Add to meal plan</button>
                                            <button >Delete</button>
                                        </div>
                                        {ingredients.map((ingredient) => {
                                            return ingredient.ingredient_name + " ";
                                        })}
                                    </div>
                                </div>
                            </div>
                        ) : <></>}
                    </>
                )
            })
        }</div>
    )
};

export default RecipesArray;