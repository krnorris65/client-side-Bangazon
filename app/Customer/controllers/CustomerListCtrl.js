angular.module("Bangazon").controller("CustomerListCtrl",
function ($scope, CustomerFactory, $location) {

    $scope.customers = []

    CustomerFactory.allCustomers().then(customer =>{
        $scope.customers = customer
    })

    $scope.moreInfo = (id) => {
        $location.url("/customer/info/" + id)
    }

}
)