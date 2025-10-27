!(function () {
    var takeTextFromParam = function () {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("txt");
    };
    var addTextToParam = function (text) {
        var fallbackTxt = "Hello, World!";
        var url = new URL(window.location);
        url.searchParams.set("txt", text || fallbackTxt);
        window.history.replaceState({}, "", url);
    };
    var setTextInDom = function (text) {
        var txt = document.getElementById("txt");
        if (txt) {
            txt.innerHTML = decodeURIComponent(text);
        }
    };
    var text = takeTextFromParam();
    if (!text) {
        addTextToParam();
        text = takeTextFromParam();
    }
    setTextInDom(text);
})();