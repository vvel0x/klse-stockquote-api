# KLSE Stock Quote API
This is a simple program to scrape the data for a given stock symbol or number and return some basic values. Applications include tracking your portfolio in excel or interfacing with a trading bot.

## Endpoints
Stock quotes can be retrieved either by the tickers symbol or number.

__eg.: Quote for Maybank__
Using ticker symbol ```/s/[symbol]```
```
GET http://localhost:3000/s/maybank
```
or using the ticker's number, ```/id/[number]```
```
GET http://localhost:3000/id/1155
```

Yields
```json
{
    "dateRetrieved": "2020-08-26T12:32:11.759Z",
    "companyName": "MALAYAN BANKING BHD",
    "name": "MAYBANK",
    "ticker": "1155",
    "stockPrice": "7.46",
    "change": {
        "amount": "-0.03",
        "percentage": "-0.40%"
    }
}
```


## 🚀 Running locally
This program only requires NodeJS and NPM to be installed. A local instance can then be run with the following commands
```bash
yarn
yarn start
```

### 📝 Notes
* The stock data is scraped from i3investor.com and is intended for personal use only. I do not own the data and am not responsible for how you use the program.
* The price quoted is not realtime and is usually delayed by 15 minutes.