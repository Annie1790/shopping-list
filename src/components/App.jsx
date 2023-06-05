//Components
import Head from './Head';
import ListButtons from './ListButtons';
import ListItems from './ListItems';
import NewButton from './NewButton';

//React Hooks
import { useState } from "react";

//Test database
import db from "./testDB";

const App = () => {
    const [groceryList, setGroceryList] = useState(db);

    // const fetchGroceryList = async () => {
    //     const resp = await fetch("http://localhost:4001/", {
    //         method: "GET",
    //         mode: "cors",
    //         headers: {
    //             "Content-type": "application/json"
    //         }
    //     })
    //     if (resp.ok) {
    //         const result = await resp.json();
    //         setGroceryList(result);
    //     }
    // }
    return (
        <div className='flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4'>
            <Head></Head>
            <ListButtons></ListButtons>
            <ListItems database={groceryList}></ListItems>
            <NewButton></NewButton>
        </div>
    )
};

export default App;