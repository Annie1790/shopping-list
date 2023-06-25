const NewButton = ({ onAdd }) => {

    const addNewItem = () => {
        const prompt = window.prompt("New item:", "e.g: bread");
        if (prompt !== "") {
            onAdd(prompt);
        } else {
            return
        }
    }

    return (
        <div className="mb-3">
            <button onClick={addNewItem} className="m-0.5 p-1 border border-gray-400 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Add new item</button>
        </div>
    )
};

export default NewButton;
