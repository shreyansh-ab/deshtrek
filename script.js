// Dismissible notice banner with localStorage memory
document.addEventListener('DOMContentLoaded', function(){
  var banner = document.getElementById('noticeBanner');
  var closeBtn = document.getElementById('closeBannerBtn');
  try{
    var dismissed = localStorage.getItem('deshtrek_notice_dismissed');
    if(!dismissed && banner){ banner.style.display = 'flex'; }
  }catch(e){ if(banner){ banner.style.display = 'flex'; } }

  if(closeBtn){
    closeBtn.addEventListener('click', function(){
      if(banner){ banner.style.display = 'none'; }
      try{ localStorage.setItem('deshtrek_notice_dismissed','1'); }catch(e){}
    });
  }
});