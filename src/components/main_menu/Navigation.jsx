import { useState } from "react";

const Navigation = () => {

    const [recommended, setRecommended] = useState([]);

    return (
        <div className='flex flex-col col-start-2 shadow-xl gap-4 overflow-y-scroll no-scrollbar bg-navBg'>
            <div className="p-1 md:p-3">
                <h1 className="text-center text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Hello, shopper</h1>
            </div>
            <div className="p-10 gap-7 grid grid-cols-2 grid-rows-2 justify-center text-center">
                <div>
                    <button className=" md:w-60 md:h-60 w-40 h-40 bg-center bg-opacity-50 bg-cover relative rounded-lg shadow-grocerySdw bg-groceryBag">
                        <p className="absolute bottom-3 left-3 text-xl md:text-xxl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-200">Shopping List</p>
                    </button>
                </div>
                <div>
                    <button className=" md:w-60 md:h-60 w-40 h-40 bg-center bg-opacity-50 bg-cover relative rounded-lg shadow-grocerySdw bg-recipeBk">
                        <p className="absolute bottom-3 left-3 text-xl md:text-xxl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-200">Recipes</p>
                    </button>
                </div>
                <div>
                    <button className=" md:w-60 md:h-60 w-40 h-40 bg-center bg-opacity-50 bg-cover relative rounded-lg shadow-grocerySdw bg-handwrtn">
                        <p className="absolute bottom-3 left-3 text-xl md:text-xxl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-200">Recipe editor</p>
                    </button>
                </div>
                <div>
                    <button className=" md:w-60 md:h-60 w-40 h-40 bg-center bg-opacity-50 bg-cover relative rounded-lg shadow-grocerySdw bg-lunchbx">
                        <p className="absolute bottom-3 left-3 text-xl md:text-xxl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-200">Meal plan</p>
                    </button>
                </div>
            </div>
            <div className="p-10">
                <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-950">Recommended</h1>
            </div>
            <div className="p-10">
                <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-950">Vitamin</h1>
            </div>
            <div className="p-10">
                <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-950">Protein</h1>
            </div>
            <div>

            </div>

        </div>

    )
};

export default Navigation;