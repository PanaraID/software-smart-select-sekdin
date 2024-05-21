import { useState } from 'react';
import Footer from "../partials/Footer"

function HomePage() {
    const [setPage] = useState('home');

    const navigateTo = (pageName) => {
        setPage(pageName);
    };

    return (
        <div className="container">
            <header>
                <h1>Software</h1>
                <h4>SMART SELECT</h4>
            </header>
            <div className="alert alert-primary" role="alert">
            Aplikasi Pintar Pemilihan Sekolah Kedinasan
            </div>
            <p>Tentukan Sekolah Kedinasan mu secara tepat dengan software rekomendasi ini !!!</p>
            <button onClick={() => navigateTo('home')}>Home</button>
            <button onClick={() => navigateTo('home')}>Home</button>
            <Footer />
        </div>
    )
}

export default HomePage