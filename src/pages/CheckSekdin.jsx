import { useNavigate } from "react-router-dom"
import Footer from "../partials/Footer"
import { useState } from "react";


function SelectForm() {
    // State to hold the selected value
    const [selectedOption, setSelectedOption] = useState('');

    // Event handler to update the selected value
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <form>
            <label>
                Pilih Sekolah
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">-- Please select --</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </label>
            <p>Selected option: {selectedOption}</p>
        </form>
    );
}
function CheckSekdin() {

    const navigatge = useNavigate()

    return (
        <div className="container card">
            <div className="alert alert-primary" role="alert">
                YUK CEK SEKOLAH KEDINASNAN MANA YANG TEPAT UNTUK KAMU
            </div>
            <p>Tentukan Sekolah Kedinasan mu secara tepat dengan software rekomendasi ini !!!</p>

            <SelectForm />

            <div className="d-flex justify-content-evenly">
                <button onClick={() => navigatge('/')} className="btn btn-primary">Kembali</button>
                <button onClick={() => navigatge('/color-vision-test')} className="btn btn-primary">Tes Buta Warna</button>
            </div>

            <Footer />
        </div>
    )
}

export default CheckSekdin