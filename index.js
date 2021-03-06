var Menu = require('./ractive-menu.js')
var configScreen = require('./config-screen.js')

var menu = new Menu('schedule', [
	{ identifier: 'schedule', display: "Main"},
	{ identifier: 'config', display: "Configuration" },
	{ identifier: 'export', display: "Export" }
])

// var Sorter = require('schedulator-sorter')
// var Ractive = require('ractive')

// var history = []

// new Ractive({
// 	el: '#history',
// 	data: {
// 		history: history
// 	},
// 	template: '<ol>{{#history}}'
// 			+ '<li>{{a.name}} worked {{a.job}} and {{b.name}} worked {{b.job}}</li>'
// 		+ '{{/history}}</ol>'
// })

// function getListOfWorkers() {
// 	return listOfWorkersTextBox.get('bigTextBlock').split('\n').map(function(name) {
// 		return {
// 			name: name,
// 			personId: name
// 		}
// 	})
// }

// Things that happened:
// {
// 	personId: 5,
// 	time: 1,
// 	job: 'a'
// }

// Schedules look like this:
// {
// 	a: {
// 		name: 'wat',
// 		personId: 3
// 	}
// }

// function figureOutNextSchedule() {
// 	var sorter = new Sorter()
// 	history.forEach(function(oneWeeksJobs) {
// 		sorter.priorWork(oneWeeksJobs.a)
// 		sorter.priorWork(oneWeeksJobs.b)
// 	})
// 	var nextWeek = sorter.getNextSchedule(['a', 'b'], getListOfWorkers())
// 	history.push(nextWeek)
// }

// window.figureOutNextSchedule = figureOutNextSchedule
// window.getListOfWorkers = getListOfWorkers
