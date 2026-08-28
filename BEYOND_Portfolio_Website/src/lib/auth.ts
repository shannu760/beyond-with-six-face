import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET || "beyond_ai_super_secret_key_2026_production_grade";
const AUTH_COOKIE_NAME = "beyond_auth_token";

export interface SessionUser {
  userId: string;
  email: string;
  name: string;
  role: string;
  organizationId: string;
  organizationName: string;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function signToken(payload: SessionUser): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "30d" });
}

export function verifyToken(token: string): SessionUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as SessionUser;
  } catch {
    return null;
  }
}

export function setAuthCookie(token: string): void {
  cookies().set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

export function clearAuthCookie(): void {
  cookies().set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function getSessionUser(req?: NextRequest): Promise<SessionUser | null> {
  let token: string | undefined;

  if (req) {
    // 1. Check Bearer token in Authorization header
    const authHeader = req.headers.get("Authorization") || req.headers.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.substring(7);
    }
    // 2. Check cookie in request
    if (!token) {
      token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
    }
  }

  // 3. Check cookie via next/headers
  if (!token) {
    try {
      token = cookies().get(AUTH_COOKIE_NAME)?.value;
    } catch {
      // ignore
    }
  }

  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload || !payload.userId) return null;

  return payload;
}

export async function requireAuth(req?: NextRequest): Promise<SessionUser> {
  const user = await getSessionUser(req);
  if (!user) {
    throw new Error("UNAUTHORIZED");
  }
  return user;
}
