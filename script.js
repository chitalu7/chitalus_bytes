document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Enhancing the hover effect to show text in black inside the cursor
document.querySelectorAll('.hidden-text').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.getElementById('cursor').style.backgroundColor = 'white';
        item.style.color = 'black';
        item.style.visibility = 'visible';
    });

    item.addEventListener('mouseleave', () => {
        document.getElementById('cursor').style.backgroundColor = 'transparent';
        item.style.color = 'white';
    });
});