import { useNavigate } from "react-router-dom"
import Footer from "../partials/Footer"

function CheckSekdin() {
    const navigatge = useNavigate()

    return (
        <div className="container card">
            <div className="alert alert-primary" role="alert">
            YUK CEK SEKOLAH KEDINASNAN MANA YANG TEPAT UNTUK KAMU
            </div>
            <p>Tentukan Sekolah Kedinasan mu secara tepat dengan software rekomendasi ini !!!</p>

            <div className="d-flex justify-content-evenly">
                <button onClick={() => navigatge('/')} className="btn btn-primary">Kembali</button>
                <button onClick={() => navigatge('/color-vision-test')} className="btn btn-primary">Tes Buta Warna</button>
            </div>

            <Footer />
        </div>
    )
}

export default CheckSekdin