const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AWEJnAH5OTHkzOXseIqCbKzsX8XdCGXXFeACF6tKf7G1YXm3pFMPKIw48XDmWghmnZFz4sipBGj-9BMT",
  client_secret: "EOxwGXLvchIBCz7OQjgL-Ody3zFhFvaQw6ynXj9FfeuUwvJSalT8HbQxGOGl5Yn3Wh3IcIF4FDkV0UPp",
});

module.exports = paypal;