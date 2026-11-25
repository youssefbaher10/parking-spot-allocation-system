
require("dotenv").config();

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

// Configure the connection to DynamoDB
const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  endpoint: process.env.DYNAMODB_ENDPOINT
});

// Make it easier to read and write JavaScript objects
const dynamodb = DynamoDBDocumentClient.from(client);

module.exports = dynamodb;
