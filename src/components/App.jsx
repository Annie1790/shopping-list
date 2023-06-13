//Components
import Head from './Head';
import ListButtons from './ListButtons';
import ListItems from './ListItems';
import NewButton from './NewButton';

//React Hooks
import { useEffect, useState } from "react";

const App = () => {
    const [groceryList, setGroceryList] = useState([]);

    useEffect(() => {
        fetchGroceryList("isCompleted=false")
    }, []);

    const sendItem = async (data) => {
        try {
            const resp = await fetch("http://localhost:4000/shopItem", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name: data, isCompleted: false })
            })
            if (resp.ok) {
                fetchGroceryList("isCompleted=false");
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const fetchGroceryList = async (filter) => {
        try {
            const resp = await fetch(`http://localhost:4000/shopItem/findByStatus?${filter}`, {
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

    const updateGroceryListItem = async (item) => {
        try {
            const resp = await fetch(`http://localhost:4000/shopItem`, {
                method: "PUT",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(item)
            })
            if (resp.ok) {
                fetchGroceryList("isCompleted=false");
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4 overflow-y-scroll no-scrollbar'>
            <Head database={groceryList}></Head>
            <ListButtons fetch={fetchGroceryList}></ListButtons>
            <ListItems
                items={groceryList}
                onEdited={(item) => updateGroceryListItem(item)}
            ></ListItems>
            <NewButton fetch={(item) => sendItem(item)}></NewButton>
        </div>
    )
};

export default App;
