import { useNavigate } from "react-router-dom"

import Header from "../partials/Header"
import Footer from "../partials/Footer"

function HomePage() {
    const navigatge = useNavigate()

    return (
        <div className="container card">
            <header className="text-center">
                <h1>Software</h1>
                <h4>SMART SELECT</h4>
            </header>
            <Header text="Aplikasi Pintar Pemilihan Sekolah Kedinasan" />
            <p>Tentukan Sekolah Kedinasan mu secara tepat dengan software rekomendasi ini !!!</p>

            <div className="d-flex justify-content-evenly">
                <button onClick={() => navigatge('/cek-sekdin') } className="btn btn-primary">Cek Sekolah Kedinasanmu</button>
                <button onClick={() => navigatge('/color-vision-test') } className="btn btn-primary">Tes Buta Warna</button>
            </div>

            <Footer />
        </div>
    )
}

export default HomePage