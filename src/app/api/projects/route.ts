import { NextResponse } from 'next/server';
import { Project } from "../../types";

export const GET = async() => {
    const url = "https://api.netlify.com/api/v1/sites";
    const request = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${process.env.NETLIFY_TOKEN}`,
            "Content-Type": "application/json"
        }

    })

    const response: Project[] = await request.json();
    return NextResponse.json(response);
}