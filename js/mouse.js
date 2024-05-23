document.addEventListener('mousemove', function(e) {
    const circle = document.getElementById('circle');
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        document.getElementById('circle').classList.add('hover');
    });

    button.addEventListener('mouseout', () => {
        document.getElementById('circle').classList.remove('hover');
    });
});
