const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 9000;
const allImgData = fs.readFileSync(path.join( __dirname, 'data', 'data.json')); // get content from file
const allImgDataJSON = JSON.parse(allImgData);

app.use( express.static( __dirname + '/public' ));

function getFilteredImgs(query) {
	const regexp = new RegExp(query, 'gi'); // use regex to search case-insensitive
	return allImgDataJSON.results.filter(obj => obj.title.match(regexp) || obj.description.match(regexp));
}

app.get( '/img-search', function( req, res ) {
	const imgResults = getFilteredImgs(req.query.q);
	res.setHeader('Content-Type', 'application/json');
	res.send(imgResults);
});

app.get( '/', function( req, res ) {
	res.sendFile(path.join( __dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});