const TagItem = ({item}) => {
    
    return (
        <li style={{backgroundColor: item.tag_bg_color, color: item.tag_text_color}} className=" flex flex-row gap-2 border border-gray-200 rounded-full w-min px-1 text-gray-600">
            <p>{item.tag_name}</p>
            <button
                className="font-bold pr-1"
            >x</button>
        </li>
    )
};

export default TagItem;
