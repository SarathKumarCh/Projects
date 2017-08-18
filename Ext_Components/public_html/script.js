/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.onReady(function () {
         var childPanel1 = Ext.create('Ext.Panel', {
             html: 'This is the First Panel'
            
         });

         var childPanel2 = Ext.create('Ext.Panel', {
             html: 'This is second Panel'
         });

         Ext.create('Ext.panel.Panel', {
         renderTo: Ext.getBody(),
            width: 500,
            height : 200,
            border : true,
            frame : true,
            items: [ childPanel1, childPanel2 ]
         });
         
         
      });

