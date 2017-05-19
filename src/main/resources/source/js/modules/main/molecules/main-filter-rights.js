require.config({
  paths: {
   featureDetect:      '../../global/feature-detect',
    jquery:            '../../lib/jquery',
    global:            '../../eu/global',
    jqDropdown:        '../../lib/jquery/jquery.dropdown',
    menus:             '../../global/menus',
    util_scrollEvents: '../../eu/util/scrollEvents'
  },

  shim: {
    featureDetect:  ['jquery'],
    jqDropdown:     ['jquery'],
    menus:          ['jquery']
  }

});

require(['jquery', 'global'], function( $ ) {

   var log = function(msg){
     console.log(msg);
   }

   $(document).ready(function(){
     $('.filter-list a').on('click', function(e){
       e.preventDefault();
       var $tgt = $(e.target);
       if($tgt[0].nodeName == 'DIV'){
         $tgt = $tgt.closest('a');
       }
       $tgt.toggleClass('is-checked');

       if($tgt.closest('.filter-list').find('.filter-item.is-checked').size() > 0){
         if($tgt.closest('.subfilters').size() > 0){
           $tgt.closest('.subfilters').prev('.filter-item').addClass('is-checked');
         }
       }

       if(!$tgt.hasClass('is-checked') && $tgt.next('.subfilters').size() > 0){
         $tgt.next('.subfilters').find('.filter-item').removeClass('is-checked');
       }

     });
   });
});