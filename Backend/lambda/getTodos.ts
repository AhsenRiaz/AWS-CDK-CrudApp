import { DynamoDB } from "aws-sdk";
const docClient = new DynamoDB.DocumentClient()

type Params =  {
    TableName : string | ""
}

const getTodos = async () => {

    const params:Params =  {
        TableName : process.env.Todos_Table || ""
    }

    try {
        const data = await docClient.scan(params).promise()
        return data.Items
    }

    catch(err){
        return null
    }

}

export default getTodos
