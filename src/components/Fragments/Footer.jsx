

const Footer = () => {
    return (
        <div className="bg-white">
            <section className="px-24 py-20">
                <div className="flex flex-grid justify-between">
                    <div>
                        <img src="./images/Logo.png" alt="videobelajar" className="h-26 w-44 mb-8"/>
                        <p className="font-bold ">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                        <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                        <p>+62-877-7123-1234</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="mr-20">
                            <ul className="">Kategori
                                <li>Digital & Teknologi</li>
                                <li>Pemasaran</li>
                                <li>Manajemen Bisnis</li>
                                <li>Pengembangan Diri</li>
                                <li>Desain</li>
                            </ul>
                        </div>
                        <div className="mr-20">
                            <ul>Perusahaan
                                <li>Tentang Kami</li>
                                <li>FAQ</li>
                                <li>Kebijakan Privasi</li>
                                <li>Kebijakan Layanan</li>
                                <li>Bantuan</li>
                            </ul>
                        </div>
                        <div>
                            <ul>Komunitas
                                <li>Tips Sukses</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="flex flex-grid justify-between">
                    <div>
                        <p>@2023 Gerobak Sayur All Rights Reserved.</p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-4">
                        <img src="./images/linkedin.png" />
                        <img src="./images/facebook.png" />
                        <img src="./images/instagram.png" />
                        <img src="./images/twitter.png" />
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
};

export default Footer