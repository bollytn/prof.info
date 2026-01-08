let visitorCount = 150; // Nombre de visites aujourd'hui
let topDay = { count: 537 }; // Top visites par jour
let onlineVisitors = 2; // Nombre de visiteurs en ligne
let lastUpdateDate = new Date().toLocaleDateString(); // Track the last update date

export async function GET(request) {
    const currentDate = new Date().toLocaleDateString();

    // Check if the date has changed
    if (currentDate !== lastUpdateDate) {
        // Update visitorCount with a random value between 80 and 200
        visitorCount = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
        lastUpdateDate = currentDate; // Update the last update date

        // Optionally update topDay if visitorCount exceeds the current topDay count
        if (visitorCount > topDay.count) {
            topDay = { count: visitorCount };
        }
    }

    // Simulate an increase in online visitors
    onlineVisitors = Math.floor(Math.random() * 2) + 1; 

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