var Ractive = require('ractive')
var EventEmitter = require('events').EventEmitter

Ractive.events.changescreen

module.exports = function Menu(originalCurrent, originalList) {
	var emitter = Object.create(new EventEmitter())

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
			ractiveMenuList.set('current', current)
			emitter.emit('change', current)
		}
	})

	return emitter
}

