// pages/api/getUserId.js

import jwt, { JwtPayload } from 'jsonwebtoken';

export async function GET(req: Request) {
    // Extract the JWT token from the cookie
    const jwtCookie = req.headers.get('Cookie') || '';
    const jwtToken = jwtCookie.split(';').find(cookie => cookie.trim().startsWith('jwt='));

    if (!jwtToken) {
        return new Response(JSON.stringify({ error: 'JWT token not found in the cookie' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    // Extract the user ID from the JWT token
    try {
        const decodedToken = jwt.verify(jwtToken.split('=')[1], 'your_secret_key_here') as JwtPayload;
        const userId = decodedToken.id;

        return new Response(JSON.stringify({ userId }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to verify JWT token' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
