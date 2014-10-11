'use strict';

angular.module('itemDataModule', ['ngResource'])
  .controller('ItemCtrl', function ($scope) {
    console.log($scope.displayItems);
    $scope.data = $scope.displayItems;
    // $scope.data = $scope.displayItems;

    // $scope.data.$promise.then(function(data){
    //   console.log(data);
    // });
$scope.makeSeries = function(){
    var someInstance = {};
    someInstance.set = [];
    someInstance.threshold = 0;
    someInstance.series = [];

    someInstance.average = function(){
      var sum = _.reduce(this.set, function(sum, num){
        return sum+num;
      });
      this.threshold = Math.round(sum / this.set.length);
    };

    someInstance.setSeries = function(){
      var temp = [];
      var threshold = this.threshold;
      _.forEach(this.set, function(num){
        var obj = {};
        obj.y = num;
        // console.log(num);
        if (num < 0){
          obj.color = {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                    [0, 'rgb(175, 75, 0)'],
                    [1, 'rgb(247, 123, 0)']
                ]
            };
          obj.dataLabels = {
            align: 'left'
          };
          temp.push(obj);
        } else if (num >= 0 && num < threshold){
          obj.color = {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                    [0, 'rgb(230, 155, 0)'],
                    [1, 'rgb(250, 185, 50)']
                ]
            };
          obj.dataLabels = {
            align: 'right'
          };
          temp.push(obj);
        } else {
          obj.color = {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                    [0, 'rgb(0, 75, 125)'],
                    [1, 'rgb(0, 121, 189)']
                ]
            };
          obj.dataLabels = {
            align: 'right'
          };
          temp.push(obj);
        }
      });
      this.series = temp;
    };

  return someInstance;
};

    $scope.actions = [];

    $(function(){
      console.log('IIfE!!!!!!!');
      var xItems = $scope.makeSeries();
      var yNumEvents = $scope.makeSeries();
      var ySales = $scope.makeSeries();
      var yVolume = $scope.makeSeries();
      var yMargin = $scope.makeSeries();
      var yProfit = $scope.makeSeries();
      var yTransactions = $scope.makeSeries();
      var yImpact = $scope.makeSeries();

      console.log($scope.data.length);

      for(var i = 0; i < $scope.data.length; i++) {
        xItems.set.push($scope.data[i].item);
        yNumEvents.set.push($scope.data[i].numEvents);
        ySales.set.push($scope.data[i].sales);
        yVolume.set.push($scope.data[i].volume);
        yMargin.set.push($scope.data[i].margin);
        yProfit.set.push($scope.data[i].profit);
        yTransactions.set.push($scope.data[i].transactions);
        yImpact.set.push($scope.data[i].impact);

        if($scope.data[i].followUp || $scope.data[i].action) {
          $scope.actions.push($scope.data[i]);
        }
      }
      yNumEvents.average();yNumEvents.setSeries();
      ySales.average();ySales.setSeries();
      yVolume.average();yVolume.setSeries();
      yMargin.average();yMargin.setSeries();
      yProfit.average();yProfit.setSeries();
      yTransactions.average();yTransactions.setSeries();
      yImpact.average();yImpact.setSeries();

      console.log(xItems);


      
    
      $scope.displayItemsChart = function(xItems, ySeries, average, left, chartTitle, chartName) {
        $(chartName).highcharts({
          chart: {
            type: 'bar',
            height: 365,
            width: 165,
            backgroundColor: 'white',
            spacingTop: 10,
            spacingBottom: 10,
            spacingLeft: 0,
            spacingRight: 10,
            style: {
              position: 'absolute',
              top: 69,
              left: left,
              overflow: 'visible'
            }
          },
          title: {
              text: null
          },
          tooltip: {
            enabled: false
          },
          xAxis: [{
            categories: xItems,
            gridLineWidth: 1,
            lineWidth: 0,
            tickWidth: 1,
            tickLength: 68,
            title: {
              enabled: false
            },
            labels: {
              enabled: true,
              style: {
                color: 'Black',
                fontSize: '8px'
              },
            }
          }, {
            opposite: true,
            linkedTo: 0,
            categories: ySeries,
            gridLineWidth: 0,
            lineWidth: 0,
            x: 100,
            tickWidth: 1,
            tickLength: 50
          }],
          yAxis: [{
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            title: {
              text: 'AVERAGE',
              style: {
                color: 'Black',
                fontSize: '18px'
              },
              align: 'left'
            },
            labels: {
              enabled: false
            }
          }, {
            linkedTo: 0,
            opposite: true,
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            labels: {
              enabled: false
            },
            title: {
              text: chartTitle,
              align: 'left',
              style: {
                color: 'Gray',
                fontSize: '10px'
              }
            }
          }, {
            linkedTo: 1,
            opposite: true,
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            labels: {
              enabled: false
            },
            title: {
              text: 'Volume',
              align: 'left',
              style: {
                color: 'white',
                fontSize: '10px'
              }
            }
          }, {
            linkedTo: 2,
            opposite: true,
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            labels: {
              enabled: false
            },
            title: {
              text: 'Incremental',
              align: 'left',
              style: {
                color: 'white',
                fontSize: '10px',
                backgroundColor: 'red'
              }
            }
          }],
          series: [{
              data: [0,0,0,0,0,0,0,0,0,0]
          }],
          legend: {
            enabled: false
          },
        });
      };
      $scope.displayChart = function(xItems, ySeries, average, left, chartTitle, chartName) {
        $(chartName).highcharts({
          chart: {
            type: 'bar',
            height: 365,
            width: 90,
            backgroundColor: '#f2f2f2',
            // margin: [0, 0, 0, 0],
            spacingTop: 10,
            spacingBottom: 10,
            spacingLeft: 0,
            spacingRight: 0,
            style: {
              position: 'absolute',
              top: 69,
              left: left,
              overflow: 'visible'
            }
          },
          title: {
              text: null,
              floating: true,
              align: 'left',
              verticleAlign: 'top',
              y: -50,
              style: {
                color: 'red'
              }
          },
          tooltip: {
            enabled: false
          },
          xAxis: {
            categories: xItems,
            gridLineWidth: 1,
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
                  inside: false,
                  y:  0,
              },
              pointPadding: 0.15,
              groupPadding: 0
            }
          },
          yAxis: [{
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            title: {
              text: average,
              style: {
                color: 'DarkGray',
                fontSize: '18px'
              }
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
          }, {
            linkedTo: 0,
            opposite: true,
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            labels: {
              enabled: false
            },
            title: {
              text: 'Thousands',
              align: 'left',
              style: {
                color: 'Gray',
                fontSize: '10px'
              }
            }
          }, {
            linkedTo: 1,
            opposite: true,
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            labels: {
              enabled: false
            },
            title: {
              text: chartTitle,
              align: 'left',
              style: {
                color: 'black',
                fontSize: '10px'
              }
            }
          }, {
            linkedTo: 2,
            opposite: true,
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            labels: {
              enabled: false
            },
            title: {
              text: 'Incremental',
              align: 'left',
              style: {
                color: 'black',
                fontSize: '10px',
                backgroundColor: 'red'
              }
            }
          }],
          series: [{
              data: ySeries,
              // commented out b/c color is being set on ySeries data 
              // explicity to allow for more than 2 thresholds 
              // color: {
              //     linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              //     stops: [
              //         [0, 'rgb(0, 97, 151)'],
              //         [1, 'rgb(0, 121, 189)']
              //     ]
              // },
              // negativeColor: {
              //     linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              //     stops: [
              //         [0, 'rgb(194, 91, 0)'],
              //         [1, 'rgb(247, 123, 0)']
              //     ]
              // }
          }],
          legend: {
            enabled: false
          },
        });
      };

      $scope.displayItemsChart(xItems.set, yNumEvents.set, yNumEvents.threshold, 15, 'Parity','#itemEventsChart');
      $scope.displayChart(xItems.set, ySales.series, ySales.threshold, 180, 'Sales','#itemSalesChart');
      $scope.displayChart(xItems.set, yVolume.series, yVolume.threshold, 270, 'Volume','#itemVolumeChart');
      $scope.displayChart(xItems.set, yMargin.series, yMargin.threshold, 360, 'Margin', '#itemMarginChart');
      $scope.displayChart(xItems.set, yProfit.series, yProfit.threshold, 450, 'Profit', '#itemProfitChart');
      $scope.displayChart(xItems.set, yTransactions.series, yTransactions.threshold, 540, 'Transactions', '#itemTransactionsChart');
      $scope.displayChart(xItems.set, yImpact.series, yImpact.threshold, 630, 'Impact', '#itemImpactChart');

    });

  });

