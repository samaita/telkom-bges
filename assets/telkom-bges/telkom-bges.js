var appUrl = 'http://localhost/studio/telkom-bges/server/index.php/app/'

function ready(){
  $.ajax({
      type: "POST",
      url: appUrl + 'ready',
      success: function(html){
        data = jQuery.parseJSON(html);
        if(data.result){
          console.log('Success')
        }
        else {
          console.log('Denied')
        }
      },
    });
}

function signIn(){
  nik = $('#signin-nik').val();
  pass = $('#signin-pass').val();
  $.ajax({
      type: "POST",
      url: appUrl + 'signIn',
      data: "param1="+nik+"&param2="+pass,
      success: function(html){
        data = jQuery.parseJSON(html);
        if(data.result){
          localStorage.setItem('username', data.username);
          window.location.assign('app/index.html');
          console.log('Success');
        }
        else {
          console.log('Denied')
        }
      },
    });
}

function signOut(){
  $.ajax({
      type: "POST",
      url: appUrl + 'signOut',
      success: function(html){
        data = jQuery.parseJSON(html);
        if(data.result){
          localStorage.setItem('username', '');
          window.location.assign('../index.html');
        }
      },
    });
}

function modalFade(){
  $('#myModal').modal(options);
}
$(document).ready(function(){

});
