(function() {
    'use strict';
    var dialogButton = document.querySelector('#dialogView');
    var dialog = document.querySelector('#dialog1');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialogButton.addEventListener('click', function() {
        dialog.showModal();
    });
    dialog.querySelector('button:not([disabled])')
        .addEventListener('click', function() {
            dialog.close();
        });
}());