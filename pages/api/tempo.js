async function tempo(request, response){
    const dynamicData = new Date();

    const subRequest = await fetch("https://httpbin.org/get");
    const subResponse = await subRequest.json();
    const url = subResponse.url;
    response.json({
        date: dynamicData.toGMTString(),
        url: url
    })
}

export default tempo;