// pages/api/register.js

import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
    // Sample user data (replace with your actual user data)
    const userData = {
        id: '1',
        username: 'yas1nshah',
        // Add other user data as needed
    };

    // Create JWT token with user data
    const token = jwt.sign(userData, 'your_secret_key_here', { expiresIn: '1h' });

    // Set the JWT token as a cookie
    const cookie = `jwt=${token}; Path=/; HttpOnly; Max-Age=3600; SameSite=Strict`;

    // Construct the response data
    const data = { message: 'Token set as cookie' };

    // Construct the response with the data and cookie
    const response = new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': cookie // Set the cookie in the response header
        },
    });

    return response;
}
