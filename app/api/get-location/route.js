import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const ip = searchParams.get('ip');

  if (!ip) {
    return NextResponse.json({ error: 'IP address is required' }, { status: 400 });
  }

  try {
    // Using ipapi.co as an example, it's free and doesn't require an API key for basic lookups.
    // You can replace this with any other geolocation service if you prefer.
    const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);

    if (!geoResponse.ok) {
      const errorData = await geoResponse.text();
      console.error(`Error from geolocation API: ${geoResponse.status} ${errorData}`);
      return NextResponse.json({ error: `Failed to fetch location data: ${geoResponse.statusText}` }, { status: geoResponse.status });
    }

    const locationData = await geoResponse.json();
    return NextResponse.json(locationData);
  } catch (error) {
    console.error('Error fetching location data:', error);
    return NextResponse.json({ error: 'Internal server error while fetching location data' }, { status: 500 });
  }
}