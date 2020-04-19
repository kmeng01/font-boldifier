var allowed_sites = ["mulesoft"];

function allowed(str) {
    return true;

    for (var i = 0; i < allowed_sites.length; i++)
        if (str.toLowerCase().includes(allowed_sites[i].toLowerCase()))
            return true;

    return false;
}

function getActivation() {
    return new Promise(resolve => {
        chrome.storage.sync.get(['isOn'], function(result) {
            resolve(result.isOn);
        });
    })
}

async function check() {
    if (allowed(document.URL) && await getActivation()) {
        console.log("Boldifier will operate on this site")
    
        var style = document.createElement('style');
        style.innerHTML = `
        div, span, p, li, ol, h1, h2, h3, h4, h5, h6, a, em {
            color: black !important;
            font-weight: bold !important;
        }
        `;
        document.head.appendChild(style);
    }
}

check();