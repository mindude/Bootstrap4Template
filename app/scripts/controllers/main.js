'use strict';

/**
 * @ngdoc function
 * @name testSrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testSrApp
 */
angular.module('testSrApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.verify = function(){

      var error = false;
      console.log('Verifying values...');
      if($scope.firstName === "" || $scope.lastName === undefined) {
        console.log('Your first name can\'t be empty');
        error = true;
      }
      if($scope.lastName === "" || $scope.lastName === undefined) {
        console.log('Your last name can\'t be empty');
        error = true;
      }

      if($scope.email === "" || $scope.email === undefined){
        console.log('Your email can\'t be empty');
        error = true;
      }
      else{
        var verifyEmail = $scope.email.split('@');
        if(verifyEmail.length !== 2 ){
          console.log('Your email is incorrect, please verify.');
          error = true;
        }
      }
     if(error === false) console.log('Your data has been registered correctly!');


    }

  });
