var Ractive = require('ractive')
var EventEmitter = require('events').EventEmitter
var style = require('dom-style')

Ractive.events.changescreen

module.exports = function Menu(originalCurrent, originalList) {
	var emitter = Object.create(new EventEmitter())

	function showOnlyThisScreen(whatScreen) {
		originalList.map(function(obj) {
			return obj.identifier
		}).forEach(function(id) {
			var visible = id === whatScreen
			var display = visible ? 'inline' : 'none'
			style(document.getElementById(id), 'display', display)
		})

		ractiveMenuList.set('current', whatScreen)
		emitter.emit('change', whatScreen)
	}

	var ractiveMenuList = new Ractive({
		el: 'menu-list',
		template: '#ractive-menu-list',
		data: {
			list: originalList,
			current: originalCurrent
		}
	})

	ractiveMenuList.on('menuItemClicked', function(node) {
		var current = node.context.identifier

		if (current !== ractiveMenuList.get('current')) {
			showOnlyThisScreen(current)
		}
	})

	showOnlyThisScreen(originalCurrent)

	return emitter
}

