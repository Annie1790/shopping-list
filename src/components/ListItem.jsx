import { useState } from "react";

const ListItem = ({ item, onEdited }) => {
    const [showInput, setShowInput] = useState(false);
    const returnGroceryList = () => {
        return (
            <li>
                {showInput ? (
                    <div className="flex flex-row items-center">
                        <input
                            type="checkbox"
                        ></input>
                        <input
                            className="flex flex-row items-center"
                            type="text"
                            defaultValue={item.name}
                            onBlur={() => {setShowInput(false); onEdited(item);}}
                            autoFocus
                        />
                    </div>
                ) : (
                    <div className="flex flex-row items-center">
                        <input type="checkbox"></input>
                        <span onClick={() => setShowInput(true)} className="grow ml-1">{item.name}</span>
                    </div>
                )
                }
            </li>
        )

    }

    return (
        <ul>
            {returnGroceryList()}
        </ul>
    )
};

export default ListItem;
