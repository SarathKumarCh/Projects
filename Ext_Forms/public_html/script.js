/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.onReady(function() {
         Ext.create('Ext.form.Panel', {
            id: 'newForm',
            renderTo: 'form',
            align:'center',
            border: true,
            width: 800,
            items: [{
               xtype: 'textfield',
               fieldLabel: 'First Name'
            },{
               xtype: 'textfield',
               fieldLabel: 'Last Name'
            },{
               xtype: 'displayfield',
               fieldLabel: 'Display label'
            },{
               xtype: 'textarea',
               fieldLabel: 'Description'
            },{
               xtype: 'datefield',
               fieldLabel: 'Date Availablity to join Project'
            },{
               xtype: 'fieldcontainer',
               fieldLabel: 'Gender',
               defaultType: 'radiofield',
               defaults: {
                  flex: 1
               },
               layout: 'hbox',
               items: [{
                  boxLabel: 'Male',
                  inputValue: 'male',
                  id: 'radio1'
               },{
                  boxLabel: 'Female',
                  inputValue: 'female',
                  id: 'radio2'
               },{
                  boxLabel: 'Others',
                  inputValue: 'others',
                  id: 'radio3'
               }]
            },{
               xtype: 'fieldcontainer',
               fieldLabel: 'Technologies Worked',
               defaultType: 'checkboxfield',
               items: [{
                  boxLabel: 'HTML',
                  inputValue: 'html',
                  id: 'checkbox1'
               },{
                  boxLabel: 'CSS',
                  inputValue: 'css',
                  checked: true,
                  id: 'checkbox2'
               },{
                  boxLabel: 'JavaScript',
                  inputValue: 'js',
                  id: 'checkbox3'
               }]
            },{
               xtype: 'hiddenfield',
               name: 'hidden field ',
               value: 'value from hidden field'
            },{
               xtype: 'numberfield',
               anchor: '100%',
               fieldLabel: 'Work Experience',
               maxValue: 60,
               minValue: 0
            },{
               xtype: 'timefield',
               fieldLabel: 'Time Available today to phone call',
               minValue: '8:00 AM',
               maxValue: '8:00 PM',
               increment: 30,
               anchor: '100%'
            },{
               xtype: 'combobox',
               fieldLabel: 'Work Authorization',
               store: Ext.create('Ext.data.Store', {
                        fields: ['abbr', 'name'],
                        data: [{
                           'abbr': 'H1B',
                           'name': 'H1B'
                        },{
                           'abbr': 'Green Card',
                           'name': 'Green Card'
                        },{
                           'abbr': 'OPT EAD',
                           'name': 'opt EAD'
                        },{
                           'abbr': 'Others',
                           'name': 'others'
                        }]
                     }),
               valueField: 'abbr',
               displayField: 'name'
            },{
               xtype: 'filefield',
               fieldLabel: 'Attach Resume',
               labelWidth: 50,
               msgTarget: 'side',
               allowBlank: false,
               anchor: '100%',
               buttonText: 'Select File...'
            },{
                xtype: 'button',
                text: 'Submit Application'
                
            }]
         });
      });