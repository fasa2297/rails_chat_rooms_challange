//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require bootstrap

// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//import "@hotwired/turbo-rails"
import "controllers"
import 'jquery'
import "./add_jquery.js";

$(function() {
    $('#new_room_message').on('ajax:success', function(a, b,c ) {
      $(this).find('input[type="text"]').val('');
    });
});

