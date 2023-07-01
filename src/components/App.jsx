//Components
import Head from './Head';
import ListButtons from './ListButtons';
import ListItems from './ListItems';
import NewButton from './NewButton';

//React Hooks
import { useEffect, useState } from "react";

let HOST = "192.168.1.116";
let LOCALHOST = "localhost";

const App = () => {
    const [groceryList, setGroceryList] = useState([]);

    useEffect(() => {
        fetchGroceryList("isCompleted=false")
    }, []);

    const sendNewTag = async (object) => {
        try {
            const resp = await fetch(`http://${LOCALHOST}:4000/tags`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(object)
            })
            if (resp.ok) {
                fetchGroceryList("isCompleted=false");
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const sendName = async (prompt) => {
        try {
            const resp = await fetch(`http://${LOCALHOST}:4000/shopItem`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(prompt)
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
            const resp = await fetch(`http://${LOCALHOST}:4000/shopItem/findByStatus?${filter}`, {
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
            const resp = await fetch(`http://${LOCALHOST}:4000/shopItem`, {
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

    const deleteItemFromGroceryList = async (id) => {
        try {
            const resp = await fetch(`http://${LOCALHOST}:4000/shopItem/${id}`, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
            })
            if (resp.ok) {
                fetchGroceryList("isCompleted=false")
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
                onDeleted={(id) => deleteItemFromGroceryList(id)}
                sendNewTag={(object) => sendNewTag(object)}
            ></ListItems>
            <NewButton onAdd={(name) => sendName({ name: name, isCompleted: false })}></NewButton>
        </div>
    )
};

export default App;
