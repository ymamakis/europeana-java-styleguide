define(['jquery'], function ($) {
  'use strict';

  function validateProfileForm() {
    var role = $('form').data('role'),
      mode = $('form').data('view-mode');

    if (mode === 'preview') {
      $('.preview-block-btn').toggleClass('hidden');
    } else {
      $('.editable-block-btns').toggleClass('hidden');
    }

    $('.edit').click(function () {
      var mode = $('form').data('view-mode');

      $('form').attr('data-view-mode', 'update');
      $('.preview-block-btn').toggleClass('hidden');
      $('.editable-block-btns').toggleClass('hidden');

      if (role === 'europeana') {
        $('.eu').attr('readonly', false);
        $('.eu').attr('disabled', false);
      }
    });

    $('.cancel').click(function () {

      if ($('.cancel').hasClass('preview') || $('.cancel').hasClass('update')) {
        $('.eu, .prov').attr('readonly', true);
        $('.eu, .prov').attr('disabled', true);
        $('form').attr('data-view-mode', 'preview');
        $('.cancel').toggleClass('update preview');
      }

      $('.preview-block-btn').toggleClass('hidden');
      $('.editable-block-btns').toggleClass('hidden');
    });

    // TODO : define the action to be taken after submitting changes.
    $('.submit').click(function () {
      console.log('role ', role);
      console.log('view ', mode);
      console.log('submit form and take me to ...');
    });
  }

  function formInit() {
    validateProfileForm();
    $('.edit').click(function () {
    });
  }

  return {
    formInit: function () {
      formInit();
    }
  };
});
