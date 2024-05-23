import { useNavigate } from "react-router-dom"

import Header from "../partials/Header"
import Footer from "../partials/Footer"

function BerapaMinus() {
    const navigatge = useNavigate()

    return (
        <div className="container card">
            <Header text="YUK CEK TINGKAT MINUS MATA KAMU" />
            <p>Tentukan Sekolah Kedinasan mu secara tepat dengan software rekomendasi ini !!!</p>

            <div className="d-flex justify-content-evenly">
                <button onClick={() => navigatge('/cek-sekdin') } className="btn btn-primary">Cek Sekolah Kedinasanmu</button>
                <button onClick={() => navigatge('/color-vision-test') } className="btn btn-primary">Tes Buta Warna</button>
            </div>

            <Footer />
        </div>
    )
}

export default BerapaMinus