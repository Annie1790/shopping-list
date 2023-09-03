//Components
import Head from './shopping_list/Head';
import CompletedStatusBar from './shopping_list/CompletedStatusBar';
import ListItemsFrame from './shopping_list/ListItemsFrame';
import NewButton from './shopping_list/NewButton';
import Navigation from "./main_menu/Navigation";
import UnderConstruction from './main_menu/UnderConstruction';
import NavAndSearch from './recipes/NavAndSearch';
import RecipeCategoryButtons from './recipes/RecipeCategoryButtons';
import RecipesArray from './recipes/RecipesArray';
import AddNewRecipe from './recipe_editor/AddNewRecipe';

//React Hooks
import { useEffect, useState } from "react";

//React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const API_SERVER_PREFIX = process.env.REACT_APP_API_SERVER_PREFIX;

const App = () => {
    const [groceryList, setGroceryList] = useState([]);
    const [tagCategories, setTagCategories] = useState([]);
    const [recipeTagCategories, setRecipeTagCategories] = useState([]);

    useEffect(() => {
        getArrayOfTagCategories();
        fetchGroceryList("is_completed=false");
        getAllRecipeCategory();
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
    };

    const getAllRecipeCategory = async () => {
        try {
            const resp = await fetch(`${API_SERVER_PREFIX}/recipeCategories/all`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                }
            })
            if (resp.ok) {
                const result = await resp.json();
                setRecipeTagCategories(result);
            }
        }
        catch(error) {
            console.log(error);
        }
    };

    // const getFilteredRecipes = async (id) => {
    //     try {
    //         const resp = await fetch(`${API_SERVER_PREFIX}/recipeList/filterBy/${id}`, {

    //         })
    //     }
    //     catch(error) {
    //         console.log(error);
    //     }
    // };

    const sendNewRecipe = async (newRecipe) => {
        try {
            await fetch(`${API_SERVER_PREFIX}/recipeList`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newRecipe)
            })
        }
        catch (error) {
            console.log(error);
        }
    };

    const ReturnRecipeEditor = () => {
        return (
            <div className='flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4 overflow-y-scroll no-scrollbar'>
                <AddNewRecipe
                    tag={tagCategories}
                    recipeTag={recipeTagCategories}
                    post={sendNewRecipe}
                />
            </div>
        )
    }

    const ReturnRecipes = () => {
        return (
            <div className='flex flex-col col-start-2 bg-slate-50 shadow-xl gap-4 overflow-y-scroll no-scrollbar'>
                <NavAndSearch />
                <RecipeCategoryButtons />
                <RecipesArray />
            </div>
        )
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
        },
        {
            path: "/recipes",
            element: <ReturnRecipes />
        },
        {
            path: "/recipe-editor",
            element: <ReturnRecipeEditor />
        }
    ])
    return (
        <RouterProvider router={router} />
    )
};

export default App;
