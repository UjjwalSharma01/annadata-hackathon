document.getElementById('clip-upload').addEventListener('change', function() {
    var file = this.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(event) {
            var imageUrl = event.target.result;
            document.getElementById('imagePreview').innerHTML = '<img src="' + imageUrl + '" alt="Uploaded Image" class="preview-image" />';
        };
        reader.readAsDataURL(file);
    } else {
        document.getElementById('imagePreview').innerHTML = '';
    }
});

// To push the image along with the post to a database,
// you can use the 'file' variable to access the uploaded image data and include it
// in your database submission.

document.addEventListener('DOMContentLoaded', function() {
    googleTranslateElementInit();
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}