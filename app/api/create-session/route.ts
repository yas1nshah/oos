// pages/api/getUserId.js

import { lucia } from "@/auth";
import { cookies } from 'next/headers'


export async function GET(req: Request) {
    const session = await lucia.createSession("c1fe0d38-97df-4d1f-a77e-2b6f638c8f09", {
        country: "pk"
    });

    const sessionCookie = lucia.createSessionCookie(session.id);
    const cookieStore = cookies()
    cookieStore.set(sessionCookie.name , sessionCookie.value, sessionCookie.attributes)

    return Response.json({authenticated: "YES"})
}
