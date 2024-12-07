import Button from "../Elements/Button"
import InputForm from "../Elements/Input"
import { Link } from "react-router-dom"


const FormRegister = () => {
    return (
            <form className="flex flex-col mt-4 w-full space-y-2">
            <InputForm 
              label="Nama Lengkap"
              name="fullname" 
              type="fullname"
              placeholder="enter your fullname"
            />
            <InputForm 
              label="Email"
              name="email" 
              type="email"
              placeholder="example@mail.com"
            />
            <div>
                <label 
                    htmlFor="phone">
                    No. Hp
                    <span className="text-red-500"> *</span>
                </label>
                <div className="w-full flex items-center justify-between">
                    <div className="w-1/6 flex">
                        <select id="no_hp" name="no_hp" className="text-sm rounded-md w-full h-10 ring-1 ring-inset ring-gray-300">
                            <option value="+62">+62</option>
                        </select>
                    </div>
                    <div className="w-full flex">
                        <input
                            type="text"
                            className="block w-full rounded-md border-1 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-700 sm:text-sm sm:leading-6"
                            placeholder="8xx-xxxx-xxxx"
                            name="phone"
                        />
                    </div>
                </div>
            </div>
            <InputForm 
              label="Password"
              name="password" 
              type="password"
              placeholder="********"
            />
            <InputForm 
              label="Konfirmasi Kata Sandi"
              name="confirmPassword" 
              type="confirmPassword"
              placeholder="********"
            />
            <div className="text-right">
              <a href="#" className="hover:underline">Lupa Kata Sandi?</a>
            </div>
            <Button 
              classname="bg-green-500 text-white hover:bg-green-600">
                Daftar
            </Button>
            <Link to="/login">
              <Button 
                classname="bg-green-100 text-green-500 hover:bg-green-200">
                  Masuk
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

export default FormRegister