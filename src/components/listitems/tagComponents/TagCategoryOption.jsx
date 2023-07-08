const TagCategoryOption = ({arrayOfTagCategories}) => {

    const arrayOfOptions = () => {
        let result = [];
        for (let segment of arrayOfTagCategories) {
            result.push(
                <option key={segment.tag_id} value={segment.tag_id}>{segment.tag_name}</option>
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