/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Creation of data model
      Ext.define('StudentDataModel', {
         extend: 'Ext.data.Model',
         fields: [
         {name: 'name', mapping : 'name'},
         {name: 'age', mapping : 'age'},
         {name: 'marks', mapping : 'marks'}
         ]
      });

      Ext.onReady(function(){
         // Store data
         var myData = [
            { name : "Asha", age : "16", marks : "90" },
            { name : "Vinit", age : "18", marks : "95" },
            { name : "Anand", age : "20", marks : "68" },
            { name : "Niharika", age : "21", marks : "86" },
            { name : "Manali", age : "22", marks : "57" }
         ];
         // Creation of first grid store
         var gridStore = Ext.create('Ext.data.Store', {
         model: 'StudentDataModel',
         data: myData
         });
         // Creation of first grid
         Ext.create('Ext.grid.Panel', {
            id                : 'gridId',
            store             : gridStore,
            stripeRows        : true,
            title             : 'Students Grid', // Title for the grid
            renderTo          :'grid', // Div id where the grid has to be rendered
            width             : 600,
            collapsible       : true, // property to collapse grid
            enableColumnMove  :true, // property which alllows column to move to different position by dragging that column.
            enableColumnResize:true, // property which allows to resize column run time.
            columns           :
               [{ 
                  header: "Student Name",
                  dataIndex: 'name',	
                  id : 'name',    
                  flex:  1,  		 // property defines the amount of space this column is going to take in the grid container with respect to all.	
                  sortable: true, // property to sort grid column data. 
                  hideable: true  // property which allows column to be hidden run time on user request.
               },{
                  header: "Age", 
                  dataIndex: 'age',
                  flex: .5, 
                  sortable: true,
                   hideable: false // this column will not be available to be hidden.
               },{
                  header: "Marks",
                  dataIndex: 'marks',
                  flex: .5, 
                  sortable: true, 
                  // renderer is used to manipulate data based on some conditions here who ever has marks greater than 75 will be displayed as 'Distinction' else 'Non Distinction'.
                  renderer :  function (value, metadata, record, rowIndex, colIndex, store) {
                     if (value > 75) {
                        return "Distinction";	  
                     } else {
                        return "Non Distinction";
                     }
                  }
            }]
         });
      });
