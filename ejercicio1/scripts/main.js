//use strict;

function createPerson() {
    var myPerson = {
        'nombre' : nombre.value,
        'apellido' : apellido.value,
        'email' : email.value
    };

    list.push(myPerson);
}

function printPerson() {
	htmlContent = '';

    list.forEach(function(valor, indice) {
        htmlContent +='<tr>';

        Object.keys(list[indice]).forEach(function(key) {
            htmlContent += '<td>' + list[indice][key] + '</td>';
        });

        // var newBtn = document.createElement(button);
        // newBtn.addEventListener(jkjhdskj )

        htmlContent +='<td><input type="button" class="btn btn-secondary edit-button" data-js="edit" data-edit="' + indice + '" value="Editar"></td>';

        htmlContent +='</tr>';
    });

    row.innerHTML = htmlContent;
    //row.addNode(newbtn)
}

function clearFields() {
	document.querySelectorAll('input[type=text]').forEach(function(element) {
		element.value = '';
	});
}

function addPerson() {
    createPerson();
    printPerson();
    clearFields()
}

function editPerson(e) {
	if (e.target.getAttribute('data-js') == 'edit') {
		
		var indexRow = e.target.getAttribute('data-edit');
		console.log(indexRow);

		document.querySelectorAll('input[type=text').forEach(function(element) {
			if (element.getAttribute('data-js') == 'nombre') {
				element.value = list[indexRow].nombre;
			}else if(element.getAttribute('data-js') == 'apellido') {
				element.value = list[indexRow].apellido;
			}else {
				element.value = list[indexRow].email;
			}
		});

	}
}

function fillFields() {
	
}


var nombre = document.querySelector('[data-js = nombre]'),
	apellido = document.querySelector('[data-js = apellido]'),
	email = document.querySelector('[data-js = email]'),
	list = [],
    row = document.querySelector('[data-js=info-table]'),
    htmlContent = '';


//listener de buttons

//listener submit
document.querySelector('[data-js=submit]').addEventListener('click', addPerson);

//listener edit
document.querySelector('.table').addEventListener('click', editPerson);

	// if (e.target.getAttribute('data-js') == 'edit') {
		
	// 	var indexRow = e.target.getAttribute('data-edit');
	// 	console.log(indexRow);

	// 	document.querySelectorAll('input[type=text').forEach(function(element) {
	// 		if (element.getAttribute('data-js') == 'nombre') {
	// 			element.value = list[indexRow].nombre;
	// 		}else if(element.getAttribute('data-js') == 'apellido') {
	// 			element.value = list[indexRow].apellido;
	// 		}else {
	// 			element.value = list[indexRow].email;
	// 		}
	// 	});

	// }











