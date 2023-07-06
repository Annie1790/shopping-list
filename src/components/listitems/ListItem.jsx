import { useState } from "react";

import DeleteGroceryItembutton from "./DeleteGroceryItemButton";
import TagButton from "./tagComponents/TagButton";
import TagModal from "./tagComponents/TagModal";
import TagItem from "./tagComponents/TagItem";

const ListItem = ({ item, onEdited, onDeleted, sendNewTag, arrayOfTagCategories }) => {
    const [showInput, setShowInput] = useState(false);
    const [itemName, setItemName] = useState(item.grocery_name);
    const [showTagModal, setShowTagModal] = useState(false);

    const setTickBox = () => {
        onEdited({
            name: item.grocery_name,
            isCompleted: !item.isCompleted,
            id: item.grocery_id
        })
    };

    const sendNewName = () => {
        setShowInput(false);
        onEdited({ name: itemName || "???", is_completed: item.is_completed, id: item.grocery_id });
    };

    const returnTagItems = () => {
        let arr = [];
        for (let segment of item.tags_json) {
            arr.push(
                <TagItem key={segment.tag_id} item={segment}/>
            )
        }
        return arr;
    };

    const returnGroceryList = () => {
        return (
            <li>
                {showInput ? (
                    <div className="flex flex-row items-center gap-3">
                        <label className="flex items-center">
                            <input checked={item.is_completed} onChange={() => { setTickBox(); }} type="checkbox" className="accent-pink-500 h-6 w-6"></input>
                        </label>
                        <input
                            className="flex flex-row items-center grow"
                            type="text"
                            onChange={(e) => { setItemName(e.target.value) }}
                            value={itemName}
                            onBlur={sendNewName}
                            autoFocus
                        />
                        {showTagModal && <TagModal setter={setShowTagModal} item={item} sendNewTag={sendNewTag} arrayOfTagCategories={arrayOfTagCategories} />}
                        <TagButton setter={setShowTagModal} />
                        <DeleteGroceryItembutton item={item} />
                    </div>
                ) : (
                    <div className="flex flex-row items-center gap-3">
                        <label className="flex items-center">
                            <input checked={item.is_completed} onChange={() => { setTickBox(); }} type="checkbox" className="accent-pink-500 h-6 w-6"></input>
                        </label>
                        {
                            item.is_completed ? (
                                <span onClick={() => setShowInput(true)} className="tracking-normal grow ml-1 text-xl line-through decoration-slate-500">{item.grocery_name}</span>
                            ) : (
                                <span onClick={() => setShowInput(true)} className="tracking-normal grow ml-1 text-xl">{item.grocery_name}</span>
                            )
                        }
                        {showTagModal && <TagModal setter={setShowTagModal} item={item} sendNewTag={sendNewTag} arrayOfTagCategories={arrayOfTagCategories}/>}
                        <TagButton setter={setShowTagModal} />
                        <DeleteGroceryItembutton item={item} deleteFunc={onDeleted} />
                    </div>
                )
                }
                <ul className="flex flex-row pl-6 pb-0.5 pr-6">
                {returnTagItems()}
                </ul>
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
