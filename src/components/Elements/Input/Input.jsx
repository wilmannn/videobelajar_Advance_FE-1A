const Input = (props) => {
    const { type, placeholder, name, } = props;
    return (
        <input 
        name={name}
        type={type} 
        className="block w-full rounded-md border-1 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-700 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        />
    );
};

export default Input