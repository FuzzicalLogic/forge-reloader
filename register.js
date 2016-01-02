(function registerElement() {

	Polymer({
		is: 'forge-reloader',

		created: onElementCreated,
		attached: onElementAttached,
		ready: onElementReady,
		detached: onElementDetached,

		properties: {
		},

		listeners: {
			'reload-window': onReloadWindow
		}
	});

	function onElementCreated() {

	}

	function onElementAttached() {

	}

	function onElementReady() {

	}

	function onElementDetached() {

	}

	function onReloadWindow(event) {
		console.log('Reload Requested');
	}

}) ();
