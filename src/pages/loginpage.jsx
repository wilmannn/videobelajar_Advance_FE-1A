import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Fragment } from "react";
import Navbar from "../components/Fragments/NavBar";

const LoginPage = () => {
    return (
        <Fragment>
            <Navbar/>
            <AuthLayout 
                title="Masuk ke Akun" 
                desc="Yuk, lanjutin belajarmu di videobelajar">
                <FormLogin />
            </AuthLayout>
        </Fragment>
    )
}

export default LoginPage