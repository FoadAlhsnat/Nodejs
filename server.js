const http = require("http");
const port = 8001;

const users = [
  {
    name: 'foad',
  },
  {

    name: 'osama'
  }
]
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/sayhello') {
      res.write('hello')
      res.end()
    }
    else if (req.url === '/users') {
      res.write(JSON.stringify(users))
      res.end()
    }
  }
})



server.listen(port, () => {
  console.log('server run at 8001');
})