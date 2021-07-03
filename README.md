# Chatfuel Time API

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/eric-mathison/chatfuel-time-api/Node.js%20CI?style=for-the-badge)

An api for chatfuel bots that returns the current time as variables for a given timezone

## Setting up the API Server

Use the Github CLI to clone this repository.

```
gh repo clone eric-mathison/chatfuel-time-api
```

Install dependencies

```
npm install
```

Next, you'll need to build it

```
npm run prepublish
```

Finally, start the server

```
npm start
```

## Using the API

Make a `GET` request.

```
/chatfuel/?ctTimezone=America/Chicago
```

The {timezone} needs to be in IANA Timezone Name format which can be found here:
https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

The request will return parsed date formats that are usable in the chatbot.

### Chatfuel

In Chatfuel, attributes will automatically be added to your bot.

-   ctFullDate - returns a full date (Jan 25, 2020)
-   ctMonth - returns month number (1 - 12)
-   ctDay - returns day number (1 - 31)
-   ctYear - returns full year (2020)
-   ctHour - returns hour number in 24hour format (0 - 23)
-   ctMinute - returns minute number (00 - 59)
-   ctWeekDay - returns week day number (0 - 6)

_For ctWeekDay, 0 is for Sunday and 6 is for Saturday._
