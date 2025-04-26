let visitorCount = 3786; // Nombre de visites aujourd'hui
let topDay = { count: 14685, date: '22 avril 2025' }; // Top visites par jour
let onlineVisitors = 30; // Nombre de visiteurs en ligne

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Simuler une augmentation des visiteurs en ligne
        onlineVisitors = Math.floor(Math.random() * 50) + 10;

        // Simuler une augmentation des visites aujourd'hui
        visitorCount += Math.floor(Math.random() * 5);

        res.status(200).json({
            today: visitorCount,
            topDay,
            online: onlineVisitors,
        });
    } else {
        res.status(405).json({ error: 'Méthode non autorisée' });
    }
}