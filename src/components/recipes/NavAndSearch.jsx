import { useNavigate } from "react-router-dom";

const NavAndSearch = () => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-3 grid-rows-2">
            <h1 className="col-span-2 p-4 sm:text-3xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Get Cooking today!</h1>
            <button className="justify-self-end pr-4">
                <svg className="fill-slate-400 border rounded-full sm:w-12 sm:h-12 w-10 h-10" xmlns="http://www.w3.org/2000/svg" height="48"
                    viewBox="0 -960 960 960" width="48"><path
                        d="M464.615-464.615H255.384q-6.538 0-10.961-4.485Q240-473.586 
                240-480.216t4.423-10.899q4.423-4.27 10.961-4.27h209.231v-209.231q0-6.538
                4.485-10.961Q473.586-720 480.216-720t10.899 4.423q4.27 
                4.423 4.27 10.961v209.231h209.231q6.538 0 10.961 
                4.485Q720-486.414 720-479.784t-4.423 10.899q-4.423 4.27-10.961 
                4.27H495.385v209.231q0 6.538-4.485 10.961Q486.414-240 
                479.784-240t-10.899-4.423q-4.27-4.423-4.27-10.961v-209.231Z" /></svg>
            </button>
            <form className="max-w-sm px-4 col-span-3">
                <div className="relative">
                    <svg
                        onClick={() => navigate("/recipe-editor/new")}
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border-b-2 outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>
            </form>
        </div>
    )
};

export default NavAndSearch;