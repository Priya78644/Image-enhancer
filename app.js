document.getElementById('image-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.getElementById('enhanced-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
  
        document.getElementById('original-img').src = event.target.result;
  
        // Apply initial filters
        applyFilters();
      };
      img.src = event.target.result;
    };
  
    reader.readAsDataURL(file);
  });
  
  document.getElementById('brightness').addEventListener('input', applyFilters);
  document.getElementById('contrast').addEventListener('input', applyFilters);
  
  function applyFilters() {
    const canvas = document.getElementById('enhanced-canvas');
    const ctx = canvas.getContext('2d');
    const img = document.getElementById('original-img');
    if (!img.src) return;
  
    const brightness = document.getElementById('brightness').value;
    const contrast = document.getElementById('contrast').value;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = `brightness(${brightness}) contrast(${contrast})`;
    ctx.drawImage(img, 0, 0);
  }
  
  document.getElementById('download').addEventListener('click', function() {
    const canvas = document.getElementById('enhanced-canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'enhanced-image.png';
    link.click();
  });
  




  function createFlower() {
    const flowerContainer = document.querySelector('.flower-container');
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    // Randomize position and animation duration
    flower.style.left = Math.random() * 100 + '%';
    flower.style.animationDuration = Math.random() * 3 + 3 + 's';
  
    // Append flower to container
    flowerContainer.appendChild(flower);
  
    // Remove flower after animation completes
    flower.addEventListener('animationend', () => {
      flowerContainer.removeChild(flower);
    });
  }
  
  // Create flowers at intervals
  setInterval(createFlower, 500);
  