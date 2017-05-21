const express = require ('express')
const bodyParser = require('body-parse')
const request = require('request')

const APP_TOKEN = 'EAAZADZAmPR0vQBABm5OuPJgG5vcB1Ua8a5YTsfJ9S44FSRRcmowV9V2xpduE9OLBX1WPc1G6ZAZAhxjaZAXeyYEjAuOipRxXjjkARQdFn3UnOjgJXYuBhuOTqd1E1SufrrU4f4p3UQslFkHch5ijXofVqEZCxgc9ZBYvOnnqZBZAV6QZDZD'

var app = express()

app.user(bodyParser.json())

app.listen(3000, function(){
	consoles.log('Server listen on localhost:3000')
})