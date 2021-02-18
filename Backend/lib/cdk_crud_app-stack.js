"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkCrudAppStack = void 0;
const cdk = require("@aws-cdk/core");
const appsync = require("@aws-cdk/aws-appsync");
const ddb = require("@aws-cdk/aws-dynamodb");
const lambda = require("@aws-cdk/aws-lambda");
class CdkCrudAppStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        // Here we will create construct for appsync to define the schema
        const api = new appsync.GraphqlApi(this, "CrudAPI", {
            name: "cdk-TodoCRUD-Api",
            schema: appsync.Schema.fromAsset("graphql/schema.gql"),
            xrayEnabled: true,
            authorizationConfig: {
                defaultAuthorization: {
                    authorizationType: appsync.AuthorizationType.API_KEY,
                    apiKeyConfig: {
                        expires: cdk.Expiration.after(cdk.Duration.days(365))
                    }
                },
            }
        });
        // here we will create construct for lambda function
        const lambdaFn = new lambda.Function(this, "myLambdaFunction", {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset("lambda"),
            handler: "main.handler"
        });
        // here we will define our data source which will be our lambda function
        const dataSource = api.addLambdaDataSource("lambdaDataSource", lambdaFn);
        // here we will create resolver for each query defined in the schema
        dataSource.createResolver({
            typeName: "Mutation",
            fieldName: "addTodo"
        });
        dataSource.createResolver({
            typeName: "Query",
            fieldName: "getTodos"
        });
        dataSource.createResolver({
            typeName: "Mutation",
            fieldName: "deleteTodo"
        });
        dataSource.createResolver({
            typeName: "Mutation",
            fieldName: "updateTodo"
        });
        // here we will create the table in our dynamodb
        const dynamotable = new ddb.Table(this, "CRUD_Table", {
            tableName: "Crud-App-Todo",
            partitionKey: {
                name: "id",
                type: ddb.AttributeType.STRING
            }
        });
        // granting access to lambda function to our dynamodb
        dynamotable.grantFullAccess(lambdaFn);
        // creating env variables
        lambdaFn.addEnvironment("Todos_Table", dynamotable.tableName);
    }
}
exports.CdkCrudAppStack = CdkCrudAppStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrX2NydWRfYXBwLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrX2NydWRfYXBwLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxnREFBK0M7QUFDL0MsNkNBQTRDO0FBQzVDLDhDQUE2QztBQUU3QyxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDNUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4Qiw2Q0FBNkM7UUFFN0MsaUVBQWlFO1FBQ2pFLE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUcsU0FBUyxFQUFHO1lBQ3BELElBQUksRUFBRyxrQkFBa0I7WUFDekIsTUFBTSxFQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDO1lBQ3ZELFdBQVcsRUFBRyxJQUFJO1lBQ2xCLG1CQUFtQixFQUFHO2dCQUNwQixvQkFBb0IsRUFBRztvQkFDckIsaUJBQWlCLEVBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU87b0JBQ3JELFlBQVksRUFBRzt3QkFDYixPQUFPLEVBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3ZEO2lCQUNGO2FBRUY7U0FDRixDQUFDLENBQUM7UUFFSCxvREFBb0Q7UUFDcEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRyxrQkFBa0IsRUFBRztZQUMvRCxPQUFPLEVBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ3BDLElBQUksRUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDdEMsT0FBTyxFQUFHLGNBQWM7U0FDekIsQ0FBQyxDQUFBO1FBRUYsd0VBQXdFO1FBQ3hFLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRyxRQUFRLENBQUcsQ0FBQztRQUU1RSxvRUFBb0U7UUFDcEUsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUN4QixRQUFRLEVBQUcsVUFBVTtZQUNyQixTQUFTLEVBQUcsU0FBUztTQUN0QixDQUFDLENBQUM7UUFFSCxVQUFVLENBQUMsY0FBYyxDQUFDO1lBQ3hCLFFBQVEsRUFBRyxPQUFPO1lBQ2xCLFNBQVMsRUFBRyxVQUFVO1NBQ3ZCLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxjQUFjLENBQUM7WUFDeEIsUUFBUSxFQUFHLFVBQVU7WUFDckIsU0FBUyxFQUFHLFlBQVk7U0FDekIsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUN4QixRQUFRLEVBQUcsVUFBVTtZQUNyQixTQUFTLEVBQUcsWUFBWTtTQUN6QixDQUFDLENBQUM7UUFNSCxnREFBZ0Q7UUFFaEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRyxZQUFZLEVBQUc7WUFDdEQsU0FBUyxFQUFHLGVBQWU7WUFDM0IsWUFBWSxFQUFHO2dCQUNiLElBQUksRUFBRyxJQUFJO2dCQUNYLElBQUksRUFBRyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU07YUFDaEM7U0FDRixDQUFDLENBQUM7UUFHSCxxREFBcUQ7UUFDckQsV0FBVyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUVyQyx5QkFBeUI7UUFDekIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBRSxDQUFDO0lBR2xFLENBQUM7Q0FDRjtBQTVFRCwwQ0E0RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBhcHBzeW5jIGZyb20gXCJAYXdzLWNkay9hd3MtYXBwc3luY1wiXG5pbXBvcnQgKiBhcyBkZGIgZnJvbSBcIkBhd3MtY2RrL2F3cy1keW5hbW9kYlwiXG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSdcblxuZXhwb3J0IGNsYXNzIENka0NydWRBcHBTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBUaGUgY29kZSB0aGF0IGRlZmluZXMgeW91ciBzdGFjayBnb2VzIGhlcmVcblxuICAgIC8vIEhlcmUgd2Ugd2lsbCBjcmVhdGUgY29uc3RydWN0IGZvciBhcHBzeW5jIHRvIGRlZmluZSB0aGUgc2NoZW1hXG4gICAgY29uc3QgYXBpID0gbmV3IGFwcHN5bmMuR3JhcGhxbEFwaSh0aGlzICwgXCJDcnVkQVBJXCIgLCB7XG4gICAgICBuYW1lIDogXCJjZGstVG9kb0NSVUQtQXBpXCIsXG4gICAgICBzY2hlbWEgOiBhcHBzeW5jLlNjaGVtYS5mcm9tQXNzZXQoXCJncmFwaHFsL3NjaGVtYS5ncWxcIiksXG4gICAgICB4cmF5RW5hYmxlZCA6IHRydWUsXG4gICAgICBhdXRob3JpemF0aW9uQ29uZmlnIDoge1xuICAgICAgICBkZWZhdWx0QXV0aG9yaXphdGlvbiA6IHtcbiAgICAgICAgICBhdXRob3JpemF0aW9uVHlwZSA6IGFwcHN5bmMuQXV0aG9yaXphdGlvblR5cGUuQVBJX0tFWSxcbiAgICAgICAgICBhcGlLZXlDb25maWcgOiB7XG4gICAgICAgICAgICBleHBpcmVzIDogY2RrLkV4cGlyYXRpb24uYWZ0ZXIoY2RrLkR1cmF0aW9uLmRheXMoMzY1KSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICBcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGhlcmUgd2Ugd2lsbCBjcmVhdGUgY29uc3RydWN0IGZvciBsYW1iZGEgZnVuY3Rpb25cbiAgICBjb25zdCBsYW1iZGFGbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcyAsIFwibXlMYW1iZGFGdW5jdGlvblwiICwge1xuICAgICAgcnVudGltZSA6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuICAgICAgY29kZSA6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChcImxhbWJkYVwiKSxcbiAgICAgIGhhbmRsZXIgOiBcIm1haW4uaGFuZGxlclwiXG4gICAgfSlcblxuICAgIC8vIGhlcmUgd2Ugd2lsbCBkZWZpbmUgb3VyIGRhdGEgc291cmNlIHdoaWNoIHdpbGwgYmUgb3VyIGxhbWJkYSBmdW5jdGlvblxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBhcGkuYWRkTGFtYmRhRGF0YVNvdXJjZShcImxhbWJkYURhdGFTb3VyY2VcIiAsIGxhbWJkYUZuICApO1xuXG4gICAgLy8gaGVyZSB3ZSB3aWxsIGNyZWF0ZSByZXNvbHZlciBmb3IgZWFjaCBxdWVyeSBkZWZpbmVkIGluIHRoZSBzY2hlbWFcbiAgICBkYXRhU291cmNlLmNyZWF0ZVJlc29sdmVyKHtcbiAgICAgIHR5cGVOYW1lIDogXCJNdXRhdGlvblwiLFxuICAgICAgZmllbGROYW1lIDogXCJhZGRUb2RvXCJcbiAgICB9KTtcblxuICAgIGRhdGFTb3VyY2UuY3JlYXRlUmVzb2x2ZXIoe1xuICAgICAgdHlwZU5hbWUgOiBcIlF1ZXJ5XCIsXG4gICAgICBmaWVsZE5hbWUgOiBcImdldFRvZG9zXCJcbiAgICB9KTtcblxuICAgIGRhdGFTb3VyY2UuY3JlYXRlUmVzb2x2ZXIoe1xuICAgICAgdHlwZU5hbWUgOiBcIk11dGF0aW9uXCIsXG4gICAgICBmaWVsZE5hbWUgOiBcImRlbGV0ZVRvZG9cIlxuICAgIH0pO1xuXG4gICAgZGF0YVNvdXJjZS5jcmVhdGVSZXNvbHZlcih7XG4gICAgICB0eXBlTmFtZSA6IFwiTXV0YXRpb25cIixcbiAgICAgIGZpZWxkTmFtZSA6IFwidXBkYXRlVG9kb1wiXG4gICAgfSk7XG5cblxuXG5cblxuICAgIC8vIGhlcmUgd2Ugd2lsbCBjcmVhdGUgdGhlIHRhYmxlIGluIG91ciBkeW5hbW9kYlxuXG4gICAgY29uc3QgZHluYW1vdGFibGUgPSBuZXcgZGRiLlRhYmxlKHRoaXMgLCBcIkNSVURfVGFibGVcIiAsIHtcbiAgICAgIHRhYmxlTmFtZSA6IFwiQ3J1ZC1BcHAtVG9kb1wiLFxuICAgICAgcGFydGl0aW9uS2V5ICA6e1xuICAgICAgICBuYW1lIDogXCJpZFwiLFxuICAgICAgICB0eXBlIDogZGRiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HXG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIGdyYW50aW5nIGFjY2VzcyB0byBsYW1iZGEgZnVuY3Rpb24gdG8gb3VyIGR5bmFtb2RiXG4gICAgZHluYW1vdGFibGUuZ3JhbnRGdWxsQWNjZXNzKGxhbWJkYUZuKVxuXG4gICAgLy8gY3JlYXRpbmcgZW52IHZhcmlhYmxlc1xuICAgIGxhbWJkYUZuLmFkZEVudmlyb25tZW50KFwiVG9kb3NfVGFibGVcIiAsIGR5bmFtb3RhYmxlLnRhYmxlTmFtZSApO1xuXG4gIFxuICB9XG59XG4iXX0=