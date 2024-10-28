import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body from the request
    const { messages } = await req.json();
    const apiKey = process.env.NEXT_PUBLIC_GPT_KEY;

    // Make a request to the OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
      }),
    });

    const data = await response.json();

    // Return the response from OpenAI's API
    return NextResponse.json(data.choices[0].message);
  } catch (error) {
    console.error("Error from OpenAI API:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

  