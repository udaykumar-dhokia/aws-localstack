import {
  ListBucketsCommand,
  PutObjectCommand,
  CreateBucketCommand,
  DeleteBucketCommand,
  paginateListObjectsV2,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import * as fs from "fs";
import { s3Client } from "../awsClient";

// List all buckets
async function listLocalBuckets() {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Success, existing buckets:", data.Buckets);
    return;
  } catch (err) {
    console.error("Error listing buckets:", err);
  }
}

// Upload an object (requires a local bucket named 'my-local-bucket' to exist)
async function uploadLocalObject(
  bucketName: string,
  key: string,
  filePath: string
) {
  try {
    const fileStream = fs.createReadStream(filePath);

    const uploadParams = {
      Bucket: bucketName,
      Key: key,
      Body: fileStream,
    };

    const command = new PutObjectCommand(uploadParams);
    const data = await s3Client.send(command);
    console.log("Upload Success:", data.ETag);
    return;
  } catch (err) {
    console.error("Error uploading object:", err);
  }
}

// Create new bucket
async function createLocalBucket(bucketName: string) {
  try {
    const command = new CreateBucketCommand({
      Bucket: bucketName,
    });
    const data = await s3Client.send(command);
    console.log("Created successfully:", data.Location);
    return;
  } catch (err) {
    console.log("Error creating the bucket: ", err);
  }
}

// Delete the existing bucket
async function deleteLocalBucket(bucketName: string) {
  try {
    const paginator = paginateListObjectsV2(
      { client: s3Client },
      { Bucket: bucketName }
    );

    for await (const page of paginator) {
      const objects = page.Contents;
      if (objects) {
        for (const object of objects) {
          await s3Client.send(
            new DeleteObjectCommand({ Bucket: bucketName, Key: object.Key })
          );
        }
      }
    }

    await s3Client.send(new DeleteBucketCommand({ Bucket: bucketName }));
    console.log("Bucket deleted successfully");
    return;
  } catch (err) {
    console.log("Error deleting the bucket: ", err);
  }
}

// createLocalBucket("test-bucket2");
listLocalBuckets();
// uploadLocalObject("test-bucket", "package.json", "./package.json");
// deleteLocalBucket("test-bucket");
