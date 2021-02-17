import addTodo from "./addTodo"
import Todo from "./Todo"


interface AppSyncEvent {
    info : {
        fieldName : string
    },
    arguments : {
        todo : Todo

    }
}

exports.handler = async (event:AppSyncEvent) => {

    switch(event.info.fieldName){
        case "addTodo" : 
        return await addTodo(event.arguments.todo)

        default :
        return null
    }

}