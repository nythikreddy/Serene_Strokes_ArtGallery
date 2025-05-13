// JavaScript for toggling artist bio
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.artist-profile button').forEach(button => {
        button.addEventListener('click', function () {
            const shortBio = this.previousElementSibling;
            const longBio = shortBio.nextElementSibling;
            if (shortBio.classList.contains('d-none')) {
                shortBio.classList.remove('d-none');
                longBio.classList.add('d-none');
                this.textContent = 'Read More';
            } else {
                shortBio.classList.add('d-none');
                longBio.classList.remove('d-none');
                this.textContent = 'Read Less';
            }
        });
    });
});

// JavaScript for modal image view
function showArt(image) {
    const modalArt = document.getElementById('modalArt');
    modalArt.src = image.src;
}
