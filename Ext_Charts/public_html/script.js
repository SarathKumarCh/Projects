/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.onReady(function() {
         Ext.create('Ext.chart.CartesianChart', {
            renderTo: 'barChart',
            width: 600,
            height: 200,
            flipXY: true,
            store: {
              fields: ['name', 'g1', 'g2'],
              data: [
                     {"name": "Maths", "g1": 57, "g2": 59},
                     {"name": "Chemistry", "g1": 45, "g2": 50},
                     {"name": "English", "g1": 67, "g2": 43},
                     {"name": "Physics", "g1": 45, "g2": 18},
                     {"name": "History", "g1": 30, "g2": 90}
              ]
            },  

            //set legend configuration
            legend: {
              docked: 'right'
            },

            //define the x and y-axis configuration.
            axes: [{
              type: 'numeric',
              position: 'bottom',
              grid: true,
              minimum: 0
            }, {
              type: 'category',
              position: 'left'
            }],

            //define the actual bar series.
            series: [{
              type: 'bar',
              xField: 'name',
              yField: ['g1', 'g2'],
              axis: 'left'
            }]
         });
         
         //line chart
         Ext.create('Ext.chart.CartesianChart', {
             renderTo: 'lineChart',
             width: 600,
             height: 200,
             store: {
                 fields: ['name', 'g1', 'g2'],
                 data: [
                        {"name": "Maths", "g1": 57, "g2": 59},
                        {"name": "Chemistry", "g1": 45, "g2": 50},
                        {"name": "English", "g1": 67, "g2": 43},
                        {"name": "Physics", "g1": 45, "g2": 18},
                        {"name": "History", "g1": 30, "g2": 90}

                 ]
             },

             legend: {
                 docked: 'bottom'
             },

             //define x and y axis.
             axes: [{
                 type: 'numeric',
                 position: 'left'
             }, {
                 type: 'category',
                 visibleRange: [0, 1],
                 position: 'bottom'
             }],

             //define the actual series
             series: [{
                 type: 'line',
                 xField: 'name',
                 yField: 'g1',
                 title: 'Normal'
             }, {
                 type: 'line',
                 xField: 'name',
                 yField: 'g2',
                 title: 'Smooth'
             }]
         });
      });
