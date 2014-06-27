var config = require('./config-screen.js')

var jobHistory = {}

var jobNames = config.getListOfJobs().forEach(function(jobName) {
	jobHistory[jobName] = []
})

//function addToHistory(jobName, name, )
