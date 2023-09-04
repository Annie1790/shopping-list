import { Link } from "react-router-dom";

const EditorNavigation = () => {
    return (
        <div className="flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4 overflow-y-scroll no-scrollbar bg-navBg">
            <div className="px-10 py-2">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Recipe Editor</h1>
                <div className="py-5 lg:py-10 lg:gap-10 gap-5 grid grid-cols-2 grid-rows-1 justify-center text-center">
                    <div className="justify-self-end">
                        <Link to={`new`}>
                            <button className="lg:w-60 lg:h-100 md:w-50 md:h-90 w-40 h-80 bg-center bg-opacity-50 bg-cover relative rounded-lg shadow-grocerySdw bg-handwrtn">
                                <p className="absolute md:bottom-3 md:left-3 bottom-50 left-0 text-xl md:text-xxl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-200">Create new recipe</p>
                            </button>
                        </Link>
                    </div>
                    <div className="justify-self-start">
                        <Link to={`edit`}>
                            <button className="lg:w-60 lg:h-100 md:w-50 md:h-90 w-40 h-80 bg-center bg-opacity-50 bg-cover relative rounded-lg shadow-grocerySdw bg-recipeBk">
                                <p className="absolute md:bottom-3 md:left-3 bottom-50 left-0 text-xl md:text-xxl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-50 to-slate-200">Edit existing recipe</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditorNavigation;
