async function tempo(request, response){
    const dynamicData = new Date();
    /*
    Caso se precisar esconder algum dado sensivel:
    const apiSecret = process.env.NOME_DA_VARIAVEL;
    */
    
    const subRequest = await fetch("https://httpbin.org/get");
    const subResponse = await subRequest.json();
    const url = subResponse.url;

    response.setHeader('Cache-Control','s-maxage=10','stale-while-revalidate');

    response.json({
        date: dynamicData.toGMTString(),
        url: url
    })
}

export default tempo;