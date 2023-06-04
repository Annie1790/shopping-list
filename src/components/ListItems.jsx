import db from "./testDB";

const ListItems = () => {

    const returnGroceryList = () => {
        let arr = [];
        for (let item in db) {
            arr.push(
                <div className="flex flex-row items-center">
                    <input type="radio" onChange={() => {console.log("changed")}}></input>
                    <p className="grow ml-1">{db[item].name}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M160-390v-60h640v60H160Zm0-120v-60h640v60H160Z" /></svg>
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

