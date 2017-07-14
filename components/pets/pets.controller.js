(function(){
	'use strcit'
	angular
	.module('friendsApp')
	.controller('petsController', petsController);

	petsController.$inject = ['$q','petsService']

	function petsController($q,petsService){
		console.log();
	}
})();