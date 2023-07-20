document.addEventListener('DOMContentLoaded', function() {
    var likeIcons = document.querySelectorAll('.like-icon');
  
    likeIcons.forEach(function(likeIcon) {
      likeIcon.addEventListener('click', function() {
        if (likeIcon.classList.contains('clicked')) {
          likeIcon.classList.remove('clicked');
        } else {
          likeIcon.classList.add('clicked');
        }
      });
    });
  });

  