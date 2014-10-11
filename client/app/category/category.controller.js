'use strict';

angular.module('categoryDataModule', ['ngResource'])
  .controller('CategoryCtrl', function ($scope) {
  console.log($scope.displayCategories);
  $scope.displayCategories.$promise.then(function(data){
    console.log(data);
      $scope.formatData(data);
  });

$scope.makeSeries = function(){
    var someInstance = {};
    someInstance.set = [];
    someInstance.threshold = 0;
    someInstance.series = [];

    someInstance.average = function(){
      var sum = _.reduce(this.set, function(sum, num){
        return sum+num;
      });
      this.threshold = sum / this.set.length;
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

        if(data[i].followUp || data[i].action) {
          $scope.actions.push(data[i]);
        }
      }
      yNumEvents.average();yNumEvents.setSeries();
      ySales.average();ySales.setSeries();
      yVolume.average();yVolume.setSeries();
      yMargin.average();yMargin.setSeries();
      yProfit.average();yProfit.setSeries();
      yTransactions.average();yTransactions.setSeries();
      yImpact.average();yImpact.setSeries();


      $scope.displayCategoriesChart(xItems.set, yNumEvents.set, yNumEvents.threshold, 15, 'Parity','#categoryEventsChart');
      $scope.displayChart(xItems.set, ySales.series, ySales.threshold, 180, 'Sales','#categorySalesChart');
      $scope.displayChart(xItems.set, yVolume.series, yVolume.threshold, 270, 'Volume','#categoryVolumeChart');
      $scope.displayChart(xItems.set, yMargin.series, yMargin.threshold, 360, 'Margin', '#categoryMarginChart');
      $scope.displayChart(xItems.set, yProfit.series, yProfit.threshold, 450, 'Profit', '#categoryProfitChart');
      $scope.displayChart(xItems.set, yTransactions.series, yTransactions.threshold, 540, 'Transactions', '#categoryTransactionsChart');
      $scope.displayChart(xItems.set, yImpact.series, yImpact.threshold, 630, 'Impact', '#categoryImpactChart');

    };

    $scope.displayCategoriesChart = function(xItems, ySeries, average, left, chartTitle, chartName) {
      Highcharts.setOptions({
        chart: {
          style: {
            position: 'absolute',
            top: 69,
            left: left,
            overflow: 'visible'
          }
        }
      });
      $(chartName).highcharts({
        chart: {
          type: 'bar',
          height: 365,
          width: 165,
          backgroundColor: 'white',
          spacingTop: 10,
          spacingBottom: 10,
          spacingLeft: 0,
          spacingRight: 10
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
            align: 'right'
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
            x: 0,
            style: {
              color: 'white',
              fontSize: '10px'
            }
          }
        }
        ],
        series: [{
            data: [0,0,0,0,0,0,0,0,0,0]
        }],
        legend: {
          enabled: false
        },
      });
    };
    $scope.displayChart = function(xItems, ySeries, average, left, chartTitle, chartName) {
      Highcharts.setOptions({
        chart: {
          style: {
            position: 'absolute',
            top: 69,
            left: left,
            overflow: 'visible'
          }
        }
      });
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
          spacingRight: 0
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
  });