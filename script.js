document.addEventListener("DOMContentLoaded", function() {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbarNav',
        offset: 100
    });

    var skillBoxes = document.querySelectorAll('.skill-box');
    window.addEventListener('scroll', function() {
        skillBoxes.forEach(box => {
            var boxPos = box.getBoundingClientRect().top;
            if (boxPos < window.innerHeight - 100 && boxPos > 0) {
                box.classList.add('in-view');
            }
        });
    });
});
function openProjectLink() {
    window.location.href = "https://efas.pupbataan.com"; // Redirect to the project link
}

