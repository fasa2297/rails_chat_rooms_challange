$(function() {
  $('#new_room_message').on('ajax:success', function(a, b,c ) {
    $(this).find('input[type="text"]').val('');
  });
});



// $.ajax({
//   url: '/room_messages',
//   type: 'POST',
//   data: {
//     // Your data here
//   },
//   headers: {
//     'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
//   },
//   success: function(response) {
//     // Handle success
//   },
//   error: function(xhr, status, error) {
//     // Handle error
//   }
// });