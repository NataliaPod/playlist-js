"use strict";

const playList = [{
	author: "led zeppelin",
	song: "stairway to heaven",
	duration: "2:03"
},
{
	author: "queen",
	song: "bohemian rhapsody",
	duration: "2:30"
},
{
	author: "lynyrd skynyrd",
	song: "free bird",
	duration: "1:56"
},
{
	author: "deep purple",
	song: "smoke on the water",
	duration: "3:03"
},
{
	author: "jimi hendrix",
	song: "all along the watchtower",
	duration: "2:53"
},
{
	author: "AC/DC",
	song: "back in black",
	duration: "2:43"
},
{
	author: "queen",
	song: "we will rock you",
	duration: "2:13"
},
{
	author: "metallica",
	song: "enter sandman",
	duration: "3:03"
}
];

function showPlaylist(playList) {
	const list = document.querySelector('[data-list]');
	const tmpl = document.querySelector('[data-tmpl]').textContent;

	let listHTML = '';

	playList.forEach(song => {
		// console.log(song);

		listHTML += tmpl
			.replace(/{{title}}/gi, song.song)
			.replace(/{{artist}}/gi, song.author)
			.replace(/{{duration}}/gi, song.duration)
	});

	list.innerHTML = listHTML;
}

showPlaylist(playList);