(function () {
    'use strict';
    angular.module('selfService')
        .service('AccountTransferService', ['$q', '$http', '$rootScope', '$resource', 'BASE_URL', 'MOMO_BASE_URL', 'CELO_URL', AccountTransferService]);

    function AccountTransferService($q, $http, $rootScope, $resource, BASE_URL, MOMO_BASE_URL, CELO_URL) {

        this.getTransferTemplate = function () {
            return $resource(BASE_URL + '/self/accounttransfers/template');
        }

        this.transfer = function () {
            return $resource(BASE_URL + '/self/accounttransfers');
        }

        this.exchange = function () {
            return $resource(CELO_URL + '/exchange');
        }

        this.checkAccountName = function () {
            return $resource(BASE_URL + '/extensions/payment/self/check');
        }

        this.checkPaymentChannel = function (channelId) {
            return $resource(BASE_URL + '/extensions/payment/self/available/' + channelId);
        }

        this.repayLoan = function (loanId) {
            return $resource(BASE_URL + '/self/loans/' + loanId + '/transaction');
        }

        this.depositSavings = function (savingId) {
            return $resource(BASE_URL + '/self/savingsaccounts/' + savingId + '/transaction');
        }

        /**
         * Get the Mobile Money service endpoint to 
         * send the API request to. 
         */
        this.getMOMOEndpoint = function (isSavingsTransfer, isWithdraw) {
            var momoEndpoint = MOMO_BASE_URL + '/api/loan/';
            if (true === isSavingsTransfer && !isWithdraw) {
                momoEndpoint = MOMO_BASE_URL + '/api/saving/';
            }
            if (true === isSavingsTransfer && isWithdraw) {
                momoEndpoint = MOMO_BASE_URL + '/api/withdraw/';
            }
            return $resource(momoEndpoint);
        }
    }

})();
