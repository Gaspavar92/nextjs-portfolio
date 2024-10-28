export async function POST(req: { json: () => PromiseLike<{ messages: any; }> | { messages: any; }; }) {
    try {
      const { messages } = await req.json();
      const apiKey = process.env.NEXT_PUBLIC_GPT_KEY;
  
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages,
        }),
      });
  
      const data = await response.json();
      return new Response(JSON.stringify(data.choices[0].message), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error from OpenAI API:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  }
  