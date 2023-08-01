import { useState } from "react";

const NewButton = ({ onAdd }) => {

    const [exit, setExit] = useState(false);
    const [input, setInput] = useState("");

    const addNewItem = (prompt) => {
        if (prompt !== "") {
            onAdd(prompt);
        } else {
            return
        }
    }

    const Modal = () => {
        return (
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">New grocery item</h1>
                            <button
                                className="shadow-sm text-2xl font-bold text-gray-400 p-1"
                                onClick={() => setExit(false)}>X</button>
                        </div>
                        <p className="relative px-12 p-4 flex text-center justify-around">What would you like to add?</p>
                        <div className=" mt-2 flex items-center justify-end px-10 py-2 border-t border-solid border-slate-200 rounded-b">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoFocus type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
                        </div>
                        <div className=" mt-2 flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                            <button
                                onClick={() => {
                                    addNewItem(input);
                                }}
                                className="p-2">Add item</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    return (
        <div>
            <div className="mb-3">
                <button onClick={() => setExit(true)} className=" font-bold text-2xl m-0.5 p-1 border border-gray-400 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Add new item</button>
            </div>
            {exit
                ? <Modal />
                : <></>}
        </div>
    )
};

export default NewButton;
