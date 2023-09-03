const RecipeTagCategoryMap = ({array}) => {

    return (
        <>  {
            array.map((data) => {
                return (
                    <option>
                        {data.category_name}
                    </option>

                )
            })
        }
        </>
    )
};

export default RecipeTagCategoryMap;
