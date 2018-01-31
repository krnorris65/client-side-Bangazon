angular.module("Bangazon", ["ngRoute"])

angular.module("Bangazon").config(function ($routeProvider) {
	/**
     * Configure all Angular application routes here
     */
	$routeProvider.
		when("/customer", {
			templateUrl: "app/Customer/partials/customer.html",
			controller: "CustomerCtrl"
        }).otherwise("/")
    })