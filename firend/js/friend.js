$(".like-btn").click(function () {
	var likeNum = $(this).next("span").text();
	console.log(likeNum);
	var imgSrc = $(this).attr("src");
	if (imgSrc == "img/Like-40.png") {
		$(this).attr("src", "img/Like-50.png");
		likeNum--;
	} else{
		$(this).attr("src", "img/Like-40.png");
		likeNum++;
	}
	 $(this).next("span").text(likeNum);
})
var app = angular.module("myapp", []);
var defaultCom = [{name:'点点',title:'我是点点'},
				  {name:'大华',title:'我是大华'},
				  {name:'H',title:'我是H'}];
var allCom =[{name:'点点',title:'我是点点'},
			{name:'大华',title:'我是大华'},
			{name:'H',title:'我是H'},
			{name:'大华4',title:'我是大华4'},
			{name:'大华5',title:'我是大华5'},
			{name:'大华6',title:'我是大华6'},
			{name:'大华7',title:'我是大华7'},
			{name:'大华8',title:'我是大华8'},
			{name:'大华9',title:'我是大华9'},
			{name:'大华10',title:'我是大华10'}];
app.controller("myctr",function ($scope) {
	$scope.showItem = true;
	$scope.showAll = true;
	$scope.hideAll = false;
	$scope.allInf= defaultCom;
	$scope.seeAll = function(){
		$scope.allInf = allCom;
		$scope.showAll = false;
		$scope.hideAll = true;
	}
	$scope.seeDefault = function(){
		$scope.allInf = defaultCom;
		$scope.showAll = true;
		$scope.hideAll = false;
	}
	$scope.deletInf = function () {
		$scope.showItem = false;
	}

})
