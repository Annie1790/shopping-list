const RecipeCategoryButtons = ({fetch}) => {

    return (
        <div className="px-4">
            <button onClick={() => fetch("all")} className="text-xl m-0.5 p-1 border border-gray-400 rounded-full   ">All</button>
            <button onClick={() => fetch("favorites")} className="text-xl m-0.5 p-1 border border-gray-400 rounded-full   ">⭐ Favorites</button>
            <button onClick={() => fetch(1)} className="text-xl m-0.5 p-1 border border-gray-400 rounded-full   ">🍲 Soup</button>
            <button onClick={() => fetch(2)} className="text-xl m-0.5 p-1 border border-gray-400 rounded-full   ">🥗 Starter</button>
            <button onClick={() => fetch(3)} className="text-xl m-0.5 p-1 border border-gray-400 rounded-full   ">🍝 Main</button>
            <button onClick={() => fetch(4)} className="text-xl m-0.5 p-1 border border-gray-400 rounded-full   ">🍳 Breakfast</button>
            <button onClick={() => fetch(5)} className="text-xl m-0.5 p-1 border border-gray-400 rounded-full   ">🍦 Dessert</button>
            <button onClick={() => fetch(6)} className="text-xl m-0.5 p-1 border border-gray-400 rounded-full   ">🍿 Snack</button>
        </div>
    )
};

export default RecipeCategoryButtons;