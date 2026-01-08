let visitorCount = 0; // simple in-memory counter

export async function GET() {
  visitorCount++; // increase visitor count
  return Response.json({ count: visitorCount });
}
