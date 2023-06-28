const DeleteGroceryItembutton = ({item, deleteFunc}) => {
    return (
        <svg onClick={() => deleteFunc(item.id)} xmlns="http://www.w3.org/2000/svg" className="fill-slate-400 p-2 cursor-pointer" height="40" viewBox="0 -960 960 960" width="40"><path d="M200-450v-60h560v60H200Z" /></svg>
    )
};

export default DeleteGroceryItembutton;
