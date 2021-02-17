import * as cdk from '@aws-cdk/core';
import * as appsync from "@aws-cdk/aws-appsync"
import * as ddb from "@aws-cdk/aws-dynamodb"
import * as lambda from '@aws-cdk/aws-lambda'

export class CdkCrudAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // Here we will create construct for appsync to define the schema
    const api = new appsync.GraphqlApi(this , "CrudAPI" , {
      name : "cdk-TodoCRUD-Api",
      schema : appsync.Schema.fromAsset("graphql/schema.gql"),
      xrayEnabled : true,
      authorizationConfig : {
        defaultAuthorization : {
          authorizationType : appsync.AuthorizationType.API_KEY,
          apiKeyConfig : {
            expires : cdk.Expiration.after(cdk.Duration.days(365))
          }
        },
      
      }
    });

    // here we will create construct for lambda function
    const lambdaFn = new lambda.Function(this , "myLambdaFunction" , {
      runtime : lambda.Runtime.NODEJS_10_X,
      code : lambda.Code.fromAsset("lambda"),
      handler : "main.handler"
    })

    // here we will define our data source which will be our lambda function
    const dataSource = api.addLambdaDataSource("lambdaDataSource" , lambdaFn  );

    // here we will create resolver for each query defined in the schema
    dataSource.createResolver({
      typeName : "Mutation",
      fieldName : "addTodo"
    });

    dataSource.createResolver({
      typeName : "Query",
      fieldName : "getTodos"
    });

    dataSource.createResolver({
      typeName : "Mutation",
      fieldName : "deleteTodo"
    });

    dataSource.createResolver({
      typeName : "Mutation",
      fieldName : "updateTodo"
    });





    // here we will create the table in our dynamodb

    const dynamotable = new ddb.Table(this , "CRUD_Table" , {
      tableName : "Crud-App-Todo",
      partitionKey  :{
        name : "id",
        type : ddb.AttributeType.STRING
      }
    });


    // granting access to lambda function to our dynamodb
    dynamotable.grantFullAccess(lambdaFn)

    // creating env variables
    lambdaFn.addEnvironment("Todos_Table" , dynamotable.tableName );

  
  }
}
