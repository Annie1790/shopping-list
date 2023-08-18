const RecipesArray = () => {
    let myArray = ["borso fozelek","shaksuka","slow cook lamb shoulder","minestrone soup", "eggs benedict", "chicken soup", "crackers"];

    return (
        <div className="flex flex-row flex-wrap p-4 gap-4 justify-center ">{
            myArray.map((data) => {
                return (
                    <button className="bg-gradient-to-b from-orange-50 to-slate-50 basis-1/4 h-24 rounded-lg shadow">
                        <p className="font-extralight break-all truncate p-2 text-lg">{data}</p>
                    </button>
                )
            })
        }</div>
    )
};

export default RecipesArray;