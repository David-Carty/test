onmessage = function (e) {
    console.log('Img Worker: Message received from main script');
    let ImagesToCache = new Array();
    let data = e.data;

    const request = async (url) => {
        const response = await fetch(url);
    }

    data.forEach((obj) => {
        /* Apply each images and ensure no duplicates. */
        obj.img.forEach((file) => {
            if (ImagesToCache.indexOf(file) == -1) {
                ImagesToCache.push(file);
            }
        });
    });

    ImagesToCache.forEach(function (url, i) {

        request(url);
    });




    console.log("ImagesToCache=" + ImagesToCache)
    /*   if (isNaN(result)) {
         postMessage('Please write two numbers');
       } else { */

    console.log('Img Worker: Posting message back to main script');
    postMessage({ result: e.data.name });
    /*}*/
}