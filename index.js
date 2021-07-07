const server = require('./data/server.js');
const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
    console.log(`\n** Server is running on http://localhost:${PORT}... **\n`)
})