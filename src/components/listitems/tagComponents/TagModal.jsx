import { useState } from "react";

import TagCategoryOption from "./TagCategoryOption";

const TagModal = ({ setter, item, sendNewTag, arrayOfTagCategories }) => {

    const [tagCategory, setTagCategory] = useState(1);

    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Tags</h1>
                        <button
                            className="shadow-sm text-2xl font-bold text-gray-400 p-1"
                            onClick={() => setter(false)}>X</button>
                    </div>
                    <p className="relative px-12 p-4 flex text-center justify-around">Select from the list:</p>
                    <div className="relative p-4 flex text-center justify-around">
                        <select id="tags" name="tags" onChange={(e) => { setTagCategory(e.target.value) }}>
                            <TagCategoryOption arrayOfTagCategories={arrayOfTagCategories} />
                        </select>
                    </div>
                    <div className="flex flex-row overflow-x-auto">
                        <ul className="flex flex-row pl-6 pb-0.5 pr-6">
                            {/* {returnTagItems()} */}
                        </ul>
                    </div>
                    <div className=" mt-2 flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                        <button
                            onClick={() => {
                                sendNewTag({
                                    grocery_id: item.grocery_id,
                                    tag_id: tagCategory
                                });
                            }}
                            className="p-2">Add tag</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TagModal;
