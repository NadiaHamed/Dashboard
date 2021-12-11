//function () {
    function onTidioChatApiReady() {
        window.tidioChatApi.open();
    }
    if (window.tidioChatApi) {
        window.tidioChatApi.on('ready', onTidioChatApiReady);
    } else {
        document.addEventListener('tidioChat-ready', onTidioChatApiReady);
    }
//})();

setTimeout(function () {
    var tidioScript = document.createElement('script');
    tidioScript.src = '//code.tidio.co/PUBLIC_KEY.js';
    document.body.appendChild(tidioScript);
}, 5 * 1000);