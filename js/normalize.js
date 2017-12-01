$( document ).ready(function() {
  if(location.href.indexOf("#About") != -1) {
    showIntroduction();
  }
});

function showIntroduction() {
    $('#introduction').removeClass('notShow');
    $('#introduction-title').addClass('notShow');
}
