//Declcaring the modules to be used...
const fs = require('fs');
const http = require('http');
const path = require('path');

//Server creation...
http.createServer(function(req, res) {
    if (req.method === 'POST') {
        // fs.writeFile('message.txt', '/message', (err) => {
        //     if (err) throw err;
        // });

        //Create folder, Create a file inside the folder and write to the file...
        fs.mkdir(path.join(__dirname, '/message'), {}, err => {
            if (err) throw err;
            console.log('Folder created...')
        });
        fs.writeFile(
            path.join(__dirname, '/message', 'message.txt'),
            '',
            err => {
                if (err) throw err;
            }

        )
    }
    fs.readFile('/message', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
      <!DOCTYPE html>
<html>
<head>
	<title>message</title>
</head>
<body>
<center>
<form action="/message" method="POST">
	<p>
		<label for="message">Message</label> <br/>
		<textarea name="message" cols="20" rows="10" placeholder="Type your message in here..."></textarea>
	</p>

	<p>
		<input type="submit" name="message">
	</p>
</form>
</center>
</body>
</html>
      `);
        res.end();
    });
}).listen(8080);