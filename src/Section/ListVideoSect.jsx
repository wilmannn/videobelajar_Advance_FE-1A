import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListVideoSect = () => {
  // const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get("https://67b731f22bddacfb270e0dda.mockapi.io/users")
      .then((response) => setAPIData(response.data));
  }, []);

  const setData = (data) => {
    let { id, judul, deskripsi, kategori, harga } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Judul", judul);
    localStorage.setItem("Deskripsi", deskripsi);
    localStorage.setItem("Kategori", kategori);
    localStorage.setItem("Harga", harga);
  };
  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-8 text-start">
        <div className="flex flex-col gap-8 w-[80vw]">
          <div className="flex flex-col self-start gap-2">
            <h2 className="text-4xl font-bold">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="font-semibold text-gray-500">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
            <ul className="flex gap-6 mt-12 font-semibold text-gray-500 cursor-pointer">
              <li
                className={`px-5 py-2 ${
                  category === ""
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("")}
              >
                Semua Kelas
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "pemasaran"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("pemasaran")}
              >
                Pemasaran
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "desain"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("desain")}
              >
                Desain
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "pengembanganDiri"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("pengembanganDiri")}
              >
                Pengembangan Diri
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "bisnis"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("bisnis")}
              >
                Bisnis
              </li>
            </ul>
          </div>
          <Link
            to="/edit-course"
            className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {APIData.length > 0 ? (
              APIData.filter(
                (item) => category === "" || item.kategori === category
              ).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full p-6 gap-3 bg-white shadow-md rounded-xl hover:scale-90 cursor-pointer animate"
                  onClick={() => setData(item)}
                >
                  <img
                    src="./images/cp4.jpg"
                    alt="Course Thumbnail"
                    className="object-cover w-full h-56 mb-4 rounded-md"
                  />
                  <h2 className="text-xl font-bold">
                    {item.judul.length > 16
                      ? item.judul.slice(0, 37) + "..."
                      : item.judul}
                  </h2>
                  <p className="font-semibold text-gray-500">
                    {item.deskripsi}
                  </p>
                  <div className="flex flex-row gap-4">
                    <img
                      src="./images/acp1.png"
                      className="w-[12%] rounded-xl"
                      alt="Profile Image"
                    />
                    <div>
                      <h2 className="font-semibold">{item.username}</h2>
                      <p>{item.userrole}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-yellow-500 mr-1">★★★★☆</div>
                      <span className="text-gray-600 text-sm text-underline-2">{item.rating} ({item.value})</span>
                    </div>
                    <div className="text-green-500 font-bold">Rp {item.harga}K</div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-500">Loading...</p>
            )}
          </Link>
        </div>
      </section>
    </>
  );
};

export default ListVideoSect;