
const { PutCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");

const dynamodb = require("../../config/dynamodb");

const TABLE_NAME = process.env.PARKING_REQUESTS_TABLE;

// Save a new parking request
async function createRequest(request) {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: request,
    ConditionExpression: "attribute_not_exists(request_id)"
  });

  await dynamodb.send(command);

  return request;
}

// Get a parking request using its ID
async function getRequestById(requestId) {
  const command = new GetCommand({
    TableName: TABLE_NAME,
    Key: {
      request_id: requestId
    },
    ConsistentRead: true
  });

  const result = await dynamodb.send(command);

  return result.Item || null;
}

module.exports = {
  createRequest,
  getRequestById
};
