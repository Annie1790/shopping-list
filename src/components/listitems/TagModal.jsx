import { useState } from "react";

const TagModal = ({ setter }) => {

    const [tagName, setTagName] = useState("");
    const [tagColor, setTagColor] = useState("");

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
                    <div className="relative p-8 flex text-center justify-around">
                        <input
                            className="shadow-sm"
                            type="text"
                            placeholder="New tag..."
                            onChange={(e) => { setTagName(e.target.value) }}
                        >
                        </input>
                        <input
                            className=""
                            type="color"
                            onChange={(e) => {
                                setTagColor(e.target.value);
                            }}>
                        </input>
                    </div>
                    <div className="flex flex-row overflow-x-auto">
                        <div className="flex flex-row pl-6 pb-0.5 pr-6">
                            <div className=" flex flex-row gap-2 border border-gray-200 rounded-full w-min p-0.5 text-gray-600">
                                <p>#vegetable</p>
                                <button
                                className="font-bold pr-1"
                                >x</button>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-2 flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                        <button className="p-2">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TagModal;
