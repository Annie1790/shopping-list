import { useState } from "react";

import DeleteGroceryItembutton from "./DeleteGroceryItemButton";
import TagButton from "./TagButton";
import TagModal from "./TagModal";

const ListItem = ({ item, onEdited, onDeleted }) => {
    const [showInput, setShowInput] = useState(false);
    const [itemName, setItemName] = useState(item.name);
    const [showTagModal, setShowTagModal] = useState(false);

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
                        {showTagModal && <TagModal />}
                        <TagButton setter={setShowTagModal} />
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
                        {showTagModal && <TagModal setter={setShowTagModal} />}
                        <TagButton setter={setShowTagModal} />
                        <DeleteGroceryItembutton item={item} deleteFunc={onDeleted} />
                    </div>
                )
                }
                <div className="flex flex-row pl-6 pb-0.5 pr-6">
                    <div className="border border-gray-200 rounded-full w-min p-0.5 text-gray-600">#vegetable</div>
                </div>
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
