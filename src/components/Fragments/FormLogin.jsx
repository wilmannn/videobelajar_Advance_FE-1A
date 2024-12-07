import React from "react"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"
import { Link } from "react-router-dom"

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    console.log("login");
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  };
    return (
      <form className="flex flex-col mt-4 w-full space-y-2" onSubmit={handleLogin}>
            <InputForm 
              label="Email"
              name="email" 
              type="email"
              placeholder="example@mail.com"
            />
            <InputForm 
              label="Kata Sandi"
              name="password" 
              type="password"
              placeholder="********"
            />
            <div className="text-right">
              <a href="#" className="hover:underline">Lupa Kata Sandi?</a>
            </div>
            <Link to="/home">
              <Button 
                classname="bg-green-500 text-white hover:bg-green-600" type="submit">
                  Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button 
                classname="bg-green-100 text-green-500 hover:bg-green-200">
                  Daftar
              </Button>
            </Link>
            <div>
              <p className="text-slate-600 text-center">atau</p>
            </div>
            <Button 
              classname="bg-white font-semibold border flex items-center justify-center hover:bg-slate-100">
              <img src="./images/icongoogle.png" alt="icongoogle" />
                Masuk dengan Google
            </Button>
      </form>
    )
}

export default FormLogin