import { useState, useRef } from "react";
import TagCategoryOption from "../shopping_list/list_items/tagComponents/TagCategoryOption";

const AddIngredients = ({ arrayOfTagCategories, getIngredient, closeWindow }) => {

    const name = useRef("");
    //use name.current.value
    const tagId = useRef(0);

    return (

        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">New ingredient</h1>
                        <button
                            className="shadow-sm text-2xl font-bold text-gray-400 p-1"
                            onClick={() => closeWindow(false)}>X</button>
                    </div>
                    <div className="relative px-12 p-4 flex text-center justify-around">
                        <p className="pr-2">Ingredient name:</p>
                        <input ref={name} className="rounded border border-slate-400"></input>
                    </div>

                    <div className="relative px-12 p-4 flex text-center justify-around">
                        <p className="pr-2">Ingredient category:</p>
                        <select ref={tagId} className="rounded" id="tags" name="tags">
                            <TagCategoryOption arrayOfTagCategories={arrayOfTagCategories} />
                        </select>
                    </div>
                    <div className=" mt-2 flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                        <button onClick={() => {
                            getIngredient(name.current.value, parseInt(tagId.current.value));
                            closeWindow(false);
                        }} className="p-2">Add ingredient</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddIngredients;
