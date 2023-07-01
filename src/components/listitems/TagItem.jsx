const TagItem = ({item}) => {
    return (
        <li style={{backgroundColor: item.color}} className=" flex flex-row gap-2 border border-gray-200 rounded-full w-min px-1 text-gray-600">
            <p>{item.name}</p>
            <button
                className="font-bold pr-1"
            >x</button>
        </li>
    )
};

export default TagItem;
