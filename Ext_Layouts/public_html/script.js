/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.onReady(function() {
         Ext.create('Ext.tab.Panel', {
            renderTo: 'layout1',
            requires: ['Ext.layout.container.Card'],
            xtype: 'layout-cardtabs',
            width: 600,
            height: 200,
            items:[{
               title: 'Home',
               html:   'This is the Home tab.'
            },{
               title: 'About US',
               html: 'This is About us tab.'
            },{
               title: 'Settings',
               html: 'This is Settings tab.'
            }]
         });
         
         Ext.create('Ext.panel.Panel', {
            renderTo: 'layout2',
            requires: [
            'Ext.layout.container.Card'],
            layout: 'card',
            width: 600,
            height: 200,
            bodyPadding: 15,
            defaults: {
               border:false
            },
            defaultListenerScope: true,
            bbar: ['->',
            {
               itemId: 'card-prev',
               text: '« Previous',
               handler: 'showPrevious',
               disabled: true
            },{
               itemId: 'card-next',
               text: 'Next »',
               handler: 'showNext'
            }],

            items: [{
               id: 'card0',
               html: '<h2> This is a card wizard layout </h2> <p> This is the first card </p> <p> Please click the "Next" button to continue... </p>'
            },{
               id: 'card1',
               html: '<p> This is the second card </p> <p> Please click the "Next" button for next card and "Previous" button for previous card... </p>'
            },{
               id: 'card2',
               html: '<p> This is the final card </p> <p> Please click the "Previous" button for previous card... </p>'
            }],
            
            showNext: function () {
               this.cardPanelNavigation(1);
            },
            
            showPrevious: function (btn) {
               this.cardPanelNavigation(-1);
            },

            cardPanelNavigation: function (incr) {
               var me = this;
               var l = me.getLayout();
               var i = l.activeItem.id.split('card')[1];
               var next = parseInt(i, 10) + incr;
               l.setActiveItem(next);
               me.down('#card-prev').setDisabled(next===0);
               me.down('#card-next').setDisabled(next===2);
            }
         });
      
      
        Ext.create('Ext.panel.Panel', {
            renderTo : 'layout3',
            layout : 'column' ,
              xtype: 'layout-column',
            requires: ['Ext.layout.container.Column'],
            width : 600,
            items: [{
               title : 'First Component width 30%',
               html : 'This is First Component',
               columnWidth : 0.30
            },{
               title : 'Second Component width 40%',
               html : '<p> This is Second Component </p> <p> Next line for second component </p>',
               columnWidth : 0.40
            },{
               title : 'Third Component width 30%',
               html : 'This is Third Component' ,
               columnWidth : 0.30
            }]
         });
      });

