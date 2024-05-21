import { useNavigate } from "react-router-dom"
import Footer from "../partials/Footer"

function HomePage() {
    const navigatge = useNavigate()

    return (
        <div className="container">
            <header className="text-center">
                <h1>Software</h1>
                <h4>SMART SELECT</h4>
            </header>
            <div className="alert alert-primary" role="alert">
                Aplikasi Pintar Pemilihan Sekolah Kedinasan
            </div>
            <p>Tentukan Sekolah Kedinasan mu secara tepat dengan software rekomendasi ini !!!</p>

            <button onClick={() => navigatge('/') } className="btn btn-primary">Cek Sekolah Kedinasanmu</button>
            <button onClick={() => navigatge('/color-vision-test') } className="btn btn-primary">Tes Buta Warna</button>

            <Footer />
        </div>
    )
}

export default HomePage