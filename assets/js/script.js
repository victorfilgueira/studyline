const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	handleLocation();
};

const routes = {
	404: "/pages/404.html",
	"/pages": "pages.index.html",
	"/pages/index.html": "/pages/index.html",
	"/": "/pages/index.html",
	"/aulas": "/pages/aulas.html",
	"/livros": "/pages/livros.html",
	"/resumos": "/pages/resumos.html",
	"/perfil": "/pages/perfil.html",
	"/login": "/pages/login.html",
	"/conteudo-exclusivo": "/pages/conteudo-exclusivo.html",
};

const handleLocation = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	const html = await fetch(route).then((data) => data.text());
	document.getElementById("main-page").innerHTML = html;

};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

$(function () {
	let like = $("#like").data("like")
	let dislike = $("dislike").data("dislike")

	$("#like").text(like)
	$("dislike").text(dislike)

})

