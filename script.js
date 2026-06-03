const galleryData = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
        category: 'nature',
        alt: 'Misty Mountains'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        category: 'architecture',
        alt: 'Modern Architecture'
    },
    {
        id: 3,
        src: 'https://plus.unsplash.com/premium_photo-1661963423747-686b37c59aea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8J1JlZCUyMEZveCd8ZW58MHx8MHx8fDA%3D',
        category: 'animals',
        alt: 'Red Fox'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80',
        category: 'nature',
        alt: 'Forest River'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1525381846010-6463f02f61ac?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWluaW1hbGlzdCUyMFN0YWlyc3xlbnwwfHwwfHx8MA%3D%3D',
        category: 'architecture',
        alt: 'Minimalist Stairs'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&q=80',
        category: 'animals',
        alt: 'Cat Close Up'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80',
        category: 'nature',
        alt: 'Forest from Above'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
        category: 'architecture',
        alt: 'Building Facade'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80',
        category: 'animals',
        alt: 'Dog Profile'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
        category: 'nature',
        alt: 'Mountain Lake'
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        category: 'architecture',
        alt: 'Office Interior'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80',
        category: 'animals',
        alt: 'Cheetah'
    },
    {
        id: 13,
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
        category: 'nature',
        alt: 'Forest Light'
    },
    {
        id: 14,
        src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80',
        category: 'architecture',
        alt: 'City Skyline'
    },
    {
        id: 15,
        src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80',
        category: 'animals',
        alt: 'Lion'
    },
    {
        id: 16,
        src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80',
        category: 'nature',
        alt: 'Waterfall'
    },
    {
        id: 17,
        src: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&q=80',
        category: 'architecture',
        alt: 'Curved Building'
    },
    {
        id: 18,
        src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800&q=80',
        category: 'animals',
        alt: 'Turtle'
    },
    {
        id: 19,
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
        category: 'nature',
        alt: 'Mountain Range'
    },
    {
        id: 20,
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
        category: 'architecture',
        alt: 'Bridge'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaptionTitle = document.getElementById('lightbox-caption-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.getElementById('close-lightbox');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentImages = [];
    let currentIndex = 0;

    function renderGallery(filter = 'all') {
        galleryGrid.innerHTML = '';
        currentImages = galleryData.filter(item => filter === 'all' || item.category === filter);
        
        currentImages.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            // Setting up inner HTML for each item
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.alt}" loading="lazy">
                <div class="overlay-content">
                    <span class="category">${item.category}</span>
                    <i class="fas fa-search-plus zoom-icon"></i>
                </div>
            `;
            
            // Add click listener to open lightbox
            galleryItem.addEventListener('click', () => openLightbox(index));
            galleryGrid.appendChild(galleryItem);
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            
            galleryGrid.style.opacity = '0';
            setTimeout(() => {
                renderGallery(filter);
                galleryGrid.style.opacity = '1';
            }, 300);
        });
    });

    // Initial transition style for the grid
    galleryGrid.style.transition = 'opacity 0.3s ease';

    
    function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling in background
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    function updateLightboxContent() {
        const item = currentImages[currentIndex];
        // Request higher resolution for lightbox image
        lightboxImg.src = item.src.replace('w=800', 'w=1200');
        lightboxImg.alt = item.alt;
        lightboxCaptionTitle.textContent = item.alt;
        
        // Dynamic description
        lightboxDesc.textContent = item.desc || `A beautiful ${item.category} photograph capturing the essence of ${item.alt.toLowerCase()}.`;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightboxContent();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightboxContent();
    }

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        showNextImage();
    });
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrevImage();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
    });

    renderGallery();
});
