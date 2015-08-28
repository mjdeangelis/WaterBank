/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// run when page is ready
$(document).ready(function(){

    // create variable to hold the current modal window
    var activeWindow;

    $('a.modal-link').click(function(e){

        // cancel the default link behaviour
        e.preventDefault();

        // find the href of the link that was clicked to use as an id
        var id = $(this).attr('href');

        // assign the window with matching id to the activeWindow variable, move it to the center of the screen and fade in
        activeWindow = $('.modal-window' + id).css('opacity', '0').css('top', '20%').css('left', '10%').fadeTo(500, 1);

        // create blind and fade in
        $('#modal')
            .append('<div id="blind" />') // create a <div> with an id of 'blind'
            .find('#blind') // select the div we've just created
            .css('opacity', '0') // set the initial opacity to 0
            .fadeTo(500, 0.8) // fade in to an opacity of 0.8 (80%) over 500 milliseconds
            .click(function(e){
                closeModal(); // close modal if someone clicks anywhere on the blind (outside of the window)
            });

    });

    $('a.close .x-icon').click(function(e){
            // cancel default behaviour
            e.preventDefault();

            // call the closeModal function passing this close button's window
            closeModal();
    });

    $("button").on("click", function() {
        $(this).toggleClass("button-active");
    });     

    function closeModal()
    {

        // fade out window and then move back to off screen when fade completes
        activeWindow.fadeOut(250, function(){ $(this).css('display:', 'none') });

        // fade out blind and then remove it
        $('#blind').fadeOut(250,    function(){ $(this).remove(); });

    }




});
