// StPageFlip Portfolio Initialization

document.addEventListener('DOMContentLoaded', function() {
    // Initialize PageFlip with official configuration
    const pageFlip = new St.PageFlip(document.getElementById('book'), {
        width: 550,              // Base page width
        height: 733,             // Base page height (A4 proportion)
        size: "stretch",         // Automatically adapt to container
        minWidth: 350,           // Minimum page width
        maxWidth: 700,           // Maximum page width
        minHeight: 467,          // Minimum page height
        maxHeight: 933,          // Maximum page height
        showCover: true,         // First and last pages as covers
        drawShadow: true,        // Realistic shadows
        flippingTime: 1000,      // 1 second animation
        usePortrait: true,       // Enable portrait mode on small screens
        mobileScrollSupport: true,
        maxShadowOpacity: 0.5,   // Shadow opacity
        autoSize: true,          // Auto-size to parent container
        startZIndex: 0
    });

    // Load pages from HTML
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            pageFlip.flipPrev();
        } else if (e.key === 'ArrowRight') {
            pageFlip.flipNext();
        }
    });

    // Optional: Log page changes
    pageFlip.on('flip', (e) => {
        console.log('Current page:', e.data);
    });

    // Optional: Log orientation changes
    pageFlip.on('changeOrientation', (e) => {
        console.log('Orientation:', e.data);
    });
});
