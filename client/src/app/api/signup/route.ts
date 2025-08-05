import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import brcypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { name, email, password } = await request.json();

    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await brcypt.hash(password, 10);

    const user = await prisma.user.create({
        data: { name, email, password: hashedPassword },
    });
    return NextResponse.json({ user }, { status: 201 })
}