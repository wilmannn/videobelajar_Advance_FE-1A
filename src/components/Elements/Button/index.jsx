const Button = (props) => {
    const { children, classname = "bg-green-500", onClick = () => {}, type = "button"} = props
    return (
        <button
            className={`w-full p-2 rounded-md font-semibold ${classname}`}
            type={type}
            onClick={() => onClick()}
        >
            {children}
        </button>
    )
}

export default Button