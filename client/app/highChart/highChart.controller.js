'use strict';

angular.module('retailDashboardApp')
  .controller('HighchartCtrl', function ($scope, CategoryDataFactory) {
    CategoryDataFactory.getCategoryData().$promise.then(function(data){
      $scope.formatData(data);
    });

$scope.makeSeries = function(){
    var someInstance = {};
    someInstance.set = [];
    someInstance.threshold = 0;
    someInstance.belowZero = [];
    someInstance.belowThreshold = [];
    someInstance.aboveThreshold = [];

    someInstance.average = function(){
      var sum = _.reduce(this.set, function(sum, num){
        return sum+num;
      });
      this.threshold = sum / this.set.length;
    };

    someInstance.negative = function(){
      var temp = [];
      _.forEach(this.set, function(num){
        if (num < 0){
          temp.push(num);
        }
      });
      this.belowZero = temp;
    };

    someInstance.underThreshold = function(){
      var temp = [];
      var threshold = this.threshold;
      _.forEach(this.set, function(num){
        if (num >= 0 && num < threshold){
          temp.push(num);
        }
      });
      this.belowThreshold = temp;
    };

    someInstance.overThreshold = function(){
      var temp = [];
      var threshold = this.threshold;
      _.forEach(this.set, function(num){
        if (num >= threshold){
          temp.push(num);
        }
      });
      this.aboveThreshold = temp;
    };

  return someInstance;
};

    $scope.formatData = function(data){
      var xItems = $scope.makeSeries();
      var yNumEvents = $scope.makeSeries();
      var ySales = $scope.makeSeries();
      var yVolume = $scope.makeSeries();
      var yMargin = $scope.makeSeries();
      var yProfit = $scope.makeSeries();
      var yTransactions = $scope.makeSeries();
      var yImpact = $scope.makeSeries();

      for(var i = 0; i < data.length; i++) {
        xItems.set.push(data[i].item);
        yNumEvents.set.push(data[i].numEvents);
        ySales.set.push(data[i].sales);
        yVolume.set.push(data[i].volume);
        yMargin.set.push(data[i].margin);
        yProfit.set.push(data[i].profit);
        yTransactions.set.push(data[i].transactions);
        yImpact.set.push(data[i].impact);
      }
      yNumEvents.average();yNumEvents.negative();yNumEvents.underThreshold();yNumEvents.overThreshold();
      ySales.average();ySales.negative();ySales.underThreshold();ySales.overThreshold();
      yVolume.average();yVolume.negative();yVolume.underThreshold();yVolume.overThreshold();
      yMargin.average();yMargin.negative();yMargin.underThreshold();yMargin.overThreshold();
      yProfit.average();yProfit.negative();yProfit.underThreshold();yProfit.overThreshold();
      yTransactions.average();yTransactions.negative();yTransactions.underThreshold();yTransactions.overThreshold();
      yImpact.average();yImpact.negative();yImpact.underThreshold();yImpact.overThreshold();


      $scope.displayChart(xItems, yNumEvents.set, yNumEvents.threshold, 90,'#eventsChart');
      $scope.displayChart(xItems, ySales.set, ySales.threshold, 180,'#salesChart');
      $scope.displayChart(xItems, yVolume.set, yVolume.threshold, 270, '#volumeChart');
      $scope.displayChart(xItems, yMargin.set, yMargin.threshold, 360, '#marginChart');
      $scope.displayChart(xItems, yProfit.set, yProfit.threshold, 450, '#profitChart');
      $scope.displayChart(xItems, yTransactions.set, yTransactions.threshold, 540, '#transactionsChart');
      $scope.displayChart(xItems, yImpact.set, yImpact.threshold, 630, '#impactChart');

    };
    
    $scope.averageNumbers = function(array){
      var sum = _.reduce(array, function(sum, num){
        return sum+num;
      });
      return sum / array.length;
    };

    // $scope.chart = null;
    // $scope.displayNumEvents = function(xItems, ySeries) {
    //   Highcharts.setOptions({
    //     chart: {
    //       style: {
    //         position: 'absolute',
    //         top: 110,
    //         left: 15,
    //         overflow: 'visible'
    //       }
    //     }
    //   });
    //   $('#barChart1').highcharts({
    //     chart: {
    //       type: 'bar',
    //       height: 280,
    //       width: 165
    //     },
    //     title: {
    //         text: ''
    //     },
    //     xAxis: {
    //       categories: xItems,
    //       gridLineWidth: 0,
    //       lineWidth: 0,
    //       tickWidth: 0,
    //       title: {
    //           enabled: false
    //       },
    //       labels: {
    //           align: 'left',
    //           overflow: 'justify'
    //         }
    //     },
    //     plotOptions: {
    //       series: {
    //         dataLabels: {
    //             enabled: true,
    //             color: 'black',
    //             align: 'center',
    //             x: 10,
    //             y: 0
    //         },
    //         pointPadding: 0.1,
    //         groupPadding: 0,
    //         color: '#006196'
    //       }
    //     },
    //     yAxis: {
    //       gridLineWidth: 0,
    //       lineWidth: 0,
    //       tickWidth: 0,
    //       title: {
    //           enabled: false
    //       },
    //       labels: {
    //         enabled: false
    //       }
    //     },
    //     series: [
    //     {data: ySeries}
    //     ],
    //     legend: {
    //       enabled: false
    //     }
    //   });
    // };

    $scope.displayChart = function(xItems, ySeries, average, left, chartName) {
      Highcharts.setOptions({
        chart: {
          style: {
            position: 'absolute',
            top: 110,
            left: left,
            overflow: 'visible'
          }
        }
      });
      $(chartName).highcharts({
        chart: {
          type: 'bar',
          height: 280,
          width: 90
        },
        title: {
            text: ''
        },
        xAxis: {
          categories: xItems,
          gridLineWidth: 0,
          lineWidth: 0,
          tickWidth: 0,
          title: {
            enabled: false
          },
          labels: {
            enabled: false
          }
        },
        plotOptions: {
          series: {
            dataLabels: {
                enabled: true,
                color: 'black',
                // align: 'left',
                // verticleAlign: 'middle',
                // x: 16,
                // y: 0
                inside: false
            },
            pointPadding: 0.1,
            groupPadding: 0
          }
        },
        yAxis: {
          gridLineWidth: 0,
          lineWidth: 0,
          tickWidth: 0,
          title: {
              enabled: false
          },
          labels: {
            enabled: false
          },
          plotLines: [
            {
              value: 0,
              color: 'black',
              width: 1,
              dashStyle: 'Solid',
              zIndex: 5
            },
            {
              value: average,
              color: 'DarkGray',
              width: 1,
              dashStyle: 'ShortDash',
              zIndex: 5
            }
          ]
        },
        series: [{
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                    [0, 'rgb(0, 97, 151)'],
                    [1, 'rgb(0, 121, 189)']
                ]
            },
            negativeColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                    [0, 'rgb(194, 91, 0)'],
                    [1, 'rgb(247, 123, 0)']
                ]
            },
            data: ySeries
        }],
        legend: {
          enabled: false
        },
      });
    };

  })
  .directive('categoryData', function() {
    return {
      template:'<div ng-controller="HighchartCtrl"><div id="eventsChart"></div><div id="salesChart"></div><div id="volumeChart"></div><div id="marginChart"></div><div id="profitChart"></div><div id="transactionsChart"></div><div id="impactChart"></div></div>',
      restrict: 'A'
    };
  });