import { DynamoDB } from "aws-sdk";
const docClient = new DynamoDB.DocumentClient();

type Params = {
    TableName : string | ""
    Key : {
        id : string
    }
}

const deleteTodo = async (todoId:string) => {
    const params : Params = {
        TableName : process.env.Todos_Table || "" ,
        Key : {
            id : todoId
        }
    }

    try {
        await docClient.delete(params).promise()
        return todoId
    }
    catch(err){
        return null
    }
}

export default deleteTodo