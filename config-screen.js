var Ractive = require('ractive')

var configRactive = new Ractive({
	el: '#config',
	data: {
		workers: "",
		jobs: ""
	},
	template: '#ractive-config'
})

function getListOfWorkers() {
	return configRactive.get('workers').split('\n').map(function(name) {
		return {
			name: name,
			personId: name
		}
	})
}

function getListOfJobs() {
	return configRactive.get('jobs').split('\n')
}

module.exports = {
	getListOfWorkers: getListOfWorkers,
	getListOfJobs: getListOfJobs
}

