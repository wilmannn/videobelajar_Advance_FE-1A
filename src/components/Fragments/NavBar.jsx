
const NavBar = (props) => {
    const { children } = props
    return (
        <div className="w-full border-b-2">
            <nav className="flex w-full p-4 items-center justify-between">
                <div className="flex items-center justify-center px-20">
                    <img src="./images/Logo.png" alt="logo" className="flex w-full" />
                </div>
                <div className="flex px-20 items-center justify-between">
                    {children}
                </div>
            </nav>
        </div>
    );
};

export default NavBar