// socarlosb.github.io ECMAscript file... javascript file!

// vars to connect to the html file
let templateLayout = document.querySelector('#templateLayoutChanger');

// send the content to the page
window.onload = templateLayout.innerHTML =
    `<p>You can also change the layout css from this list:</p>
    <select onchange=changeLayout() id="tempLayoutSelector">
        <option value="layout">Layout</option >
        <option value="layout2">Random Layout</option>
    </select >`;

function changeLayout(params) {
    let ee = document.querySelector("#tempLayoutSelector");
    let tempLayoutSelected = ee.options[ee.selectedIndex].value;
    let tempe = 'css/' + tempLayoutSelected + '.css';
    console.log(tempLayoutSelected);

    document.querySelector('#cssLayout').setAttribute('href', tempe);
}