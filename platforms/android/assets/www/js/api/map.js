/***************************************************************************
 *
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/



/**
 * www/js/api/map.js ~ 2014/03/08 21:38:58
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$
 * @description
 *
 **/
window.addEventListener('load', onload, false);

function onload() {
    console.log( 'window.onload' );
    document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(
      function( position ){
          console.log( 'HELLO:API:MAP:OK' );
          initializeMap(
              position.coords.latitude,
              position.coords.longitude
          )
      },
      function(){
          console.log( 'HELLO:API:MAP:FAIL' );
          initializeMap( 43.069452, -89.411373 )
      });
};

function initializeMap( latitude, longitude ) {
    var map = new BMap.Map("map");
    var point = new BMap.Point( longitude, latitude );
    map.centerAndZoom(point, 14);
    map.enableDragging();
}


















/* vim: set ts=4 sw=4 sts=4 tw=100: */
