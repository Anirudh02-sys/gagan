var myApp = angular.module('prudentApp',['ngRoute'])



myApp.config(['$routeProvider',function($routeProvider){

    $routeProvider
        .when('/home',{
            templateUrl: 'view/home.html',
        })
        .when('/studentdirectory',{
            templateUrl: 'view/studentdirectory.html',
            controller: 'StudentController'
        })
        .when('/teacherdirectory',{
            templateUrl: 'view/teacherdirectory.html',
            controller: 'TeacherController'
        })
        .when('/login',{
            templateUrl:'view/login.html',
        })
        .when('/registration',{
            templateUrl:'view/registration.html',
        })
        .when('/table',{
            templateUrl:'view/table.html',
            controller: 'StudentController',
        })
        .otherwise({
            redirectTo:'/home'
        });

}]);

myApp.run(function($rootScope) {
    $rootScope.isLoggedIn = true; // set the initial value to false
  });
  
  myApp.controller('LoginCtrl', function($scope, $rootScope) {
    $scope.login = function() {
      // perform login logic here
      $rootScope.isLoggedIn = true;
    };
  });
  
  myApp.controller('LogoutCtrl', function($scope, $rootScope) {
    $scope.logout = function() {
      // perform logout logic here
      $rootScope.isLoggedIn = false;
    };
  });
 
  

myApp.controller('TeacherController',function($scope,$http){
  
    var req = $http({
        url : "http://localhost:5500/teacher.json",
        method : 'GET',
        data: "records",
        transformResponse: [
            function (data) { 
                return data
            }
        ]
    })

})

myApp.controller('StudentController',['$scope',function($scope){

    

    $scope.removeStudent = function(student){
        var removeStudent = $scope.students.indexOf(student);
        $scope.students.splice(removeStudent,1);

    }
    // javascript validation
    $scope.addStudent = function(){
    const choice = prompt("Are you sure you want to submit? y/N");
    if(choice ==='N'||choice==='n')
        return;
    let messages = []
    console.log("hey")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function validateEmail(email) {
        return emailRegex.test(email);
    }
    if (!validateEmail($scope.newstudent.email)) {
          messages.push('Invalid email address');
        }
    if($scope.newstudent.name === ''||$scope.newstudent.name == null)
    {
        console.log($scope.newstudent.name)
      messages.push('Name is a required field')
    }
    if(messages.length > 0){
      alert(messages.join(', '))
      console.log("hello")
      return;
    }
    

        $scope.students.push({
            name: $scope.newstudent.name,
            email: $scope.newstudent.email,
            phno: parseInt($scope.newstudent.phno),
            dob: $scope.newstudent.dob,
            gender: $scope.newstudent.gender,
            major: $scope.newstudent.major,
            gpa: $scope.newstudent.gpa,
            
        });

        $scope.newstudent.name ="",
        $scope.newstudent.email =""
        $scope.newstudent.phno =""
        $scope.newstudent.dob =""
        $scope.newstudent.gender =""
        $scope.newstudent.major =""
        $scope.newstudent.gpa =""
    };



    students = `[{
        "name": "Isabel",
        "email": "isabel@example.com",
        "phno": "62213257",
        "dob": "2004-05-19",
        "gender": "Female",
        "major": "Physics",
        "gpa": "3.27",
        "thumb":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }, {
        "name": "Frank",
        "email": "frank@example.com",
        "phno": "63498017",
        "dob": "1999-05-06",
        "gender": "Male",
        "major": "Engineering",
        "gpa": "3.17",
        "thumb":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }, {
        "name": "Henry",
        "email": "henry@example.com",
        "phno": "84420223",
        "dob": "1993-06-20",
        "gender": "Male",
        "major": "Business",
        "gpa": "3.28",
        "thumb":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }, {
        "name": "Grace",
        "email": "grace@example.com",
        "phno": "54521763",
        "dob": "1996-03-18",
        "gender": "Female",
        "major": "English",
        "gpa": "2.76",
        "thumb":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }, {
        "name": "David",
        "email": "david@example.com",
        "phno": "56283658",
        "dob": "1992-04-19",
        "gender": "Male",
        "major": "Psychology",
        "gpa": "3.47",
        "thumb":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }, {
        "name": "Alice",
        "email": "alice@example.com",
        "phno": "44690299",
        "dob": "2003-10-22",
        "gender": "Female",
        "major": "Mathematics",
        "gpa": "2.76",
        "thumb":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }, {
        "name": "Eva",
        "email": "eva@example.com",
        "phno": "74001363",
        "dob": "1992-08-08",
        "gender": "Female",
        "major": "Computer Science",
        "gpa": "3.43",
        "thumb":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }, {
        "name": "Charlie",
        "email": "charlie@example.com",
        "phno": "47121725",
        "dob": "1995-02-23",
        "gender": "Male",
        "major": "Art",
        "gpa": "2.20",
        "thumb":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }, {
        "name": "Bob",
        "email": "bob@example.com",
        "phno": "32494548",
        "dob": "1998-07-23",
        "gender": "Male",
        "major": "Biology",
        "gpa": "3.29",
        "thumb":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }, {
        "name": "Jack",
        "email": "jack@example.com",
        "phno": "42204070",
        "dob": "1992-03-07",
        "gender": "Male",
        "major": "History",
        "gpa": "2.94",
        "thumb":"https://randomuser.me/api/portraits/thumb/men/75.jpg"
    }]`


    $scope.students = JSON.parse(students)

    $scope.ninjas = [
        {
            name:"Yoshi",
            belt:"green",
            rate: 50,
            available: true,
            thumb:"https://randomuser.me/api/portraits/thumb/men/75.jpg"

        },
        {
            name:"Mogu",
            belt:"Yellow",
            rate: 30,
            available: false,
            thumb:"https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        {
            name:"Ryu",
            belt:"black",
            rate: 10,
            available: true,
            thumb:"https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        {
            name:"Shaun",
            belt:"orange",
            rate: 1000,
            available: true,
            thumb:"https://randomuser.me/api/portraits/thumb/men/75.jpg"
        }

    ]

    console.log(angular.toJson($scope.ninjas));
}]);

/*
myApp.config(function(){

});

myApp.run(function(){

});*/




