(function () {
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchItems = '';
        $scope.message = '';
        $scope.myTextColorStyle = {};
        $scope.myBorderColorStyle = {};

        $scope.showMessage = function () {
            var items = $scope.lunchItems.split(',');
            var itemCount = 0;
            items.forEach(element => {
                // An Empty item is not counted
                if (element != '') {
                    itemCount += 1;
                }
            });
            if (itemCount ==0) {
                $scope.message = "Please enter data first";
                $scope.myTextColorStyle = {'color':'red'};
                $scope.myBorderColorStyle = {'border-color':'red'};
            }
            else if (itemCount <= 3) {
                $scope.message = "Enjoy!";
                $scope.myTextColorStyle = {'color':'green'};
                $scope.myBorderColorStyle = {'border-color':'green'};
            } else if(itemCount >= 3){
                $scope.message = "Too much!";
                $scope.myTextColorStyle = {'color':'green'};
                $scope.myBorderColorStyle = {'border-color':'green'};
            }
        }
    }
    
}
)();
