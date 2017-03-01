(function ($) {
  // set fancy box for images in post
  // --------------------------------------------------------
    $('.article-entry').each(function (i) {
      $(this).find('img').each(function () {
        if ($(this).parent().hasClass('fancybox')) return

        var alt = this.alt

        if (alt) {
          $(this).after('<span class="caption">' + alt +
                        '</span>')
        }

        $(this).wrap('<a href="' + this.src + '" title="' + alt +
                    '" class="fancybox"></a>')
      })

      $(this).find('.fancybox').each(function () {
        $(this).attr('rel', 'article' + i)
      })
    })
    if ($.fancybox) {
      $('.fancybox').fancybox()
    }
  // --------------------------------------------------------

  // initiation all page
  init();
  var nowUrl = '';
  var menuItem;
  function init(){
    nowUrl = window.location.pathname.replace(/\//g,'');

    initMenu();
  }

  function initMenu(){
    menuItem = $('.main-nav-link');
    if(menuItem.length > 0){
      for(var i = 0,l = menuItem.length; i<l; i++){
        var tmpMenuItem =  $(menuItem[i]);
        var tmpModuleName = tmpMenuItem.attr('href').replace(/\//g,'');

        if(tmpModuleName == nowUrl){
          tmpMenuItem.addClass('disable');
        }

        tmpMenuItem.on('click touchstart', function(e){
          if($(this).hasClass('disable')){
            e.stopPropagation();
            return false;
          }
        });

        /*
        * hide about page temporarily cos i'am not prepared
        */
        if(tmpModuleName == 'about'){
          tmpMenuItem.addClass('disable');
        }
      }
    }
  }



})(jQuery)
