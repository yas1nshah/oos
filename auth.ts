import { Lucia } from "lucia";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";

const adapter  = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		// this sets cookies with super long expiration
		// since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
		expires: false,
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		}
	}
});

// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
        DatabaseSessionAttributes: DatabaseSessionAttributes;
	}
    
}

interface DatabaseSessionAttributes {
	country: string;
}