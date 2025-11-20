import {
  CreateUserCommand,
  ListUsersCommand,
  DeleteUserCommand,
} from "@aws-sdk/client-iam";
import { iamClient } from "../awsClient.ts";

// List all the active users
async function listUsers() {
  try {
    const data = await iamClient.send(new ListUsersCommand({}));
    console.log("Users:");
    data.Users!.forEach((u) => console.log(` - ${u.UserName}`));
  } catch (err) {
    console.error("Error listing users:", err);
  }
}

// Create new user
async function createUser(userName: string) {
  try {
    const command = new CreateUserCommand({
      UserName: userName,
    });

    const response = await iamClient.send(command);
    console.log("User created:", response.User);
  } catch (err) {
    console.error("Error creating user:", err);
  }
}

// Delete the active user
async function deleteUser(userName: string) {
  try {
    const command = new DeleteUserCommand({
      UserName: userName,
    });

    const response = await iamClient.send(command);
    console.log("User deleted: ", response.$metadata.cfId);
  } catch (err) {
    console.log("Error deleting user: ", err);
  }
}

listUsers();
// createUser("test-user");
// deleteUser("test-user");
