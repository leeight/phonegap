/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * www/js/HomeView.js ~ 2014/03/08 23:11:34
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
var HomeView = function (adapter, template, listItemTemplate) {
 
    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
    };

    this.render = function() {
        this.el.html(template());
        return this;
    };
 
    this.findByName = function() {
        adapter.findByName($('.search-key').val()).done(function(employees) {
            $('.employee-list').html(listItemTemplate(employees));
        });
    };

    this.initialize();
}




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
