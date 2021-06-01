import './styles.css';
import { Todo, TodoList } from './classes'; 
import { crearTodoHtml } from './js/componentes';
/* import { Todo } from './classes/todo.class.js';
import { TodoList } from './classes/todo-list.class'; */
 

//console.log('prueba');
export const todoList = new TodoList();
//const tarea = new Todo('Aprender Javascript!!!');
//tarea.completado=true;

 //console.log(tarea);

 //todoList.nuevoTodo(tarea);
 //console.log(todoList);
 //crearTodoHtml(tarea); 

/*  localStorage.setItem('mi-key','ABC123');
 sessionStorage.setItem('mi-key2','KKKK987'); */

/*  setTimeout(() => {
     localStorage.removeItem('mi-key');
 },2000); */

 todoList.todos.forEach(todo => crearTodoHtml( todo ));