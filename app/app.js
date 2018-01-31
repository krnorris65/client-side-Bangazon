angular.module("Bangazon", ["ngRoute"])

angular.module("Bangazon").config(function ($routeProvider) {
	/**
     * Configure all Angular application routes here
     */
	$routeProvider.
		when("/customer", {
			templateUrl: "app/Customer/partials/customer.html",
			controller: "CustomerCtrl"
		})
		.when("/customer/list", {
			templateUrl: "app/Customer/partials/customerList.html",
			controller: "CustomerListCtrl"
        }).when("/customer/new", {
			templateUrl: "app/Customer/partials/customerNew.html",
			controller: "CustomerNewCtrl"
		}).when('/customer/info/:customerId', {
            templateUrl: "app/Customer/partials/customerInfo.html",
			controller: "CustomerInfoCtrl"
		}).otherwise("/")
    })