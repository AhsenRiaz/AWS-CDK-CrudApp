
import { DynamoDB } from "aws-sdk";
import Todo from "./Todo";
const docClient = new DynamoDB.DocumentClient()

type Params =  {
    TableName : string | ""
    Item : Todo
}



const addTodo = async (todo:Todo) => {
    
    const params:Params = {
        TableName : process.env.Todos_Table || "",
        Item : todo
    }

    try {
        const data = await docClient.put(params).promise()
        return todo
    }
    catch(err){
        return null
    }
}

export default addTodo
