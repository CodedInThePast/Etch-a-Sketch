const gridContainer = document.getElementById('grid');

// Create 256 divs (16x16)
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    
    gridContainer.appendChild(div);
}
