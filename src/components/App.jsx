//Components
import Head from './Head';
import ListButtons from './ListButtons';
import ListItems from './ListItems';
import NewButton from './NewButton';

//React Hooks
import { useEffect, useState } from "react";

const App = () => {
    const [groceryList, setGroceryList] = useState({});

    useEffect(() => {
        fetchGroceryList("")
    }, [])

    const fetchGroceryList = async (e) => {
        try {
            const resp = await fetch(`http://localhost:4000/shopItem/findByStatus?${e.target?.value}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                }
            })
            if (resp.ok) {
                const result = await resp.json();
                setGroceryList(result);
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4 overflow-y-scroll no-scrollbar'>
            <Head database={groceryList}></Head>
            <ListButtons fetch={fetchGroceryList}></ListButtons>
            <ListItems database={groceryList}></ListItems>
            <NewButton></NewButton>
        </div>
    )
};

export default App;
