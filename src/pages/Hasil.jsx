import { useNavigate } from "react-router-dom"

import Header from "../partials/Header"
import Footer from "../partials/Footer"

function Hasil() {
    const navigatge = useNavigate()

    return (
        <div className="container card">
            <Header text="YUK CEK SEKOLAH APAKAH KAMU BUTA WARNA?" />
            <p>Tentukan Sekolah Kedinasan mu secara tepat dengan software rekomendasi ini !!!</p>

            <div className="d-flex justify-content-evenly">
                <button onClick={() => navigatge('/cek-sekdin') } className="btn btn-primary">Cek Sekolah Kedinasanmu</button>
                <button onClick={() => navigatge('/berapa-minus') } className="btn btn-primary">Lanjutkan</button>
            </div>

            <Footer />
        </div>
    )
}

export default Hasil