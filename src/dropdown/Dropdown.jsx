import React, { useState } from 'react'
import styles from "./dropdown.module.css"

const countries = ["Palestine", "Argentine", "Tunisie", "Australie", "Brésil", "France", "Canada", "Allemagne", "Espagne ", "Portugal"];
const tunisiaRegions = ["Tunis", "Béja", "Sousse", "Ben Arous", "	Bizerte", "Gabès", "Medenine", "Monastir", "Sfax", "Nabeul", "Mahdia"];
const Dropdown = () => {

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedRegion('');
    };

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
    };


    return (
        <div className={styles.container}>
            <label>Choisir un pays :</label>
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Sélectionnez un pays</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </select>

            {selectedCountry === "Tunisie" && (
                <div>
                    <label>Choisir une région :</label>
                    <select value={selectedRegion} onChange={handleRegionChange}>
                        <option value="">Sélectionnez une région</option>
                        {tunisiaRegions.map((region, index) => (
                            <option key={index} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>

                    <img src='https://i.pinimg.com/originals/4d/51/e1/4d51e16f2a5d745ce7c2c75b86b4a310.png' alt='tunisie' />
                </div>
            )}

        </div>
    )
}

export default Dropdown