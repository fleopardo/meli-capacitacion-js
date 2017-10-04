//use strict;

var nombre = document.querySelector('[data-js = nombre]'),
	apellido = document.querySelector('[data-js = apellido]'),
	email = document.querySelector('[data-js = email]'),
	table = document.querySelector('.table'),
	list = [],
    selectedPerson = {};

// creo header de la tabla en el onload
// function createHeader() {
// 	var tableHeader = document.createElement('tr');

// 	Object.keys(model).forEach(function(key, index) {
// 		tableHeader.insertCell(index).innerHTML = key;
//     });

// 	table.appendChild(tableHeader);
// }

function createPerson() {

	var persona = {
		nombre: nombre.value, 
		apellido: apellido.value, 
		email: email.value, 
		id: Math.random()
	}
	
	list.push(persona);
	printPerson(persona);
}

function printPerson(element) {
    	var rowTable = document.createElement('tr'),
    		editButton = document.createElement('input');
    	
    	editButton.type = 'button';
    	editButton.value = 'edit';
		editButton.id = element.id;
    	editButton.addEventListener('click', getPerson);
		
		Object.keys(element).forEach(function(key, index){
			if(key !== 'id') {
				rowTable.insertCell(index).innerHTML = element[key];
			}
		});

		rowTable.insertCell().appendChild(editButton);
    	
    	table.appendChild(rowTable);

    	clearFields();
}

function printAllPersons() {
	cleanTable()

    list.forEach(function(person) {
    	printPerson(person);
    });
}

function getPerson(e) {
	var personId = e.target.id;
	var result = list.find(function onFind(persona){
		return persona.id == personId;
	});
	selectedPerson = result;
	fillFields(result);
}

function SaveOnEdit() {
	selectedPerson.nombre = nombre.value;
	selectedPerson.apellido = apellido.value;
	selectedPerson.email = email.value;
	printAllPersons();
}

function fillFields (person) {
	document.querySelectorAll('input[type=text]').forEach(function(element) {
		if (element.getAttribute('data-js') == 'nombre') {
			element.value = person.nombre;
		}else if(element.getAttribute('data-js') == 'apellido') {
			element.value = person.apellido;
		}else {
			element.value = person.email;
		}
	});
}

function clearFields() {
	document.querySelectorAll('input[type=text]').forEach(function(element) {
		element.value = '';
	});
}

function cleanTable() {
	while (table.firstChild) {
	    table.removeChild(table.firstChild);
	}
}

function editPerson(e) {
	document.querySelectorAll('input[type=text]').forEach(function(element) {
		if (element.getAttribute('data-js') == 'nombre') {
			element.value = list[indexRow].nombre;
		}else if(element.getAttribute('data-js') == 'apellido') {
			element.value = list[indexRow].apellido;
		}else {
			element.value = list[indexRow].email;
		}
	});
}

//listener submit
document.querySelector('[data-js=submit]').addEventListener('click', createPerson);
document.querySelector('[data-js=modify]').addEventListener('click', SaveOnEdit);