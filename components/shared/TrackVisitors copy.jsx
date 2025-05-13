'use client'
import { useEffect } from 'react'

const TrackVisitors = () => {

    const Track = async () => {

        const ipResponse = await fetch('https://api.ipify.org?format=json');
        // Obtenir l'adresse IP de l'utilisateur
        const { ip } = await ipResponse.json();

        // Obtenir la localisation de l'utilisateur
        const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const locationData = await locationResponse.json();
        console.log(locationData);


        // afficher les données de localisation
        const location = locationData.country_name + ', ' + locationData.region
        console.log(location);

        // Obtenir l'agent utilisateur
        const userAgent = navigator.userAgent;

        const visitData = json.parse(localStorage.getItem('visitData'));
        const oneHour = 60 * 60 * 1000;

        if (!visitData || (Date.now() - visitData.timestamp > oneHour)) {
            await fetch('http://localhost:5000/api/visitors/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ip,
                    location,
                    userAgent,
                }),
            })
            localStorage.setItem('visitData', JSON.stringify({
                timestamp: Date.now()
            }));
        }

        useEffect(() => {
            Track();
        }, [])

        return (
            <div
                style={{
                    border: '2px solid #FFD900', // Bordure similaire à l'image
                    backgroundColor: 'black', // Couleur de fond similaire à l'image
                    padding: '20px',
                    borderRadius: '10px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    Aujourd'hui : {new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                </p>


                <p style={{ fontSize: '1rem' }}>
                    Visiteurs en ligne : {/* Placeholder for online visitor count */}
                </p>
            </div >
        )
    }
}
export default TrackVisitors