(function(){
	'use strict';
	angular
	.module('friendsApp')
	.service('ImageService', ImageService);

	function ImageService($http){
		url: 'aqui va el link de su cuenta de cloudinary',
		data: {
			upload_preset: 'aqui va el preset del cloudinary',
			tags:'Any',
        	context:'photo=test'
		}
	};

	var publicAPI = {
      getConfiguration : _getConfiguration
    };
    return publicAPI;

    function _getConfiguration(){
      return cloudObj;
    }
})();