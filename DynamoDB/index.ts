import { GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddb } from "../awsClient.ts";
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";

// Create new table
async function createTable(name: string) {
  const params = {
    TableName: name,
    AttributeDefinitions: [{ AttributeName: "userId", AttributeType: "S" }],
    KeySchema: [{ AttributeName: "userId", KeyType: "HASH" }],
    BillingMode: "PAY_PER_REQUEST",
  };

  try {
    const command = new CreateTableCommand(params);
    const response = await ddb.send(command);
    console.log("Table created: ", response.TableDescription?.CreationDateTime);
  } catch (err) {
    console.log("Error creating table: ", err);
  }
}

// Insert the data item into the ddb
async function insertItem(name: string, payload: any) {
  const params = {
    TableName: name,
    Item: payload,
  };

  try {
    await ddb.send(new PutCommand(params));
    console.log("Inserted successfully");
  } catch (err) {
    console.log("Error inserting item: ", err);
  }
}

// Fetch the data item from ddb
async function fetchItem(name: string, id: string) {
  const params = {
    TableName: name,
    Key: { userId: id },
  };
  try {
    const result = await ddb.send(new GetCommand(params));
    console.log(result.Item);
  } catch (err) {
    console.log("Error fetching the data: ", err);
  }
}

// createTable("users");
// insertItem("users", {
//   userId: "13o3fb23jobf309",
//   name: "Udaykumar Dhokia",
//   email: "xyz@example.com",
// });
fetchItem("users", "13o3fb23jobf309");
