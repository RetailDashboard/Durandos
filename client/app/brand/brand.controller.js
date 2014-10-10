'use strict';

angular.module('brandDataModule', ['ngResource'])
  .controller('BrandCtrl', function ($scope) {
    $scope.data = $scope.displayBrands;
    $scope.actions = [];

    var items = [];
    var incSales = [];
    var incSalesAvg = [];
    var incVol = [];
    var incVolAvg = [];
    var incMar = [];
    var incMarAvg = [];

    $(function () {
      $scope.data.forEach(function(e) {
        items.push(e.item);
        incSales.push([e.IncSalesMin, e.IncSalesMax]);
        incSalesAvg.push(e.IncSalesMean);
        incVol.push([e.VolSalesMin, e.VolSalesMax]);
        incVolAvg.push(e.VolSalesMean);
        incMar.push([e.MarSalesMin, e.MarSalesMax]);
        incMarAvg.push(e.MarSalesMean);
        if(e.followUp || e.action) {
          $scope.actions.push(e);
        }
      });

      var charts = [],
          $containers = $('#trellis td'),
          datasets = [
            {
              name: 'Incremental<br />Sales<br /><span style="color:gray">$ Thousands</span>',
              data: incSales,
              avg: incSalesAvg
            },
            {
              name: 'Incremental<br />Volume<br /><span style="color:gray">$ Thousands</span>',
              data: incVol,
              avg: incVolAvg
            },
            {
              name: 'Incremental<br />Margins<br /><span style="color:gray">$ Thousands</span>',
              data: incMar,
              avg: incMarAvg
            }
          ];

      $.each(datasets, function(i, dataset) {
        charts.push(
          new Highcharts.Chart({
            chart: {
              renderTo: $containers[i],
              type: 'columnrange',
              marginLeft: i === 0 ? 110 : 10,
              inverted: true,
              plotBackgroundColor: i % 2 === 0 ? '#EEE' : '#FFF'
            },

            title: {
              text: dataset.name,
              x: i === 0 ? 110 : 0,
              y: 15, // vertical placement of "$ Thousands"
              align: 'left', // 90 if align left, 45 if align center
              style: {
                fontSize: '12px',
                lineHeight: 1
              },
              useHTML: true
            },

            credits: {
              enabled: false
            },

            xAxis: {
              categories: items,
              labels: {
                enabled: i === 0,
                align: 'left',
                x: -110,
                style: {
                  fontWeight: 'bold'
                }
              },
              tickLength: 0,
              lineWidth: 0,
              gridLineWidth: 1 // light gray horizontal lines that separates each brand
            },

            yAxis: {
              title: {
                text: null
              },
              plotLines: [{
                color: 'black',
                value: 0,
                width: 2, // thick black vertical line that makes the "0" value
                zIndex: 5 // puts the vertical line above everything else
              }],
              gridLineWidth: 0,
              labels: {
                style: {
                  'fontSize': '10px'
                }
              }
            },

            legend: {
              enabled: false
            },

            plotOptions: {
              columnrange: {
                negativeColor: 'orange',
                dataLabels: {
                  enabled: true
                },
                pointWidth: 20, // fixed thickness for each bar
              }
            },

            tooltip: {
              formatter: function() {
                console.log(this.point);
                return '<b>Min:</b> ' + this.point.low + '<br />' +
                       '<b>Avg:</b> ' + this.point + '<br />' +
                       '<b>Max:</b> ' + this.point.high;
              }
            },

            series: [dataset]
          })
        );
      });

    });
  });
