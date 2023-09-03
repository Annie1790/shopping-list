const IngredientMap = ({ ingredientList, setter }) => {

    const deleteIngredient = (data) => {
        let array = [...ingredientList];
        // we copy the ingredientList to make the changes
        //creating a new reference doesnt trigger react to re-render and therefore .map is not working
        //react re-renders if it receives a new object, unless it won't re-render the page with the same object
        const index = array.indexOf(data);
        if (index > -1) {
            array.splice(index, 1);
        }
        setter(array);
    }

    return (
        <>  {
            ingredientList.map((data) => {
                return (
                    <div className="p-2 rounded border flex flex-row gap-4">
                        <p>{data.name}</p>
                        <button type="button" onClick={() => deleteIngredient(data)}>x</button>
                    </div>

                )
            })
        }
        </>
    )
}

export default IngredientMap;
