/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * www/js/EmployeeView.js ~ 2014/03/08 23:16:42
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
var EmployeeView = function(adapter, template, employee) {
 
    this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.add-contact-btn', this.addToContacts);
    };
 
    this.render = function() {
        this.el.html(template(employee));
        return this;
    };

    this.addToContacts = function(event) {
        event.preventDefault();
        console.log('addToContacts');
        if (!navigator.contacts) {
            alert("Contacts API not supported", "Error");
            return;
        }
        var contact = navigator.contacts.create();
        contact.name = {givenName: employee.firstName, familyName: employee.lastName};
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', employee.officePhone, false);
        phoneNumbers[1] = new ContactField('mobile', employee.cellPhone, true);
        contact.phoneNumbers = phoneNumbers;
        contact.save();
        return false;
    };

    this.initialize();
 
}




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
