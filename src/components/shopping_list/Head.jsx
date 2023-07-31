const Head = ({ database }) => {

    return (
        <div className="flex flex-col">
            <div>
                <h1 className=" p-1 md:p-3 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Shopping List({database.length})</h1>
            </div>
        </div>
    )
};

export default Head;
