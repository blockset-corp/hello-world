require('dotenv').config()

const express = require('express')
const request = require('request')
const app = express()
const port = 3000

// can't talk to Blockset API without a JWT!
if (!process.env.BLOCKSET_API_USER_JWT) {
  throw new Error('create a .env file and set the BLOCKSET_API_USER_JWT environment variable')
}

app.get('/the-pizza-tx', (_, res) => {
  
  // build the Blockset API URL
  const baseUrl = 'https://api.blockset.com'
  const transactionsPath = 'transactions'
  const transaction = 'bitcoin-mainnet:a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d'
  const url = `${baseUrl}/${transactionsPath}/${transaction}`

  // set the JWT bearer token, and specify JSON data type
  const options = {
    json: true,
    headers: {
      authorization: `Bearer ${process.env.BLOCKSET_API_USER_JWT}`
    }
  }

  // make the request to Blockset API
  request(url, options, (error, blocksetResponse, blocksetBody) => {
    
    // if the network request failed, respond with an error
    if (error) {
      return res.status(500).json(error)
    }

    // respond back with the Blockset API status code and body
    return res.status(blocksetResponse.statusCode).json(blocksetBody)
  })
})

app.listen(port, () => {
  console.log(`Blockset API Hello World listening at http://localhost:${port}`)
  console.log(`Navigate to http://localhost:${port}/the-pizza-tx to see the`)
  console.log('  infamous Bitcoin Pizza Transaction (https://bitcoinpizzaindex.net/)')
  console.log('🚀 Powered by Blockset API! 🚀')
})
