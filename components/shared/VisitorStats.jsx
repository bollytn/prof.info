'use client';
import React, { useState, useEffect } from 'react';

const VisitorStats = () => {
    const [stats, setStats] = useState({
        today: 0,
        topDay: { count: 0, date: '' },
        online: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('@/api/visitor-stats'); // API pour récupérer les statistiques
                const data = await response.json();
                setStats({
                    today: data.today || 0,
                    topDay: data.topDay || { count: 0, date: '' },
                    online: data.online || 0,
                });
            } catch (error) {
                console.error('Erreur lors de la récupération des statistiques :', error);
            }
        };

        // Appeler l'API toutes les 5 secondes pour des mises à jour en temps réel
        fetchStats();
        const interval = setInterval(fetchStats, 5000);

        return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage
    }, []);

    return (
        <div
            style={{
                backgroundColor: '#a8e063', // Couleur de fond similaire à l'image
                padding: '20px',
                borderRadius: '10px',
                color: '#333',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Aujourd'hui : Le {new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
            <p style={{ fontSize: '1rem' }}>Visites aujourd'hui : {stats.today}</p>
            <p style={{ fontSize: '1rem' }}>
                Top visites par jour : {stats.topDay.count} <br />
                Le {stats.topDay.date}
            </p>
            <p style={{ fontSize: '1rem' }}>Visiteurs en ligne : {stats.online}</p>
        </div>
    );
};

export default VisitorStats;