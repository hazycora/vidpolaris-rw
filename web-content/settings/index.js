if (localStorage.getItem("invSrc")) {
	localStorage.removeItem("invSrc");
}

if (localStorage.getItem("n_theme")) {
	document.getElementById("n_theme").value = localStorage.getItem("n_theme");
}

if (localStorage.getItem("sq")) {
	document.getElementById("sq").value = localStorage.getItem("sq");
}

if (localStorage.getItem("ov")) {
	document.getElementById("ov").value = localStorage.getItem("ov");
}

if (localStorage.getItem("vp9")) {
	document.getElementById("vp9").value = localStorage.getItem("vp9");
}

function save(setting, val) {
	localStorage.setItem(setting, val);
}

function apply() {
	if (window.history.back()) {
		window.history.back();
		window.location.reload(); 
	} else {
		window.location.reload(); 
	}
}