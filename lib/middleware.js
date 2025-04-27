export function middleware(req, ev) {
    const response = NextResponse.next();
    response.headers.set('Content-Security-Policy', "screen-capture 'none'");
    return response;
  }