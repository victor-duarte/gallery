/**
 * Gallery / Service Manager
 * @author Victor Duarte G'z
 */

;(function (GW, $) {
	'use strict';
	/**
	 * @namespace Core package
	 */
	GW.core = GW.core || {};

	/**
	 * Services Proxy
	 * @return {Object.<Function>} Public methods
	 */
	GW.core.Services = (function () {

		var DataType = {
			JSON: 'json'
		},
		Services = {
			DATA: "json/gallery.json"
		},
		RequestType = {
			POST : "POST"
		};

		/**
		 * Makes an AJAX request
		 * @param  {String} url       Request URL
		 */
		function call(url, fnSuccess, fnError) {
			$.ajax({
				url: "json/gallery.json",
				dataType: DataType.JSON,
				type: RequestType.POST,
				success: function (data, textStatus, jqXHR) {
					if (typeof fnSuccess === 'function') {
						fnSuccess(data);
					} else {
						_successHandler(data, textStatus, jqXHR);
					}
				},
				error: (typeof fnError === 'function') ? fnError : _errorHandler,
				complete: function(jqXHR, textStatus) {  }
			});
		}

		/**
		 * Default AJAX Success handler
		 * @private
		 */
		function _successHandler(data, textStatus, jqXHR){
			console.log('DEFAULT SUCCESS:', data);
		}

		/**
		 * Default AJAX error handler
		 * @private
		 */
		function _errorHandler(jqXHR, textStatus, errorThrow){
			console.log('ERROR:', jqXHR, textStatus, errorThrow);
		}

		/**
		 * Load data
		 * @param  {Function} fnSuccess Success callback function
		 */
		function getData(fnSuccess) {
			return call(Services.DATA, fnSuccess);
		}

		return {
			getData: getData
		}
	}());

}(window.GW || {}, (window.jQuery || {})));