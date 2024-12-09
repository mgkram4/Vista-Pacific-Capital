// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Paths that require protection
const PROTECTED_PATHS = ['/api/submit-quote']

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /api/submit-quote)
  const path = request.nextUrl.pathname

  // Check if we need to protect this path
  if (!PROTECTED_PATHS.includes(path)) {
    return NextResponse.next()
  }

  // Get the request origin
  const origin = request.headers.get('origin')
  
  // Validate CORS - only allow requests from your domains
  const allowedOrigins = [
    'https://vistapacificcapital.com',
    'https://www.vistapacificcapital.com',
    // Add any other domains you want to allow, including localhost for development
    'http://localhost:3000'
  ]

  if (!origin || !allowedOrigins.includes(origin)) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Unauthorized origin'
      }),
      {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  // Optional: Add rate limiting
  // You can use request.ip to rate limit by IP address
  
  // Optional: Validate request method
  if (request.method !== 'POST') {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Method not allowed'
      }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }

  // Add CORS headers to the response
  const response = NextResponse.next()
  
  response.headers.set('Access-Control-Allow-Origin', origin)
  response.headers.set('Access-Control-Allow-Methods', 'POST')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  
  return response
}

// Configure the middleware to only run on API routes
export const config = {
  matcher: '/api/:path*'
}