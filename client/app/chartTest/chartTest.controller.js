'use strict';

angular.module('retailDashboardApp')
  .factory('CategoryDataFactory', function($resource) {
    return $resource('/api/categories',
      {
        id: '@_id'
      },
      {
        getCategoryData: {
          method: 'GET',
          isArray: true
        }
      }
    );
  })
  .controller('CharttestCtrl', function ($scope, CategoryDataFactory) {

    CategoryDataFactory.getCategoryData().$promise.then(function(data){
      $scope.showGraph(data);
    });
    $scope.data = CategoryDataFactory.getCategoryData();

    $scope.chart = null;
    $scope.showGraph = function(data) {
      $scope.chart = c3.generate({
        bindto: '#chart1',
        size: {
          height: 320,
          width: 170
        },
        data: {
          json: data,
            keys: {
               x: 'item', // it's possible to specify 'x' when category axis
              value: ['numEvents'],
            },
            types: {
              numEvents: 'bar'
            },
            labels: true,
        },
        axis: {
          rotated: true,
          x: {
            type: 'category',
            show: true
          },
          y: {
            show: true,
            type: 'category',
            max: 1000000000000,
            label: {
              text: '# of Events',
              position: 'outer-center'
            },
            tick: {
              count: 0,
              culling: {
                max: 2
              }
            }
          }
        },
        // grid: {
        //   y: {
        //     lines: [{show: true,
        //       value: 0,
        //     }]
        //   },
        //   x: {
        //     show: true,
        //   }
        // },
        legend: {
          show: false
        }
      });
      $scope.chart = c3.generate({
        bindto: '#chart2',
        size: {
          height: 320,
          width: 90
        },
        data: {
          json: data,
            keys: {
               x: 'item',
              value: ['sales'],
            },
            types: {
              sales: 'bar'
            },
            labels: true,
        },
        axis: {
          rotated: true,
          x: {
            type: 'category',
            show: false
          },
          y: {
            show: true,
            type: 'category',
            max: 150,
            label: {
              text: 'Incremental Sales $ Tousands',
              position: 'outer-center'
            },
            tick: {
              count: 0,
              culling: {
                max: 2
              }
            }
          }
        },
        grid: {
          y: {
            lines: [{show: true,
              value: 0,
            }]
          },
          x: {
            show: true,
          }
        },
        legend: {
          show: false
        }
      });
      $scope.chart = c3.generate({
        bindto: '#chart3',
        size: {
          height: 320,
          width: 90
        },
        data: {
          json: data,
            keys: {
               x: 'item',
              value: ['volume'],
            },
            types: {
              volume: 'bar'
            },
            labels: true,
        },
        axis: {
          rotated: true,
          x: {
            type: 'category',
            show: false
          },
          y: {
            show: true,
            type: 'category',
            // max: 150,
            label: {
              text: 'Incremental Volume Tousands',
              position: 'outer-center'
            },
            tick: {
              count: 0,
              culling: {
                max: 2
              }
            }
          }
        },
        grid: {
          y: {
            lines: [{show: true,
              value: 0,
            }]
          },
          x: {
            show: true,
          }
        },
        legend: {
          show: false
        }
      });
      $scope.chart = c3.generate({
        bindto: '#chart4',
        size: {
          height: 320,
          width: 90
        },
        data: {
          json: data,
            keys: {
               x: 'item',
              value: ['margin'],
            },
            types: {
              margin: 'bar'
            },
            labels: true,
        },
        axis: {
          rotated: true,
          x: {
            type: 'category',
            show: false
          },
          y: {
            show: true,
            type: 'category',
            // max: 150,
            label: {
              text: 'Incremental Margin $ Tousands',
              position: 'outer-center'
            },
            tick: {
              count: 0,
              culling: {
                max: 2
              }
            }
          }
        },
        grid: {
          y: {
            lines: [{show: true,
              value: 0,
            }]
          },
          x: {
            show: true,
          }
        },
        legend: {
          show: false
        }
      });
      $scope.chart = c3.generate({
        bindto: '#chart5',
        size: {
          height: 320,
          width: 90
        },
        data: {
          json: data,
            keys: {
               x: 'item',
              value: ['profit'],
            },
            types: {
              profit: 'bar'
            },
            labels: true,
        },
        axis: {
          rotated: true,
          x: {
            type: 'category',
            show: false
          },
          y: {
            show: true,
            type: 'category',
            // max: 150,
            label: {
              text: 'Incremental Profit $ Tousands',
              position: 'outer-center'
            },
            tick: {
              count: 0,
              culling: {
                max: 2
              }
            }
          }
        },
        grid: {
          y: {
            lines: [{show: true,
              value: 0,
            }]
          },
          x: {
            show: true,
          }
        },
        legend: {
          show: false
        }
      });
      $scope.chart = c3.generate({
        bindto: '#chart5',
        size: {
          height: 320,
          width: 90
        },
        data: {
          json: data,
            keys: {
               x: 'item',
              value: ['profit'],
            },
            types: {
              profit: 'bar'
            },
            labels: true,
        },
        axis: {
          rotated: true,
          x: {
            type: 'category',
            show: false
          },
          y: {
            show: true,
            type: 'category',
            // max: 150,
            label: {
              text: 'Incremental Profit $ Tousands',
              position: 'outer-center'
            },
            tick: {
              count: 0,
              culling: {
                max: 2
              }
            }
          }
        },
        grid: {
          y: {
            lines: [{show: true,
              value: 0,
            }]
          },
          x: {
            show: true,
          }
        },
        legend: {
          show: false
        }
      });
      $scope.chart = c3.generate({
        bindto: '#chart6',
        size: {
          height: 320,
          width: 90
        },
        data: {
          json: data,
            keys: {
               x: 'item',
              value: ['transactions'],
            },
            types: {
              transactions: 'bar'
            },
            labels: true,
        },
        axis: {
          rotated: true,
          x: {
            type: 'category',
            show: false
          },
          y: {
            show: true,
            type: 'category',
            // max: 150,
            label: {
              text: 'Incremental Transactions Tousands',
              position: 'outer-center'
            },
            tick: {
              count: 0,
              culling: {
                max: 2
              }
            }
          }
        },
        grid: {
          y: {
            lines: [{show: true,
              value: 0,
            }]
          },
          x: {
            show: true,
          }
        },
        legend: {
          show: false
        }
      });
      $scope.chart = c3.generate({
        bindto: '#chart7',
        size: {
          height: 320,
          width: 90
        },
        data: {
          json: data,
            keys: {
               x: 'item',
              value: ['impact'],
            },
            types: {
              impact: 'bar'
            },
            labels: true,
        },
        axis: {
          rotated: true,
          x: {
            type: 'category',
            show: false
          },
          y: {
            show: true,
            type: 'category',
            // max: 150,
            label: {
              text: 'Basket Sales Impact $ Tousands',
              position: 'outer-center'
            },
            tick: {
              count: 0,
              culling: {
                max: 2
              }
            }
          }
        },
        grid: {
          y: {
            lines: [{show: true,
              value: 0,
            }]
          },
          x: {
            show: true,
          }
        },
        legend: {
          show: false
        }
      });
    };
  })
  ;
