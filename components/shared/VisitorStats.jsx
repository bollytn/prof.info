'use client';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import useVisitors from '@/app/hooks/useVisitors';

const VisitorStats = () => {
    const count = useVisitors(); // Fetch visitor count from the custom hook
    const [stats, setStats] = useState({
        today: 0,
        topDay: { count: 0 },
        online: 1,
    });
    const [startCount, setStartCount] = useState(false); // State to control when the count starts

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/visitor-stats');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setStats({
                    today: data.today || 0,
                    topDay: data.topDay || { count: 0 },
                    online: data.online || 1,
                });
            } catch (error) {
                console.error('Error fetching visitor stats:', error);
            }
        };

        // Fetch stats and start the count after 2 seconds
        fetchStats();
        const timer = setTimeout(() => {
            setStartCount(true);
        }, 2000); // 2-second delay

        const interval = setInterval(fetchStats, 10000); // Fetch stats every 5 seconds

        return () => {
            clearTimeout(timer); // Cleanup the timer
            clearInterval(interval); // Cleanup the interval
        };
    }, []);

    return (
        <div
            style={{
                border: '2px solid #FFD900', // Bordure similaire à l'image
                backgroundColor: '#black', // Couleur de fond similaire à l'image
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
            {/*<p style={{ fontSize: '1rem' }}>
                Visites aujourd'hui :{' '}
                {startCount && (
                    <CountUp
                        start={0}
                        end={stats.today}
                        duration={10}
                        separator=","
                        style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                    />
                )}
            </p>*/}
            <p style={{ fontSize: '1rem' }}>
                Top visites par jour :{' '}
                {startCount && (
                    <CountUp
                        start={0}
                        end={stats.topDay.count}
                        duration={10}
                        separator=","
                        style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                    />
                )}
                <br />
            </p>
            <p style={{ fontSize: '1rem' }}>
                Visiteurs en ligne :{' '}
                {/* use count from the custom hook */}
                {count}
            </p>

        </div>
    );
};

export default VisitorStats;