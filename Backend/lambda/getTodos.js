"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const docClient = new aws_sdk_1.DynamoDB.DocumentClient();
const getTodos = async () => {
    const params = {
        TableName: process.env.Todos_Table || ""
    };
    try {
        const data = await docClient.scan(params).promise();
        return data.Items;
    }
    catch (err) {
        return null;
    }
};
exports.default = getTodos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VG9kb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRUb2Rvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFtQztBQUNuQyxNQUFNLFNBQVMsR0FBRyxJQUFJLGtCQUFRLENBQUMsY0FBYyxFQUFFLENBQUE7QUFNL0MsTUFBTSxRQUFRLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFFeEIsTUFBTSxNQUFNLEdBQVc7UUFDbkIsU0FBUyxFQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEVBQUU7S0FDNUMsQ0FBQTtJQUVELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0tBQ3BCO0lBRUQsT0FBTSxHQUFHLEVBQUM7UUFDTixPQUFPLElBQUksQ0FBQTtLQUNkO0FBRUwsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsUUFBUSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREIgfSBmcm9tIFwiYXdzLXNka1wiO1xuY29uc3QgZG9jQ2xpZW50ID0gbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KClcblxudHlwZSBQYXJhbXMgPSAge1xuICAgIFRhYmxlTmFtZSA6IHN0cmluZyB8IFwiXCJcbn1cblxuY29uc3QgZ2V0VG9kb3MgPSBhc3luYyAoKSA9PiB7XG5cbiAgICBjb25zdCBwYXJhbXM6UGFyYW1zID0gIHtcbiAgICAgICAgVGFibGVOYW1lIDogcHJvY2Vzcy5lbnYuVG9kb3NfVGFibGUgfHwgXCJcIlxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkb2NDbGllbnQuc2NhbihwYXJhbXMpLnByb21pc2UoKVxuICAgICAgICByZXR1cm4gZGF0YS5JdGVtc1xuICAgIH1cblxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRvZG9zXG4iXX0=