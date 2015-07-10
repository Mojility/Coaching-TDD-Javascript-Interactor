angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.html","<h1 class=\"heading -large\">{{ home.title }}</h1>\n\n<section ng-controller=\"AccountController as account\">\n    <h1>Account Details: {{ account.name }}</h1>\n\n    <section ng-controller=\"SalesController as sales\">\n        <p ng-class=\"{\'warning\': sales.balance_warning()}\">\n            {{account.balance()}}\n            ({{sales.account_type_label()}})\n        </p>\n\n        <section id=\"salesSection\" ng-class=\"{\'warning\': sales.balance_warning()}\">\n            <section ng-if=\"sales.balance_warning()\">\n                <p>{{sales.suggested_action_text()}}</p>\n\n                <p>{{sales.suggested_products_heading}}</p>\n                <ul class=\"productList\">\n                    <li ng-repeat=\"product in sales.suggested_products()\"\n                        ng-click=\"sales.upgrade_account(product)\"\n                        ng-class=\"product.frequency\">\n                        {{product.friendly_name()}}\n                    </li>\n                </ul>\n            </section>\n            <section ng-if=\"!sales.balance_warning()\">\n                Everything appears to be running smoothly from a billing perspective.\n            </section>\n        </section>\n    </section>\n\n</section>");}]);