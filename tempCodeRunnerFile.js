 buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId);
            if (targetDiv.style.display === 'contents') {
                targetDiv.style.display = 'none';
            } else {
                targetDiv.style.display = 'contents';
            }
        });
    });