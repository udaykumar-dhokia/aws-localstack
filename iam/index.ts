import { CreateUserCommand, ListUsersCommand } from "@aws-sdk/client-iam";
import { iamClient } from "../awsClient.ts";

async function listUsers() {
  try {
    const data = await iamClient.send(new ListUsersCommand({}));
    console.log("Users:");
    data.Users!.forEach((u) => console.log(` - ${u.UserName}`));
  } catch (err) {
    console.error("Error listing users:", err);
  }
}

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

listUsers();
// createUser("test-user");
