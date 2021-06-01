import { Todo } from '../classes';
import { todoList } from '../index';


// referencia en el html

const divTodolist  = document.querySelector('.todo-list');
const txtInput  = document.querySelector('.new-todo');
const btnBorrar  = document.querySelector('.clear-completed');
const ulFiltors  = document.querySelector('.filters');
const anchorFiltros  = document.querySelectorAll('.filtro');



export const crearTodoHtml = (todo)=>{
     
    const htmlTodo = `<li class="${ (todo.completado)? 'completed': ''  }" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${ (todo.completado)? 'checked': ''  }>
							<label>${ todo.tarea }</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;



    divTodolist.append( div.firstElementChild );

    return div.firstElementChild; 

 
}

// eventos

txtInput.addEventListener('keyup',(event)=>{
        if (event.keyCode === 13 && txtInput.value.length > 0) {
            console.log(txtInput.value);
            const nuevoTodo = new Todo(txtInput.value);

            todoList.nuevoTodo(nuevoTodo);
            crearTodoHtml(nuevoTodo);
            txtInput.value=''; 

            //console.log(todoList);
        }
});


divTodolist.addEventListener('click',(event)=>{

    console.log('click');
    //console.log(event.target.localName);
    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento = event.target.parentElement.parentElement;// me selecciona todo el bloque del 'li class data-id' con el id del elemento
    //console.log(nombreElemento);  
    const todoId = todoElemento.getAttribute('data-id');//getAttribute recupera el id porque data-id es donde esta el id en html

    if (nombreElemento.includes('input')) { // click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');//todoElemento es la referencia al bloqu del html classList hace referencia a las clases y toggle para agregar o cambiar una clase

        
    }else if (nombreElemento.includes('button')){// click en X de borrar

        todoList.eliminarTodo(todoId);
        divTodolist.removeChild(todoElemento);//divTodolist.removeChild el que coincida con el elemento todoElemento




    }

    console.log(todoList)
     
     

});

btnBorrar.addEventListener('click',(event)=>{

    todoList.eliminarCompletado();
    for (let i = divTodolist.children.length-1; i>=0; i--  ) {//divTodolist.children referencia a todos los hijos y empezamos en la ultima posicion
        
        
        const elemento = divTodolist.children[i];
        //console.log(elemento);

        if (elemento.classList.contains('completed')) {// comprobamos si contiene la class completed
            divTodolist.removeChild(elemento);
            
        };


    };


});

ulFiltors.addEventListener('click',(event)=>{
    console.log(event.target.text);
    const filtro = event.target.text;
    if (!filtro) { return; }

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const elemento  of divTodolist.children) {

        //console.log(elemento)
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch( filtro ) {

            case 'Pendientes':
                if( completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ) {
                    elemento.classList.add('hidden');
                }
            break;

        }



        
    }
})