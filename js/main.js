/**
 * Gallery
 * @author Victor Duarte G'z
 */

;(function (GW, $) {
	'use strict';
	GW = GW || {};

	// Set DATA
	GW.core.Services.getData(processData);

	/**
	 * Set DATA in the namespace for global access
	 */
	function processData(data) {
		$('#main-header .title').text(data.album.name);
		GW.talks = data.photos;
		// Publish event:
		$.event.trigger('data:loaded', data);
	}


}(window.GW || {}, (window.jQuery || {})));