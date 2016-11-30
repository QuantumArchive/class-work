import cowsay from 'cowsay-browser';

// define angular dependcies to inject into
// the controller function
cowsayController.$inject = ['$scope'];

export default function cowsayController($scope) {
    $scope.message = 'hello world!';

    $scope.say = function(text) {
        return cowsay.say({ text });
    };
}

// we don't want to type this:

// export default [
//     '$scope',
//     function cowsayController($scope) {
//         $scope.message = 'hello world!';

//         $scope.say = function(text) {
//             return cowsay.say({ text });
//         };
//     }
// ];

// this is okay:

// cowsayController.$inject = ['$scope'];

// function cowsayController($scope) {
//     $scope.message = 'hello world!';

//     $scope.say = function(text) {
//         return cowsay.say({ text });
//     };
// }

// module.exports = cowsayController;