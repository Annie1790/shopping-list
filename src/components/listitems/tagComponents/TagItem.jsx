import { useRef } from "react";

const TagItem = ({ tags, groceryForOnClick, sendTagId }) => {

    const tagId = useRef(tags.tag_id);
    const groceryId = useRef(groceryForOnClick);

    return (
        <li style={{ backgroundColor: tags.tag_bg_color, color: tags.tag_text_color }} className=" flex flex-row gap-2 border border-gray-200 rounded-full w-min px-1 text-gray-600">
            <p>{tags.tag_name}</p>
            <button
                className="font-bold pr-1"
                onClick={() => sendTagId(
                    {
                        grocery_id: groceryId.current,
                        tag_id: tagId.current
                    })}
            >x</button>
        </li>
    )
};

export default TagItem;
