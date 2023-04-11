document.getElementById('discord').addEventListener('click', function() {
    openInNewTab("https://discord.com/users/758427501386006548");
});

document.getElementById('instagram').addEventListener('click', function() {
    openInNewTab("https://www.instagram.com/notpeatryk/");
});

document.getElementById('youtube').addEventListener('click', function() {
    openInNewTab("https://www.youtube.com/@notpeatryk");
});

document.getElementById('tiktok').addEventListener('click', function() {
    openInNewTab("https://www.tiktok.com/@notpeatryk");
});

document.getElementById('snapchat').addEventListener('click', function() {
    openInNewTab("https://snapchat.com/add/ez.patryk");
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
