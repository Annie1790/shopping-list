import { useState } from "react";

const ListItem = ({ item, onEdited }) => {
    const [showInput, setShowInput] = useState(false);
    const [groceryItem, setGroceryItem] = useState(item);

    const setNewGroceryItem = (e) => {
        if (e.target.value !== "") {
            setGroceryItem({
                name: e.target.value,
                isCompleted: false,
                id: item.id
            })
        } else {
            return;
        }
    };

    const setTickBox = () => {
        onEdited({
            name: item.name,
            isCompleted: !item.isCompleted,
            id: item.id
        })
    };

    const returnGroceryList = () => {
        return (
            <li>
                {showInput ? (
                    <div className="flex flex-row items-center gap-3">
                        <label className="flex items-center">
                            <input checked={item.isCompleted} onChange={() => { setTickBox(); }} type="checkbox" className="accent-pink-500 h-6 w-6"></input>
                        </label>
                        <input
                            className="flex flex-row items-center"
                            type="text"
                            onChange={setNewGroceryItem}
                            defaultValue={item.name}
                            onBlur={() => { setShowInput(false); onEdited(groceryItem) }}
                            autoFocus
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M200-450v-60h560v60H200Z"/></svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-400" height="40" viewBox="0 -960 960 960" width="40"><path d="M200-450v-60h560v60H200Z"/></svg>
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
