const ListItems = ({ database, showInput, handleChange, handleBlur, handleClick }) => {

    const returnGroceryList = () => {
        console.log(showInput)
        let arr = [];
        for (let item in database) {
            arr.push(
                <div>
                    {showInput ? (
                        <input
                            className="flex flex-row items-center"
                            type="text"
                            value={database[item].name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoFocus
                        />
                    ) : (
                        <div className="flex flex-row items-center">
                            <input type="checkbox"></input>
                            <span onClick={handleClick} className="grow ml-1">{database[item].name}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M160-390v-60h640v60H160Zm0-120v-60h640v60H160Z" /></svg>
                        </div>
                    )
                    }
                </div>
            )
        }
        return arr;
    }

    return (
        <div className="grow">
            {returnGroceryList()}
        </div>
    )

};

export default ListItems;
