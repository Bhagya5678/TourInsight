
const TeleSignSDK = require('telesignsdk');

    const customerId = "6BB5BD89-D1DB-42AB-8100-F09771877222";
    const apiKey = "ubQ5cLnymg8x57lfbJpIvCc7COIzJWH9b34l2sPaJZAFdS8y39bhrWXNsGHkvYJ4iBL8vlcPtDHlvEizg4ZdMw==";

    const phoneNumber = "919004484772";

    const message = `John Doe is sending you an SOS message. Check up on them ASAP`;
    const messageType = "ARN";

    // Instantiate a messaging client object.
    const client = new TeleSignSDK( customerId, apiKey);

    // Define the callback.
    function smsCallback(error, responseBody) {
    // Display the response body in the console for debugging purposes. 
    // In your production code, you would likely remove this.
    if (error === null) {
        console.log("Response body:" + JSON.stringify(responseBody));
        return JSON.stringify(responseBody);
    } else {
        console.error("Unable to send SMS. Error:" + error);
    }
    }

    // Make the request and capture the response.
    client.sms.message(smsCallback, phoneNumber, message, messageType);
