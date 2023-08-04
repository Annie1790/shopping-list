import pikachu from "../../assets/pikachu.gif";

const UnderConstruction = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <img
                className="w-max h-max"
                src={pikachu}
                alt="pikachu" />
        </div>
    )
};

export default UnderConstruction;