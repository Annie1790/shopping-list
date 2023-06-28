import { useState } from "react";

import DeleteGroceryItembutton from "./DeleteGroceryItemButton";

const ListItem = ({ item, onEdited, onDeleted }) => {
    const [showInput, setShowInput] = useState(false);
    const [itemName, setItemName] = useState(item.name);

    const setTickBox = () => {
        onEdited({
            name: item.name,
            isCompleted: !item.isCompleted,
            id: item.id
        })
    };

    const sendNewName = () => {
        setShowInput(false);
        onEdited({ name: itemName || "???", isCompleted: item.isCompleted, id: item.id });
    }

    const returnGroceryList = () => {
        return (
            <li>
                {showInput ? (
                    <div className="flex flex-row items-center gap-3">
                        <label className="flex items-center">
                            <input checked={item.isCompleted} onChange={() => { setTickBox(); }} type="checkbox" className="accent-pink-500 h-6 w-6"></input>
                        </label>
                        <input
                            className="flex flex-row items-center grow"
                            type="text"
                            onChange={(e) => { setItemName(e.target.value) }}
                            value={itemName}
                            onBlur={sendNewName}
                            autoFocus
                        />
                        <DeleteGroceryItembutton item={item} />
                    </div>
                ) : (
                    <div className="flex flex-row items-center gap-3">
                        <label className="flex items-center">
                            <input checked={item.isCompleted} onChange={() => { setTickBox(); }} type="checkbox" className="accent-pink-500 h-6 w-6"></input>
                        </label>
                        {
                            item.isCompleted ? (
                                <span onClick={() => setShowInput(true)} className="tracking-normal grow ml-1 text-xl line-through decoration-slate-500">{item.name}</span>
                            ) : (
                                <span onClick={() => setShowInput(true)} className="tracking-normal grow ml-1 text-xl">{item.name}</span>
                            )
                        }
                        <DeleteGroceryItembutton item={item} deleteFunc={onDeleted} />
                    </div>
                )
                }
            </li>
        )

    }

    return (
        <ul className="border-b-2 pb-2">
            {returnGroceryList()}
        </ul>
    )
};

export default ListItem;
