Mahjong.directive('triggerModal', function() {
    return {
        link: function(scope, element, attrs){

            element.on('click', function(){
                $('body').append('<div class="modal-backdrop fade in"></div>');

                var modal = $(attrs.triggerModal);

                modal.css({ display: 'block' })
                    .addClass('in')
                    .triggerHandler('shown.bs.modal');

                modal.find('[data-dismiss]').on('click', function(){
                    $('.modal-backdrop').remove();
                    modal.css({ display: 'none' })
                        .removeClass('in')
                        .triggerHandler('hidden.bs.modal');
                    modal.find('[data-dismiss]')
                          .off('click');
                });

            })
        }
    }
});
