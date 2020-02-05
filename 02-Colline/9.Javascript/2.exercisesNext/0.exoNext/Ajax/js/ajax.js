
    window.addEventListener("load", async () => {
        try {
            const quoteRequest  = await fetch("https://thatsthespir.it/api");
            const quoteReceived = await quoteRequest.json();
            console.log(quoteReceived);
            const author   = await quoteReceived.author + ' <br> <h3> .JW. </h3> ';
            const quote    = await `"${quoteReceived.quote}"`;
            const photoSrc = await quoteReceived.photo; 
            
            document.getElementById("author").innerHTML = author;
            document.getElementById("quote").innerHTML = quote;
            if (photoSrc == undefined || photoSrc == null || photoSrc == ""){
                document.getElementById("photo").remove();
            } else {
                document.getElementById("photo").src = photoSrc;
            }


        }catch (error){
            console.error(error); 
        }
    })
