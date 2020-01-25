# Current Time API for Chatfuel and Manychat

A Simple API to get the current time given a timezone and return parsed time formats to the chatbot.

## Usage

Make a `GET` request with one of the following URL formats.

If using Chatfuel:

```
https://em-current-time.herokuapp.com/chatfuel/?ctTimezone=America/Chicago
```

If using Manychat:

```
Under Development
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

### Manychat

Under Development
