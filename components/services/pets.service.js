(function(){
	'use strcit';
	angular
	.module('friendsApp')
	.service('petsService', petsService);

	function petsService(){
		console.log('hola');
	}
})();