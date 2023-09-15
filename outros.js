document.addEventListener('mousewheel', function(e) {
    const delta = e.wheelDelta;
    if (!e.ctrlKey) {
        window.scrollBy(0, -delta * 3);
        e.preventDefault();
    }
}, { passive: false });
