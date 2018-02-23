var app = new angular.module("MoveLogApp", []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'https://codecademy2341928-8000.ccterminalcloud.com/img/pushup.jpg',
      name: 'Pushups',
      count: 20
    },
    {
      icon: 'https://codecademy2341928-8000.ccterminalcloud.com/img/squat.jpg',
      name: 'Squats',
      count: 15
    },
    {
      icon: 'https://codecademy2341928-8000.ccterminalcloud.com/img/pullup.jpg',
      name: 'Pullups',
      count: 10
    },
    {
      icon: 'https://codecademy2341928-8000.ccterminalcloud.com/img/row.jpg',
      name: 'Rows',
      count: 10
    },
    {
      icon: 'https://codecademy2341928-8000.ccterminalcloud.com/img/lunge.jpg',
      name: 'Lunges',
      count: 10
    },
    {
      icon: 'https://codecademy2341928-8000.ccterminalcloud.com/img/stepup.jpg',
      name: 'Step Ups',
      count: 10
    },
    {
      icon: 'https://codecademy2341928-8000.ccterminalcloud.com/img/situp.jpg',
      name: 'Sit Ups',
      count: 15
    }
  ];

  $scope.increase = function(index){
  	$scope.exercises[index].count +=1;
  }
  
  $scope.decrease = function(index){
  	$scope.exercises[index].count -=1;
  }
}]);