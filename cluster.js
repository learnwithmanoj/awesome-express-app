let cluster = require('cluster');

if(cluster.isMaster) {
    /*Count the Number of CPU's*/
    let cpuCount = require('os').cpus().length;

    /*Create a worker for each CPU*/
    for(let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    /*Recreate the dying worker*/
    cluster.on('exit', () => {
        cluster.fork();
    });
} else {
    require('./server');
}