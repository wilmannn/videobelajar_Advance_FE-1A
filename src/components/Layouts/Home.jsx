import { Fragment } from "react"
import Button from "../Elements/Button"
import Input from "../Elements/Input/Input"
import ListVideoSect from "../../Section/ListVideoSect"
// import Body from "../Fragments/Body"

function Home() {

    return (
        <Fragment>
            <div>
                <section className="flex flex-col py-8 w-full justify-center items-center gap-6 rounded-md bg-center bg-[#000000CC] bg-opacity-50 bg-cover bg-[url('./images/sect1.jpeg')]">
                    <div className="px-20">
                        <h1 className="text-white font-bold text-3xl text-center">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
                        <p className=" text-white text-center">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang meningkatkan pemahaman Anda.</p>
                    </div>
                    <div>
                        <Button
                            classname="text-white bg-green-500 hover:bg-green-600 px-4"
                            type="button"
                        >Temukan Video Course untuk Dipelajari!</Button>
                    </div>
                </section>
            </div>
            <ListVideoSect />
            <div>
                <section className="relative flex-col px-20 py-10 w-full justify-center items-center gap-6 rounded-md bg-center bg-[#000000CC] bg-opacity-70 bg-cover bg-[url('./images/sect3.jpeg')]">
                    <div className="">
                        <p className=" text-white text-center">NEWSLETTER</p>
                        <h1 className="text-white font-bold text-3xl text-center">Mau Belajar Lebih Banyak?</h1>
                        <p className=" text-white text-center">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
                    </div>
                    <div className="flex items-center justify-center w-full px-15">
                        <div className="flex flex-col items-center justify-center">
                            <input type="email" className="items-center h-12 rounded-md border-1 px-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-700" placeholder="Masukkan Emailmu" />
                            <Button
                                classname="mt-2 text-white bg-yellow-500 hover:bg-yellow-600 px-4"
                                type="button"
                            >Subscribe</Button>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}

export default Home;