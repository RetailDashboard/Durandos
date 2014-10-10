'use strict';

angular.module('categoryMonthModule', ['ngResource'])
  .controller('CategoryMonthCtrl', function ($scope, CategoryMonthFactory) {

    CategoryMonthFactory.getCategoryMonthData().$promise.then(function(data){
      $scope.displayLineGraph(data);
    });

    $scope.chart = null;
    $scope.displayLineGraph = function(data) {
      var targetColor = '#060'; // light gray
      var avgColor = '#25C'; // green
      var bgColor = '#DDD'; // blue

      var targetLabelTopPos = '45px'; // need to edit if chart is resized
      var targetLabelLeftPos = '50px'; // need to edit if chart is resized

      var xAxisCategories = [];
      var seriesDataAverage = [];
      var seriesDataTarget = [];
      var target;

      // if months are out of order, we need to sort it by 'id'
      // either server side (preferred) or client side
      data.forEach(function(element) {
        if(element.month === 'Target') {
          target = element.sales;
        } else {
          xAxisCategories.push(element.month);
          seriesDataAverage.push(element.sales);
        }
      });

      for(var i = 0; i < seriesDataAverage.length; i++) {
        seriesDataTarget.push(target);
      }
      
      Highcharts.setOptions({
        chart: {
          style: {
            position: 'absolute',
            top: 474,
            left: 28,
            overflow: 'visible'
          }
        }
      });
      $('#lineGraph').highcharts({
        title: {
          text: '',
          x: -20 //center
        },
        subtitle: {
          text: '',
          x: -20
        },
        xAxis: {
          categories: xAxisCategories
        },
        yAxis: {
          title: {
            text: ''
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        tooltip: {
          valueSuffix: ''
        },
        legend: {
          floating: true,
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          borderWidth: 0
        },
        series: [{
          name: 'Target',
          data: seriesDataTarget,
          color: targetColor,
          dashStyle: 'dash', // dot, shortdot, dash, shortdash
          lineWidth: 1,
          marker: {
            enabled: false,
            states: {
              hover: {
                enabled: false
              }
            }
          },
          showInLegend: false,
        }, {
          name: 'Average',
          data: seriesDataAverage,
          color: avgColor
        }],
        labels: {
          items: [{
            html: 'Target',
            style: {
              left: targetLabelLeftPos,
              top: targetLabelTopPos,
              color: targetColor
            }
          }]
        },
        chart: {
          backgroundColor: bgColor
        }
      });
    };
  })
  .factory('CategoryMonthFactory', function($resource) {
    return $resource('/api/categoryMonths',
      {},
      {
        getCategoryMonthData: {
          method: 'GET',
          isArray: true
        }
      }
    );
  })
  .directive('categoryMonth', function() {
    return {
      // CSS for this goes under #lineGraph and #highcharts-12
      template:'<div ng-controller="CategoryMonthCtrl" id="lineGraph"></div>',
      restrict: 'A'
    };
  });
