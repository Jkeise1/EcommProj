if (window.ONNIT && window.ONNIT.unity) {
    window.ONNIT.unity.configurePersonalize("c7f9c44f-6ff6-4e0a-9229-764162053601", "US", "DESKTOP", null);
    window.ONNIT.unity.identify(null);
}
(function ($) {
    
    if (window.ONNIT && window.ONNIT.cycle_header_messages) {
        window.ONNIT.cycle_header_messages.init();
        window.ONNIT.cycle_header_messages.rotate();
    }
})(jQuery);