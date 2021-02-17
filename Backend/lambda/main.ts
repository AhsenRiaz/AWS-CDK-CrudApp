import addTodo from "./addTodo"
import deleteTodo from "./deleteTodo"
import getTodos from "./getTodos"
import Todo from "./Todo"
import updateTodo from "./updateTodo";


interface AppSyncEvent {
    info : {
        fieldName : string
    },
    arguments : {
        todo : Todo
        todoId : string
    }
}


exports.handler = async (event:AppSyncEvent) => {

    switch(event.info.fieldName){
        case "addTodo" : 
        return await addTodo(event.arguments.todo)

        case "getTodos":
        return await getTodos()

        case "deleteTodo":
        return await deleteTodo(event.arguments.todoId)

        case "updateTodo":
            return await updateTodo(event.arguments.todo)

        

        default :
        return null
    }

}