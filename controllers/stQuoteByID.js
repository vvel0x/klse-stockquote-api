const axios = require('axios')
const cheerio = require('cheerio')

async function getStockQuote(stockNumber) {
    const URI = 'https://klse.i3investor.com/servlets/stk/' + stockNumber + '.jsp'
    const response = await axios.get(URI)

    const $ = cheerio.load(response.data)
    const stockPrice  = $('table#stockhdr > tbody > tr:last-child > td:first-child').text().trim()
    const stockName   = $('#content > table:nth-child(2) > tbody > tr > td:nth-child(1) > div.margint10 > table:nth-child(2) > tbody > tr > td:nth-child(1) > span').text().trim()
    const companyName = $("#content > table:nth-child(2) > tbody > tr > td:nth-child(1) > div.margint10 > table:nth-child(2) > tbody > tr > td:nth-child(3) > span").text().trim()
    const dailyChange = $("#stockhdr > tbody > tr:nth-child(2) > td:nth-child(2) > span").text().trim().split(" ")

    const dateRetrieved = new Date

    const output = {
        dateRetrieved: dateRetrieved.toISOString(),
        companyName: companyName,
        name: stockName.split(':')[1].trim().split(' ')[0],
        ticker: stockName.split(':')[1].trim().split(' ')[1].slice(1, - 1),
        stockPrice: stockPrice,
        change: {
            amount: dailyChange[0],
            percentage: dailyChange[0].charAt(0) + dailyChange[1].slice(1, -1)
        }
    }

    return output
}

module.exports = async (stID) => {
    const quote = await getStockQuote(stID)
    return quote
}