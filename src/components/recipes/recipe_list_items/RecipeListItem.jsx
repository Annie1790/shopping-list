import { useState, useEffect } from "react";

const RecipeListItem = ({ ingredientArray, segment }) => {

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const getIngredients = (id) => {
            ingredientArray(id).then((data) => {
                setLoading(false);
                setIngredients(data);
            });
        }
        if (showModal === true && loading === true) {
            getIngredients(segment.recipe_id);
        }
    }, [segment.recipe_id, ingredientArray, loading, showModal])

    const Spinner = () => {
        return (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
                <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                    <div className="border-t-transparent border-solid animate-spin  rounded-full border-pink-500 border-8 h-24 w-24"></div>
                </div>
            </div>
        )
    }

    const Modal = () => {
        return (
            <div key={segment.recipe_name} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{segment.recipe_name}</h1>
                            <button
                                className="shadow-sm text-2xl font-bold text-gray-400 p-1"
                                onClick={() => { setShowModal(false); setLoading(true) }}>X</button>
                        </div>
                        <div className="text-slate-400 text-xl relative p-4 flex text-left break-all">
                            <p key={segment.recipe_description}>{segment.recipe_description}</p>
                        </div>
                        <label className="px-4 text-2xl border-b border-solid border-slate-200 text-slate-600">Ingredients:</label>
                        <li className="divide-y relative p-4 flex flex-col text-left justify-around break-all">
                            {ingredients.map((ingredient) => {
                                return (<div className="text-slate-600 px-4" key={ingredient.ingredient_id}>{ingredient.ingredient_name}</div>)
                            })}
                        </li>
                        <div className=" mt-2 flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b gap-4">
                            <button className="p-2 rounded-lg bg-pink-500/50 text-xl text-white" >Add to meal plan</button>
                            <button className="p-2 rounded-lg bg-red-500/90 text-xl text-white">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Button = () => {
        return (
            <button key={segment.recipe_id} onClick={() => setShowModal(true)} className="bg-gradient-to-b from-orange-50 to-slate-50 basis-1/4 h-24 rounded-lg shadow">
                <p className="font-extralight break-all truncate p-2 text-lg">{segment.recipe_name}</p>
            </button>
        )
    }

    if (showModal === true && loading === true) {
        return <>
            <Button />
            <Spinner />
        </>
    } else if (showModal === true && loading === false) {
        return (
            <>
                <Button />
                <Modal />
            </>
        )
    } else {
        return <Button />
    }


}
export default RecipeListItem;
