$( document ).ready(function() {
  if(location.href.indexOf("#About") != -1) {
    showIntroduction();
  }
});

function showIntroduction() {
    $('#introduction').removeClass('notShow');
    $('#introduction-title').addClass('notShow');
    $('#moreAboutMe').addClass('notShow');
    $('#followMe').removeClass('notShow');
}
