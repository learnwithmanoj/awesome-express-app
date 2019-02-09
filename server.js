var app = require('./app');

var server = app.listen(process.env.PORT || 3000, () => {
    let port = server.address().port;
    console.log(`Server listening on port ${port}`)
});