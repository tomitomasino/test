(function(){

    callService().then(function(result) {
        document.write(result);
    })
    .catch(function(error){
        document.write('error: ' + error);
    });

}());



function callService() {

    return new Promise(function (resolve, reject) {
        console.log('in promise');

        let url = `/api/getResult`;
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                resolve(request.responseText)
            }
            // else {
            //     reject('error or loading');
            // }
        };
        request.open('GET', url, true);
        request.send();
    }
    );
}