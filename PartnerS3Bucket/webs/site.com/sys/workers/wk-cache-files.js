onmessage = function (e) {
    console.log('Worker: Message received from main script');
    let CSSFilesToCache = new Array();
    let JSFilesToCache = new Array();
    let data = e.data;
    data.forEach((obj) => {
        if (obj.preloadView) {

            obj.css.forEach((file) => {
                if (CSSFilesToCache.indexOf(file) == -1) {
                    CSSFilesToCache.push(file);
                    fetch(file)
                        .then(function (response) {

                        }).catch(function () {

                        });
                }
            });
            obj.js.forEach((file) => {
                if (JSFilesToCache.indexOf(file) == -1) {
                    JSFilesToCache.push(file);
                    fetch(file)
                        .then(function (response) {

                        }).catch(function () {

                        });
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