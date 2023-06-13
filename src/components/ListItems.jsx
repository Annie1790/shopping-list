import ListItem from "./ListItem";

const ListItems = ({items, onEdited}) => {

    const returnGroceryList = () => {
        let arr = [];
        for (let segment of items) {
            arr.push(
                <ListItem key={segment.id} item={segment} onEdited={onEdited} />
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
