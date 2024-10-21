function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

window.onload = function() {
    var modal = document.getElementById('languageModal');
    var closeBtn = document.getElementsByClassName('close')[0];

    // Show modal on page load
    modal.style.display = "flex";

    // Close modal when clicking the close button
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Initialize Google Translate
    googleTranslateElementInit();

    // Wait for the Google Translate element to be fully loaded
    var checkExist = setInterval(function() {
        var selectElement = document.querySelector('.goog-te-combo');
        if (selectElement) {
            clearInterval(checkExist);
            
            // Add event listener to the select element
            selectElement.addEventListener('change', function() {
                modal.style.display = "none";
            });
        }
    }, 100);
}