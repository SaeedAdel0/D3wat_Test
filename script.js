document.addEventListener('DOMContentLoaded', function() {
    var dropdownArrow = document.querySelector('.dropdown-arrow');
    var dropdownContainer = document.querySelector('.dropdown-container');

    dropdownArrow.addEventListener('click', function() {
        dropdownContainer.classList.toggle('active');
        dropdownArrow.closest('.Event-item').classList.toggle('grid');
    });
});

function previewImages(event) {
    var preview = document.getElementById('imagePreview');
    preview.innerHTML = '';

    var files = event.target.files;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        reader.onload = function (e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('previewImage'); // Add class for styling
            img.addEventListener('click', function() {
                displayOriginalImage(this.src);
            });
            preview.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
}

function displayOriginalImage(src) {
    var modal = document.getElementById('modal');
    modal.innerHTML = '<img src="' + src + '">';
    modal.style.display = 'block';
    modal.addEventListener('click', function() {
        this.style.display = 'none';
    });
}


//  بعدين اذا عندنا API
// function initAutocomplete() {
//     var input = document.getElementById('locationInput');
//     var autocomplete = new google.maps.places.Autocomplete(input);
// }
// google.maps.event.addDomListener(window, 'load', initAutocomplete);