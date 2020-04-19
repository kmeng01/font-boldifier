function getActivation() {
    return new Promise(resolve => {
        chrome.storage.sync.get(['isOn'], function(result) {
            resolve(result.isOn);
        });
    })
}

async function init() {
    var cur = await getActivation();
    if (cur == undefined) {
        chrome.storage.sync.set({isOn: true}, function() {});
    }
}

init();