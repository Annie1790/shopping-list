import ListItem from "./ListItem";

const ListItems = ({items, onEdited}) => {

    const returnGroceryList = () => {
        let arr = [];
        for (let segment in items) {
            arr.push(
                <ListItem key={items[segment].id} item={items[segment]} onEdited={onEdited} />
            )
        }
        return arr;
    }

    return (
        <div className="grow">
            {returnGroceryList()}
        </div>
    )

};

export default ListItems;
