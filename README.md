<p align="center">
  <img src="https://cdn.prod.website-files.com/6539036f80ddc9e9a467134e/681e4d77a183f92570e14555_localstack-logo.svg" height="90" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" height="90" />
    &nbsp;&nbsp;&nbsp;
  <img src="https://images.ctfassets.net/o7xu9whrs0u9/4sYuVlC3grWV9xqiALyYr2/a52875856c016db3eb86c1d8adced886/Docker.logo2_.png" height="90" />
</p>

# Self-host AWS with LocalStack

A hands-on learning environment for understanding AWS Cloud services **without needing a real AWS account**. This repository simulates AWS using **LocalStack**, making it ideal for beginners, students, and developers who want to master AWS fundamentals locally.

---

![Image](https://drive.google.com/uc?export=view&id=1AuGIs2k2VbQR7GFvVOI8tU8FzTXC-h5R)

---

## What This Repository Teaches You

This project is designed as a practical learning resource for AWS. By using LocalStack, you can learn how AWS works internally _without incurring costs_.

You will learn:

- How IAM users/roles/policies work
- How S3 buckets handle storage, uploads, versioning, and permissions
- How AWS SDK clients interact with services
- How to structure cloud-based applications
- How to test AWS services locally before deploying to real AWS

This repo is like your **mini AWS sandbox**, totally offline.

---

## Project Structure

```
├── iam/                # IAM learning examples
│   └── index.ts        # Create users, roles, policies
├── s3/                 # S3 learning examples
│   └── index.ts        # Bucket operations, uploads, list, delete
├── awsClient.ts        # AWS SDK client configured for LocalStack
├── docker-compose.yml  # LocalStack setup
├── .env                # Environment variables
├── volume/             # LocalStack persistent data
├── package.json        # Node.js config
└── README.md
```

---

## Why This Repo Exists

Most AWS tutorials jump directly into using real AWS accounts—and beginners get confused or scared to experiment due to cost.

This repository solves that by providing:

- A **safe, free AWS practice environment**
- Real AWS-like responses via LocalStack
- Modular examples so you can learn one service at a time
- Clean, beginner-friendly TypeScript code

Perfect for:

- Students
- DevOps learners
- Backend developers
- Cloud beginners
- Anyone preparing for AWS certifications

---

## Tech Used

- **TypeScript + Node.js**
- **AWS SDK v3**
- **LocalStack with Docker**
- **Docker Compose**

---

## Setup Instructions

### Install dependencies

```sh
npm install
```

### Configure environment

Create `.env` file:

```
AWS_ACCESS_KEY_ID=test
AWS_SECRET_ACCESS_KEY=test
AWS_REGION=us-east-1
LOCALSTACK_ENDPOINT=http://localhost:4566
```

### Start LocalStack

```sh
docker-compose up --build
```

---

## Running Examples

### TypeScript build

```sh
npm run build
```

### Run learning modules

iam example:

```sh
npx ts-node iam/index.ts
```

---

## Learning Modules Provided

### **IAM Module** (`/iam/index.ts`)

Learn how IAM works locally:

- Create users
- List users

### **S3 Module** (`/s3/index.ts`)

Practice S3 operations:

- Create bucket
- Upload files
- List objects
- Delete objects
- Learn bucket naming rules
- Understand access permissions

### AWS Client Wrapper (`awsClient.ts`)

Shows how to configure AWS SDK v3 to:

- Connect to LocalStack
- Override endpoints
- Use shared credentials

---

## LocalStack + Docker

Start LocalStack:

```sh
docker-compose up -d
```

Stop LocalStack:

```sh
docker-compose down
```

To reset everything:

```sh
rm -rf volume/
```

---

## Recommended Learning Path

1. **Start LocalStack**
2. Learn S3 basics (create bucket → upload → list → delete)
3. Learn IAM basics (users → roles → policies)
4. Connect AWS CLI to LocalStack
5. Expand examples (SNS, SQS, Lambda) when ready

This repo grows with you—simply add more service folders.

---

## Using AWS CLI With LocalStack

Example:

```sh
aws --endpoint-url=http://localhost:4566 s3 ls
```

Try creating buckets, listing IAM users, etc.

---

## Contributing

Got an idea for a module? Add it!
This repo aims to become a **complete AWS learning playground**.

## References

Official documentation and learning resources used in this project:

- **LocalStack – Installation Guide**  
  https://docs.localstack.cloud/aws/getting-started/installation/

- **LocalStack – Quickstart Guide**  
  https://docs.localstack.cloud/aws/getting-started/quickstart/

- **AWS SDK for JavaScript (v3) – Getting Started**  
  https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html
