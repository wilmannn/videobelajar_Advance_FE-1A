import CardProduct from "../Elements/CardProduct";
import React from "react";

const Body = () => {
    return (
        <div>
            <section className="container">
                <div className="w-full justify-items-start mb-8">
                    <h3 className="text-2xl font-semibold">Koleksi Video Pembelajaran Unggulan</h3>
                    <p className="text-slate-600 mt-1">Jelajahi Dunia Pengetahuan Melalu Pilihan Kami!</p>
                </div>
                <div className="flex w-full">
                    <ul className="flex flex-row gap-6 text-slate-600">
                        <li> Semua Kelas</li>
                        <li>Pemasaran</li>
                        <li>Desain</li>
                        <li>Pengembangan Diri</li>
                        <li>Bisnis</li>
                    </ul>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
                        <CardProduct 
                            img="cp1.png"
                            title="Big 4 Auditor Financial Analyst"
                            text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                            name="Jenna Ortega"
                            job="Senior Accountant di Gojek"
                            star="★★★★☆"
                            rating="4"
                            nilai={86}
                            harga={300}
                            avatar="acp1.png"
                        />
                        <CardProduct 
                            img="cp1.png"
                            title="Big 4 Auditor Financial Analyst"
                            text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                            name="Jenna Ortega"
                            job="Senior Accountant di Gojek"
                            star="★★★★☆"
                            rating="4"
                            nilai={86}
                            harga={300}
                            avatar="acp1.png"
                        />
                        <CardProduct 
                            img="cp1.png"
                            title="Big 4 Auditor Financial Analyst"
                            text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                            name="Jenna Ortega"
                            job="Senior Accountant di Gojek"
                            star="★★★★☆"
                            rating="4"
                            nilai={86}
                            harga={300}
                            avatar="acp1.png"
                        />
                        <CardProduct 
                            img="cp1.png"
                            title="Big 4 Auditor Financial Analyst"
                            text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                            name="Jenna Ortega"
                            job="Senior Accountant di Gojek"
                            star="★★★★☆"
                            rating="4"
                            nilai={86}
                            harga={300}
                            avatar="acp1.png"
                        />
                        <CardProduct 
                            img="cp1.png"
                            title="Big 4 Auditor Financial Analyst"
                            text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                            name="Jenna Ortega"
                            job="Senior Accountant di Gojek"
                            star="★★★★☆"
                            rating="4"
                            nilai={86}
                            harga={300}
                            avatar="acp1.png"
                        />
                        <CardProduct 
                            img="cp1.png"
                            title="Big 4 Auditor Financial Analyst"
                            text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                            name="Jenna Ortega"
                            job="Senior Accountant di Gojek"
                            star="★★★★☆"
                            rating="4"
                            nilai={86}
                            harga={300}
                            avatar="acp1.png"
                        />
                        <CardProduct 
                            img="cp1.png"
                            title="Big 4 Auditor Financial Analyst"
                            text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                            name="Jenna Ortega"
                            job="Senior Accountant di Gojek"
                            star="★★★★☆"
                            rating="4"
                            nilai={86}
                            harga={300}
                            avatar="acp1.png"
                        />
                        <CardProduct 
                            img="cp1.png"
                            title="Big 4 Auditor Financial Analyst"
                            text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                            name="Jenna Ortega"
                            job="Senior Accountant di Gojek"
                            star="★★★★☆"
                            rating="4"
                            nilai={86}
                            harga={300}
                            avatar="acp1.png"
                        />
                        <CardProduct 
                            img="cp1.png"
                            title="Big 4 Auditor Financial Analyst"
                            text="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..."
                            name="Jenna Ortega"
                            job="Senior Accountant di Gojek"
                            star="★★★★☆"
                            rating="4"
                            nilai={86}
                            harga={300}
                            avatar="acp1.png"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Body;