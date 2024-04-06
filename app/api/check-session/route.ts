// pages/api/getUserId.js

import { lucia } from "@/auth";
import { cookies } from 'next/headers'



export async function GET(req: Request) {
    const cookieStore = cookies()

    const sessionId = cookieStore.get("auth_session");
    if(sessionId)
    {

        const { session, user } = await lucia.validateSession(sessionId.value);
        if(session)
        {

            return Response.json({authenticated: "YES"})
        }

        return Response.json({authenticated: "NO"})
    }
    else{
        return Response.json({authenticated: "NO"})

    }
   

}
