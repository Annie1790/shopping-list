import ListItem from "./listitems/ListItem";

const ListItems = ({items, onEdited, onDeleted, sendNewTag, arrayOfTagCategories}) => {

    const returnGroceryList = () => {
        let arr = [];
        for (let segment of items) {
            arr.push(
                <ListItem key={segment.grocery_id} item={segment} onDeleted={onDeleted} onEdited={onEdited} sendNewTag={sendNewTag} arrayOfTagCategories={arrayOfTagCategories}/>
            )
        }
        return arr;
    }

    return (
        <div className="grow flex flex-col gap-3">
            {returnGroceryList()}
        </div>
    )

};

export default ListItems;
