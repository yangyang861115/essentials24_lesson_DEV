/**
 * Created by yangyang on 3/2/16.
 */
(function () {
    angular
        .module("LessonApp")
        .controller("FooterController", FooterController);

    function FooterController($scope){
        $scope.footer = "this is footer";
    }
})();