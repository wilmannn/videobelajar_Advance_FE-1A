import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Fragment } from "react";
import Navbar from "../components/Fragments/NavBar";

const RegisterPage = () => {
    return (
        <Fragment>
            <Navbar/>
            <AuthLayout
                title="Pendaftaran Akun"
                desc="Yuk, buat akunmu di sekarang juga!">
                <FormRegister />
            </AuthLayout>
        </Fragment>
    )
}

export default RegisterPage