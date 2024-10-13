const getProjects = async() => {
    const url = "https://api.netlify.com/api/v1/sites";
    const request = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            "Content-Type": "application/json"
        }

    })

    const response = await request.json();
    console.log(response);
    return response;
}

export default getProjects;