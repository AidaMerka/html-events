// getElementById
function $id(id) {
	return document.getElementById(id);
}

// output information
function Output(msg) {
	var m = $id("messages");
	m.innerHTML = msg + m.innerHTML;
}

// call initialization file
if (window.File && window.FileList && window.FileReader) {
	Init();
}

// initialize
function Init() {
	var fileselect = $id("fileselect"),
		filedrag = $id("filedrag");

	// file select
	fileselect.addEventListener("change", FileSelectHandler, false);

	// is XHR2 available?
	var xhr = new XMLHttpRequest();
	if (xhr.upload) {
		// file drop
		filedrag.addEventListener("dragover", FileDragHover, false);
		filedrag.addEventListener("dragleave", FileDragHover, false);
		filedrag.addEventListener("drop", FileSelectHandler, false);
		filedrag.style.display = "block";
	}
}

function FileDragHover(e) {
	e.stopPropagation();
	e.preventDefault();
	this.className = (e.type === "dragover" ? "hover" : "");
}

function FileSelectHandler(e) {
	// cancel event and hover styling
	FileDragHover(e);

	// fetch FileList object
	var files = e.target.files || e.dataTransfer.files;

	// process all File objects
	for (var i = 0, f; f = files[i]; i++) {
		ReadFile(f);
	}
}

function ReadFile(file) {
	var reader = new FileReader();
	reader.onload = function (e) {
		Output(
			"<p><strong>" + file.name + ":</strong></p><pre>" +
			e.target.result.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
			"</pre>"
		);
	};
	reader.readAsText(file);
}
