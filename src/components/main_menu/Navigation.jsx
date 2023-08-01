//React Router
import { Link } from "react-router-dom";

//Components

const Navigation = () => {

    return (
        <div className='flex flex-col col-start-2 shadow-xl gap-4 overflow-y-scroll no-scrollbar bg-navBg'>
            <div className="px-10 py-2">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Hello, shopper</h1>
            </div>
            <div className="py-5 lg:py-10 lg:gap-10 gap-5 grid grid-cols-2 grid-rows-2 justify-center text-center">
                <div className="justify-self-end">
                    <Link to={`shopping-list`}>
                        <button className="lg:w-60 lg:h-60 md:w-50 md:h-50 w-40 h-40 bg-center bg-opacity-50 bg-cover relative rounded-lg shadow-grocerySdw bg-groceryBag">
                            <p className="absolute bottom-3 left-3 text-xl md:text-xxl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-200">Shopping List</p>
                        </button>
                    </Link>
                </div>
                <div className="justify-self-start">
                    <Link to={`under-construction`}>
                        <button className="lg:w-60 lg:h-60 md:w-50 md:h-50 w-40 h-40 bg-center bg-opacity-50 bg-cover relative rounded-lg shadow-grocerySdw bg-recipeBk">
                            <p className="absolute bottom-3 left-3 text-xl md:text-xxl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-200">Recipes</p>
                        </button>
                    </Link>
                </div>
                <div className="justify-self-end">
                    <Link to={`under-construction`}>
                        <button className="lg:w-60 lg:h-60 md:w-50 md:h-50 w-40 h-40 bg-center bg-opacity-50 bg-cover relative rounded-lg shadow-grocerySdw bg-handwrtn">
                            <p className="absolute bottom-3 left-3 text-xl md:text-xxl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-200">Recipe editor</p>
                        </button>
                    </Link>
                </div>
                <div className="justify-self-start">
                    <Link to={`under-construction`}>
                        <button className="lg:w-60 lg:h-60 md:w-50 md:h-50 w-40 h-40 bg-center bg-opacity-50 bg-cover relative rounded-lg shadow-grocerySdw bg-lunchbx">
                            <p className="absolute bottom-3 left-3 text-xl md:text-xxl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-200">Meal plan</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
};

export default Navigation;