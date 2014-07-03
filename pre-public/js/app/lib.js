/*
 * Lib
 */
define(['jquery'], function ($) {
	console.log('lib called');
    return {
        getBody: function () {
            return $('body');
        }
    }
});
