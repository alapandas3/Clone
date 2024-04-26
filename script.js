let counter = false; let counter1 = false; let counter2 = false;
const li = document.getElementsByClassName(".menu-item");
const buttons = document.querySelectorAll('.expand-btn');

buttons.forEach(button => {
    const bar = document.getElementById('bi-arrow-down');

    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);

        if (targetDiv.style.display === 'contents') {

            targetDiv.style.display = 'none';
        } else {
            bar.style.paddingBottom = '5px';
            targetDiv.style.display = 'contents';
        }
    });
});

function expand(param) {
    const element = document.getElementById(param);
    const parentNode = element.parentNode;
    parentNode.classList.contains('menu-opened') ?
        parentNode.classList.remove('menu-opened') :
        parentNode.classList.add('menu-opened');


    // if (!counter2) {
    //     console.log("open");
    //     keys.classList.add('text-danger');
    //     keys.classList.add('bg-dark');

    // }
    // else {
    //     console.log("close");
    //     keys.classList.remove('text-danger');
    //     keys.classList.remove('bg-dark');
    // }
    // counter2 = !counter2;

}
/*
1. Get the buton element reference
2. Add click event listener to it
3. 
*/
const navbarTogglerIcon = document.querySelector('.navbar-toggler ');
navbarTogglerIcon.addEventListener('click', function () {
    const element = document.getElementById('sidebar');

    if (!element.classList.contains('sidebar-open')) {
        element.classList.add('sidebar-open');
    } else {
        element.classList.remove('sidebar-open');
    }
})


function hidesidebar() {
    const sidebar = document.getElementById("sidebar");

    if (counter) {
        sidebar.style.transform = 'translateX(-100%)';
        setTimeout(() => {

            sidebar.style.display = 'none';
        }, 200);
        navbarTogglerIcon.innerHTML = '<span class="navbar-toggler-icon"></span>';
    } else {
        sidebar.style.display = 'block';
        setTimeout(() => {
            sidebar.style.transform = 'translateX(0)'; // Move sidebar onto screen
        }, 50);
        navbarTogglerIcon.innerHTML = '<i class="bi bi-x-lg"></i>';
    }
    counter = !counter; // Toggle counter value

}




const data = [
    { url: "https://www.redwaynetworks.com/wp-content/uploads/revslide1.mp4", text: "The Network &amp; Wireless Experts ", subheading: " Cloud-Based Networking. Made Simple." },
    { url: "https://www.redwaynetworks.com/wp-content/uploads/next-generation-wifi.mp4", text: "Next-Gen Wireless Solutions ", subheading: " Future-Ready Capacity, Speed And Management." },
    { url: "https://www.redwaynetworks.com/wp-content/uploads/complex-wifi.mp4", text: "Delivering It Solutions For Smarter, Hybrid Spaces ", subheading: " Cloud-Based Networking. Made Simple." },
    { url: "https://www.redwaynetworks.com/wp-content/uploads/revslide4.mp4", text: "Total Network Security ", subheading: " Cloud-Managed Defence. Built For Agile, Scaling Networks." },

]
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('myVideo');
    const additionalText = document.getElementById('playerheading');
    const lower = document.getElementById('playersubheading')
    let currentIndex = 0;


    function playNextVideo() {
        video.src = data[currentIndex].url;

        additionalText.innerHTML = data[currentIndex].text;
        lower.innerHTML = data[currentIndex].subheading


        currentIndex = (currentIndex + 1) % data.length;
    }

    playNextVideo();

    video.addEventListener('ended', playNextVideo);
});
