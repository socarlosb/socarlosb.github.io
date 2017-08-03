/*
This code changes the href path of a link tag (to change css files for example)
How to use:
- create an event with the function changeCSS() to change the href:
- the first argument expects the title of the <link>, the other arguments expect the css value.
(you can add as many css paths as you want)
Example:
    <button onclick="changeCSS('cssTheme', css/cappuccino.css', 'css/cappuccino1.css', 'css/cappuccino2.css')">Change colour</button>
*/
let elementSelected = 1;
export function changeCSS() {
    let element;
    let linkTagTitle = 'link[title=' + arguments[0] + ']';

    for (let i = 1; i < arguments.length; i++) {

        if (elementSelected === i) {
            element = arguments[i + 1];
            elementSelected += 1;
            break;
        } else if (elementSelected >= arguments.length - 1) {
            element = arguments[1];
            elementSelected = 1;
            break;
        }
    }
    document.querySelector(linkTagTitle).setAttribute('href', element);
}