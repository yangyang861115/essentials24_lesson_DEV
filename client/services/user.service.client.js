/**
 * Created by yangyang on 3/25/16.
 */
(function(){
    angular
        .module("LessonApp")
        .factory("UserService", UserService);

    function UserService($http){
        var api = {
            loginByCredential :loginByCredential,
            getCodeByEmail: getCodeByEmail,
            loginByEmail: loginByEmail,
            createUser: createUser
        }

        return api;

        function loginByCredential(credential){
            var url = "https://crucore.com/api.php?a=login";
            return $http.post(url, credential);
        }

        function getCodeByEmail(email){
            var url = "https://crucore.com/api.php?a=sendEmail";
            return $http.post(url, email);

        }

        function loginByEmail(email, code){

        }

        function createUser(user) {

        }
    }
})();