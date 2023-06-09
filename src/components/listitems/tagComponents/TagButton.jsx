const TagButton = ({setter}) => {
    return (
        <svg onClick={() => setter(true)} xmlns="http://www.w3.org/2000/svg" className="fill-slate-400 p-2 cursor-pointer" height="40" viewBox="0 -960 960 960" width="40"><path d="m250-160 43-170H140l15-60h153l45-180H180l15-60h173l42-170h59l-42 170h181l42-170h59l-42 170h153l-15 60H652l-45 180h173l-15 60H592l-42 170h-60l43-170H352l-42 170h-60Zm117-230h181l45-180H412l-45 180Z"/></svg>
    )
};

export default TagButton;