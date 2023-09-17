import { useState, useEffect } from "react";

const RecipeListItem = ({ ingredientArray, segment, deleteRecipe, starRecipe }) => {

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [ingredients, setIngredients] = useState([]);
    const [star, setStar] = useState(segment.recipe_is_favorite);

    const isUserSureToDelete = () => {
        if (window.confirm("Are you sure?") === true) {
            deleteRecipe(segment.recipe_id);
            setShowModal(false)
        } else {
            return
        }
    }

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
    }, [segment.recipe_id, segment.recipe_is_favorite, ingredientArray, loading, showModal])

    const Spinner = () => {
        return (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
                <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                    <div className="border-t-transparent border-solid animate-spin  rounded-full border-pink-500 border-8 h-24 w-24"></div>
                </div>
            </div>
        )
    }

    const StarredRecipeSvg = () => {
        return (
            <>
                {star === true ? (
                    <button
                        onClick={() => { starRecipe({ id: segment.recipe_id, is_favorite: !star }); setStar(!star) }}
                        className="p-2 rounded-lg bg-blue-500/50 text-xl text-white">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-yellow-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </button>
                ) : (
                    <>
                        <button
                            onClick={() => { starRecipe({ id: segment.recipe_id, is_favorite: !star }); setStar(!star) }}
                            className="fill-none p-2 rounded-lg bg-blue-500/50 text-xl text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </button>
                    </>
                )}
            </>
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
                            <StarredRecipeSvg />
                            <button className="p-2 rounded-lg bg-pink-500/50 text-xl text-white" >Add to meal plan</button>
                            <button
                                onClick={() => isUserSureToDelete()}
                                className="p-2 rounded-lg bg-red-500/90 text-xl text-white">Delete</button>
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
