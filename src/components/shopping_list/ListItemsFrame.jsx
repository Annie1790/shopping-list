import ListItem from "./list_items/ListItem";

const ListItemsFrame = ({ items, onEdited, onDeleted, sendNewTag, arrayOfTagCategories, sendTagId }) => {

    const returnGroceryList = () => {
        let arr = [];
        for (let segment of items) {
            arr.push(
                <ListItem
                    key={segment.grocery_id}
                    item={segment}
                    onDeleted={onDeleted}
                    onEdited={onEdited}
                    sendNewTag={sendNewTag}
                    sendTagId={sendTagId}
                    arrayOfTagCategories={arrayOfTagCategories} />
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

export default ListItemsFrame;
