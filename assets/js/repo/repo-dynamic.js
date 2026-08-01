angular.module('app', []).controller('repoDataController', [
    '$scope',
    '$http',
    '$location',
    function($scope, $http, $location) {
        var hash = $location.url().substring(1);

        var promiseRepoInfo = $http.get('/visualize/github-data/intReposInfo.json', {
            cache: true
        });

        var promiseLogoInfo = $http.get('/visualize/github-data/repo_logos.json', {
            cache: true
        });
        promiseRepoInfo.then(function(response) {
            var reposObj = response.data.data;
            if (reposObj.hasOwnProperty(hash)) {
                var data = reposObj[hash];
                $scope.repo = data;
                draw_graphs(hash);
                var sumP = 0;
                var sumI = 0;
                var pullCounters = ['pullRequests_Merged', 'pullRequests_Open'];
                var issueCounters = ['issues_Closed', 'issues_Open'];
                pullCounters.forEach(function(c) {
                    sumP += data[c]['totalCount'];
                });
                issueCounters.forEach(function(c) {
                    sumI += data[c]['totalCount'];
                });
                $scope.count = { pulls: sumP, issues: sumI };
                if ($scope.count.pulls) {
                    draw_pie_repoPulls('piePulls', hash);
                }
                if ($scope.count.issues) {
                    draw_pie_repoIssues('pieIssues', hash);
                }

                promiseLogoInfo.then(function(response) {
                    repoLogosObj = response.data.data;
                    for (var i = 0; i < repoLogosObj.length; i++) {
                        var logo = repoLogosObj[i];
                        if (logo.includes(hash.toLowerCase())) {
                            $scope.repo.logo = logo;
                            break;
                        }
                    }
                    if (!$scope.repo.logo) {
                        $scope.repo.logo = null;
                    }
                });
            } else {
                repo404();
            }
        });

        var repo404 = function() {
            var errorString = '<h1><span class="fa fa-exclamation-circle"></span> Whoops...</h1>';
            if (hash == '') {
                errorString += 'No repository specified.';
            } else {
                errorString += 'The repository "' + hash + '" is not in our catalog.';
            }
            document.getElementById('mainContent').innerHTML = errorString;
        };

        var draw_graphs = function(nametag) {
            draw_line_repoActivity('repoActivityChart', nametag);
            draw_pie_repoUsers('pieUsers', nametag);
            draw_line_repoCreationHistory('repoCreationHistory', nametag);
            draw_pie_languages('languagePie', nametag);
            draw_cloud_topics('topicCloud', nametag);
        };
    }
]);
