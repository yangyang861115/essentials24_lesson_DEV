/**
 * Created by yangyang on 3/2/16.
 */
(function () {
    angular
        .module("LessonApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope){
        $scope.header = "this is header";
    }
})();