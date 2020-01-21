onmessage = function (e) {
    console.log('Worker: Message received from main script');
    let CSSFilesToCache = new Array();
    let JSFilesToCache = new Array();
    let data = e.data;

    const request = async (url) => {
        const response = await fetch(url);
    }

    data.forEach((obj) => {
        if (obj.preloadView) {

            obj.css.forEach((file) => {
                if (CSSFilesToCache.indexOf(file) == -1) {
                    CSSFilesToCache.push(file);
                    request(file);
                }
            });
            obj.js.forEach((file) => {


                if (JSFilesToCache.indexOf(file) == -1) {
                    JSFilesToCache.push(file);
                    request(file);

                }
            });
        };
    });







    console.log("fileToCache=" + JSFilesToCache)
    /*   if (isNaN(result)) {
         postMessage('Please write two numbers');
       } else { */

    console.log('Worker: Posting message back to main script');
    postMessage({ result: e.data.name });
    /*}*/
}