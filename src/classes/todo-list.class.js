import { Todo } from './todo.class';

export class TodoList {

    constructor(){

        //this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo){

        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo(id){
        this.todos = this.todos.filter((todo)=>{
            todo.id != id;
        });
        this.guardarLocalStorage();
        

    }

    marcarCompletado(id){

        for (const todo of this.todos) {
            if (todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
            
        }


    }

    eliminarCompletado(){

        this.todos = this.todos.filter( todo=> !todo.completado );         
        
        this.guardarLocalStorage();
        
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo') )
                        ? JSON.parse( localStorage.getItem('todo') )
                        : [];
        
        this.todos = this.todos.map( Todo.fromJson );
        // esto es el resumen del if/else de abajo
/*
        if (localStorage.getItem('todo')) {
            this.todos = JSON.parse(localStorage.getItem('todo'));//localStorage.getItem('todo') asi devolvia string JSON.parse lo convierte en objeto... porque cuando se guarda en el storage se guarda como string

            console.log('localStorage es:' + this.todos)
            console.log('tipo de todos:',typeof this.todos);// comprobamos que ahora no son objetos sino string y por eso no se puede guarda Uncaught TypeError: this.todos.push is not a function
            //at TodoList.nuevoTodo
            
        } else {
            this.todos=[];
            
        }
*/

    }

}
