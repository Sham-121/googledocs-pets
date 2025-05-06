document.getElementById('spawn').addEventListener('click', ()=>{
    const breed = document.getElementById('breed').value;
    const count = parseInt(document.getElementById('count').value);

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            command : 'spawn_dogs',
            breed : breed,
            count : count

        });
    });
});
