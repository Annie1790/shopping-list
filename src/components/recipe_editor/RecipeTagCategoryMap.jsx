const RecipeTagCategoryMap = ({array}) => {

    return (
        <>  {
            array.map((data) => {
                return (
                    <option value={data.category_id} key={data.category_id}>
                        {data.category_name}
                    </option>

                )
            })
        }
        </>
    )
};

export default RecipeTagCategoryMap;
