// socarlosb.github.io ECMAscript file... javascript file!

// vars to connect to the html file
let templateChanger = document.querySelector('#templateChanger');

// send the content to the page
window.onload = templateChanger.innerHTML =
    `<p>Change color here </p>
    <button onclick="changeCSS('cssTheme', 'css/tempCappuccino.css', 'css/tempGoogle.css', 'css/tempBootstrap.css')">Change colour</button>
    <p>or select from this list:</p>
    <div id="templateSelector"></div>`;