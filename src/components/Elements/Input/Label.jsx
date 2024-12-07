import { Children } from "react";

const Label = (props) => {
    const { name, children } = props;
    return (
        <label 
            htmlFor={name}
        >
            {children}
        <span className="text-red-500"> *</span>
        </label>
    );
};

export default Label