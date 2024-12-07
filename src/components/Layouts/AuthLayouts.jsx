
const AuthLayout = (props) => {
    const { children, title, desc } = props
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-primary">
            <div className="flex w-full max-w-md p-8 justify-center items-center border border-slate-100 rounded-sm bg-white">
            <div className="w-full">
                <div className="text-center">
                    <h1 className="font-bold text-2xl">{title}</h1>
                    <p className="text-slate-600">{desc}</p>
                </div>
                {children}
            </div>
        </div>
        </div>
    )
}

export default AuthLayout