var bboysTodo = angular.module('bboysTodo', []);

function mainController($scope, $http) {
  $scope.formData = {};

  $http.get('/api/todos')
    .success(function(data){
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    })

  $scope.createTodo = function() {
    $http.post('/api/todos', $scope.formData)
      .success(function(data) {
        $scope.formData = {};
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deleteTodo = function(id) {
    $http.delete('/api/todos/' + id)
      .sucess(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}
