	"use strict";

	let editorView = document.querySelector('.editor-view'),
		editorField = document.querySelector('.editor-field');
		
		editorField.hidden = true;

		document.addEventListener('keydown', editorInit);

		function editorInit(event){
			
			console.log(event.keyCode);

			if(event.keyCode == 69 && event.ctrlKey && editorField.hidden){
				event.preventDefault();
				editorField.value = editorView.innerHTML.trim();
				editorView.hidden = true;
				editorField.hidden = false;
				editorField.focus();
			}

			if(event.keyCode == 83 && event.ctrlKey && !editorField.hidden){
				event.preventDefault();

				editorView.innerHTML = editorField.value;
				editorView.hidden = false;
				editorField.hidden = true;
			}
			if(event.keyCode == 27 && !editorField.hidden){
				event.preventDefault();
				editorView.hidden = false;
				editorField.hidden = true;
			}

		}



