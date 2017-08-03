// socarlosb.github.io ECMAscript file... javascript file!

// vars to connect to the html file
let templateSelec = document.querySelector('#templateSelector');

// send the content to the page
window.onload = templateSelec.innerHTML =
    `<select onchange=changeTemp() id="tempSelector">
        <option value="tempCappuccino">Cappuccino</option >
        <option value="tempGoogle">Google</option>
        <option value="tempBootstrap">Bootstrap</option>
    </select >`;

function changeTemp(params) {
    let e = document.querySelector("#tempSelector");
    let tempSelected = e.options[e.selectedIndex].value;
    let temp = 'css/' + tempSelected + '.css';

    console.log(tempSelected);
    document.querySelector('#cssTheme').setAttribute('href', temp);
}