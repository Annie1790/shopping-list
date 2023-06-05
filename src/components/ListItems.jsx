import { useState } from "react";
import db from "./testDB";

const ListItems = () => {

    const [database, setDatabase] = useState([]);

    const fetchGroceryList = async () => {
        const resp = await fetch("http://localhost:4001/", {
            method:"GET",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            }
        })
        if (resp.ok) {
            const result = await resp.json();
            setDatabase(result);
        }
    }

    const returnGroceryList = () => {
        let arr = [];
        for (let item in db) {
            arr.push(
                <div className="flex flex-row items-center">
                    <input className="" type="checkbox" onChange={() => {console.log("changed")}}></input>
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

