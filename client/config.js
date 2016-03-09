/**
 * Created by yangyang on 3/2/16.
 */
(function () {
    angular
        .module("LessonApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                redirectTo: "/lesson"
            })
            .when("/lesson", {
                templateUrl: "views/lesson/lesson.view.html",
                controller: "LessonController",
                controllerAs: "model"
            })
            .when("/lesson/:study/:lesson/:page", {
                templateUrl: "views/lesson/lesson.view.html",
                controller: "LessonController",
                controllerAs: "model"
            })
            .otherwise({
                templateUrl: "views/lesson/lesson.view.html",
            });
    }
})();