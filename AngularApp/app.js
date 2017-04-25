var app = angular.module('kallangoNews',[]);

app.service('myPosts', function(){
  var posts = [
    {title: 'Google', link: 'http://www.google.com', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4',upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];     

  this.getPosts = function(){
    return posts;
  } 
  
  this.addPost = function(title, link){
    posts.push({
      title: title,
      link: link,
      upvotes: 0
    });
  }  
});

app.controller('MainCtrl',[
'$scope','orderByFilter', 'myPosts',
function($scope, orderBy, myPosts){
  
  $scope.test = 'Hello World!';
  $scope.status = '';

  $scope.posts = myPosts.getPosts();  
  
  $scope.propertyName = 'upvotes';
  $scope.reverse = true;  
  $scope.bestposts = orderBy($scope.posts,$scope.propertyName,$scope.reverse);  

  $scope.insertPost = function(){
    if(!$scope.title || $scope.title === ''){ 
      $scope.status = "Warning: It's not possible to insert an empty title."; 
      return;
    }
    myPosts.addPost($scope.title, $scope.link);
    $scope.status = '';
    $scope.title = '';
    $scope.link = '';
  }
  
  $scope.incrementUpvotes = function(post){
    post.upvotes++;
  }

  $scope.reload = function(){
    $scope.bestposts = orderBy($scope.posts,$scope.propertyName,$scope.reverse);    
  }

}])

