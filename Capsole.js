const http = require("http");
const url = require('url');
const data = require('./users.json');
const port = 8001;
console.log(data);
const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  if (req.method === 'GET') {
    if (req.url.includes('id')) {
      let user = data.users.find(ele => ele.id == q.id)
      res.write(JSON.stringify(user))
    }
    else if (req.url.includes('cap')) {
      let user = data.users.filter(ele => ele.capsule == q.cap)
      res.write(JSON.stringify(user))
    }
  }
  res.end()
})


server.listen(port, () => {
  console.log('server run at 8001');
})