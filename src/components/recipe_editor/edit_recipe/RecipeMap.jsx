const RecipeMap = ({recipes}) => {
    return (
        <>
            {recipes.map((segment) => {
                return (
                    <option>{segment.recipe_name}</option>
                )
            })}
        </>

    )
};

export default RecipeMap;
