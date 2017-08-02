// socarlosb.github.io ECMAscript file... javascript file!

// vars to connect to the html file
let posts = document.querySelector('#posts');
const jsonFile = "blog/posts.json";

// function to connect to a json file
function connectJSON(callback) {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            callback(http.response);
        }
    };
    http.open('GET', jsonFile, true);
    http.send();
}
// end of function to connect to a json file

// my call function
function getData(params) {
    // run the connectJSON function
    connectJSON(function (response) {
        let jsonData = (JSON.parse(response));
        // get each post and send it to the DOM
        Object.keys(jsonData).forEach(function (key) {
            posts.innerHTML += '<article>' +
                '<h2>' + jsonData[key].title + '</h2>' +
                '<h3>' + jsonData[key].date + '</h3>' +
                '<p>' + jsonData[key].content + '</p>' +
                '<p>Send me an email message by clicking <a href="mailto: socarlosb@gmail.com">here</a>!</p>' +
                '</article>';
        });
    });
}

// after site is open get the blog posts
window.onload = getData();