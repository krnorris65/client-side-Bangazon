angular.module("Bangazon").controller("CustomerInfoCtrl",
function ($scope, CustomerFactory, $routeParams, $timeout, $location) {

    $scope.editCustomer = {}
    
    CustomerFactory.single($routeParams.customerId).then(customer => {        
        $scope.editCustomer = customer
    })


    $scope.updateCustomer = () => {
        if($scope.editCustomer.firstName !== undefined && $scope.editCustomer.lastName !== undefined) {
            const customer = {
                "customerId": $scope.editCustomer.customerId,
                "firstName": $scope.editCustomer.firstName,
                "lastName": $scope.editCustomer.lastName
            }
            debugger
            CustomerFactory.update(customer, customer.customerId).then(() => {
                $location.url("/customer/list")
            })
        } else {
            alert("Please enter first and last name")
        }
    }

}
)