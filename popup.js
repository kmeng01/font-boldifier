function getActivation() {
    return new Promise(resolve => {
        chrome.storage.sync.get(['isOn'], function(result) {
            resolve(result.isOn);
        });
    })
}

async function toggleActivation() {
    var cur = await getActivation();
    chrome.storage.sync.set({isOn: !cur}, function() {});
}

window.onload = async function() {
    var checked = await getActivation();
    if (checked) document.getElementById("onOffToggle").click();

    document.getElementById("onOffToggle").onclick = () => {
        toggleActivation();
    };
}