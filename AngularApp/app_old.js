var app = angular.module('kallangoNews',[]);

app.controller('MainCtrl',[
'$scope','orderByFilter',
function($scope, orderBy){
  $scope.test = 'Hello World!';
  $scope.status = '';

  $scope.posts = [
    {title: 'Google', link: 'http://www.google.com', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4',upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];  
  
  $scope.propertyName = 'upvotes';
  $scope.reverse = true;  
  $scope.bestposts = orderBy($scope.posts,$scope.propertyName,$scope.reverse);  

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === ''){ $scope.status = "Warning: It's not possible to insert an empty title."; return; }
    $scope.posts.push({
      title: $scope.title, 
      link: $scope.link,
      upvotes: 0});
    $scope.status = '';
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes++;
  }

  $scope.reload = function(){
    $scope.bestposts = orderBy($scope.posts,$scope.propertyName,$scope.reverse);     
  }

}])

