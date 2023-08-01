//Components
import Head from './shopping_list/Head';
import CompletedStatusBar from './shopping_list/CompletedStatusBar';
import ListItemsFrame from './shopping_list/ListItemsFrame';
import NewButton from './shopping_list/NewButton';
import Navigation from "./main_menu/Navigation";
import UnderConstruction from './main_menu/UnderConstruction';

//React Hooks
import { useEffect, useState } from "react";

//React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const API_SERVER_PREFIX = process.env.REACT_APP_API_SERVER_PREFIX;

const App = () => {
    const [groceryList, setGroceryList] = useState([]);
    const [tagCategories, setTagCategories] = useState(["example"]);

    useEffect(() => {
        fetchGroceryList("isCompleted=false");
        getArrayOfTagCategories();
    }, []);

    const sendNewTag = async (object) => {
        try {
            const resp = await fetch(`${API_SERVER_PREFIX}/tags`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(object)
            })
            if (resp.ok) {
                fetchGroceryList("is_completed=false");
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    const sendTagId = async (object) => {
        try {
            const resp = await fetch(`${API_SERVER_PREFIX}/tags`, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(object)
            })
            if (resp.ok) {
                fetchGroceryList("is_completed=false")
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const sendName = async (prompt) => {
        try {
            const resp = await fetch(`${API_SERVER_PREFIX}/shopItem`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(prompt)
            })
            if (resp.ok) {
                fetchGroceryList("is_completed=false");
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const fetchGroceryList = async (filter) => {
        try {
            const resp = await fetch(`${API_SERVER_PREFIX}/shopItem/findByStatus?${filter}`, {
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
            const resp = await fetch(`${API_SERVER_PREFIX}/shopItem`, {
                method: "PUT",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(item)
            })
            if (resp.ok) {
                fetchGroceryList("is_completed=false");
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteItemFromGroceryList = async (id) => {
        try {
            const resp = await fetch(`${API_SERVER_PREFIX}/shopItem/${id}`, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
            })
            if (resp.ok) {
                fetchGroceryList("is_completed=false")
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    const getArrayOfTagCategories = async () => {
        try {
            const resp = await fetch(`${API_SERVER_PREFIX}/tags`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                }
            })
            if (resp.ok) {
                const result = await resp.json();
                setTagCategories(result);
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const ReturnNavigation = () => {
        return (
            <Navigation
            />
        )
    }

    const ReturnShoppingList = () => {
        return (
            <div className='flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4 overflow-y-scroll no-scrollbar'>
                <Head database={groceryList} />
                <CompletedStatusBar fetch={fetchGroceryList} />
                <NewButton onAdd={(name) => sendName({ name: name, is_completed: false })} />
                <ListItemsFrame
                    items={groceryList}
                    onEdited={(item) => updateGroceryListItem(item)}
                    onDeleted={(id) => deleteItemFromGroceryList(id)}
                    sendNewTag={(object) => sendNewTag(object)}
                    sendTagId={(object) => sendTagId(object)}
                    arrayOfTagCategories={tagCategories}
                />    
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <ReturnNavigation />
        },
        {
            path: "/shopping-list",
            element: <ReturnShoppingList />
        },
        {
            path: "/under-construction",
            element: <UnderConstruction />
        }
    ])
    return (
        <RouterProvider router={router} />
    )
};

export default App;
