const NewButton = () => {

    const sendItem = async (data) => {
        try {
            const resp = await fetch("http://localhost:4000/shopItem", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({name: data, isCompleted: false})
            })
            const result = await resp.json();
        }
        catch (error) {
            console.error(error)
        }
    }

    const addNewItem = () => {
        const prompt = window.prompt("New item:", "e.g: bread");
        if (prompt !== "") {
            sendItem(prompt);
            this.forceUpdate();
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
