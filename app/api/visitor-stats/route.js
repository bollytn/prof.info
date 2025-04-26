let visitorCount = 60; // Nombre de visites aujourd'hui
let topDay = { count: 500}; // Top visites par jour
let onlineVisitors = 5; // Nombre de visiteurs en ligne

export async function GET(request) {
    // Simuler une augmentation des visiteurs en ligne
    onlineVisitors = Math.floor(Math.random() * 10) + 5;

    // Simuler une augmentation des visites aujourd'hui
    visitorCount += Math.floor(Math.random() * 1);

    return new Response(
        JSON.stringify({
            today: visitorCount,
            topDay,
            online: onlineVisitors,
        }),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }
    );
}