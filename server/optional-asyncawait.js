// Learning about async await ES2017 feature

// WAF to retrieve a blob of json
// make an ajax request
// Use the 'fetch' function

// api - http://rallycoding.herokuapp.com/api/music_albums
// contains music albums JSON blob

// Normal syntax
function fetchAlbums() {
	fetch('http://rallycoding.herokuapp.com/api/music_albums')
		.then(res => res.json())
		.then(json => console.log(json));
}

fetchAlbums();


// async-await to handle ajax requests
async function fetchAlbums() {
	const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
	const json = await res.json()
	console.log(json);
}

fetchAlbums();

// Arrow functions
const fetchAlbums = async() => {
	const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
	const json = await res.json()
	console.log(json);
}

fetchAlbums();
