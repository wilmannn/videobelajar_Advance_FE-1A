import React, { Fragment } from 'react'
import NavBar from '../components/Fragments/NavBar';
import Home from '../components/Layouts/Home'; 
import Footer from '../components/Fragments/Footer';

const HomePage = () => {
    return (
        <Fragment>
            <NavBar>
                <a href="#" className="text-slate-500 mx-4">Kategori</a>
                <img src="./images/avatar.png" />
            </NavBar>
            <main className="flex flex-col min-h-screen gap-10 px-24 py-20 bg-primary md:w-full">
                <Home>

                </Home>
            </main>
            <Footer></Footer>
        </Fragment>
    )
};

export default HomePage;