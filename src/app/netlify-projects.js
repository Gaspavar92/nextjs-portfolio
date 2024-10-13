const getProjects = async() => {
    const url = "https://api.netlify.com/api/v1/sites";
    const request = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": "Bearer nfp_KZta4KZ9asZPn52Nh6ZQM3GiYG69Y6Drbd59",
            "Content-Type": "application/json"
        }

    })

    const response = await request.json();
    console.log(response);
    return response;
}

export default getProjects;