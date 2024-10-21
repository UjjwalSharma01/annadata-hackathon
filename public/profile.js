document.addEventListener('DOMContentLoaded', function() {
    const editBtn = document.querySelector('.edit-btn');
    const editForm = document.querySelector('.edit-form');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');
    const editPicture = document.querySelector('.editPicture');
    const icon = document.querySelector('.bi');


    editBtn.addEventListener('click', function() {
        editForm.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        editForm.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function() {
        // editForm.style.display = 'none';
        // overlay.style.display = 'none';
        editPicture.style.display='none';
    });
    icon.addEventListener('click',function(){
        editPicture.style.display='block';
        overlay.style.display='block';
        
    })
});
