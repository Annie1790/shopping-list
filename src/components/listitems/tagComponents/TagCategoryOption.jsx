const TagCategoryOption = ({arrayOfTagCategories}) => {

    const arrayOfOptions = () => {
        let result = [];
        for (let segment of arrayOfTagCategories) {
            result.push(
                <option value={segment}>{segment}</option>
            )
        }
        return result;
    }

    return (
        <>
        {arrayOfOptions()}
        </>
    )
    
};

export default TagCategoryOption;