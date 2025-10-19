// Sample video data - In a real application, this would come from an API
const videoData = [
    {
        id: 1,
        title: "Understanding Machine Learning Fundamentals",
        description: "A comprehensive overview of machine learning concepts, algorithms, and their practical applications in modern technology.",
        tags: ["AI", "Machine Learning", "Technology"],
        duration: "5:24",
        views: "1.2M",
        likes: "45K"
    },
    {
        id: 2,
        title: "Web Development Best Practices 2024",
        description: "Explore the latest trends and best practices in web development, from responsive design to performance optimization.",
        tags: ["Web Dev", "JavaScript", "CSS"],
        duration: "7:15",
        views: "890K",
        likes: "32K"
    },
    {
        id: 3,
        title: "Data Science Project Walkthrough",
        description: "Step-by-step guide through a real-world data science project, covering data collection, analysis, and visualization.",
        tags: ["Data Science", "Python", "Analytics"],
        duration: "10:42",
        views: "654K",
        likes: "28K"
    },
    {
        id: 4,
        title: "Cloud Computing Architecture Explained",
        description: "Deep dive into cloud computing architecture, exploring AWS, Azure, and Google Cloud Platform services and design patterns.",
        tags: ["Cloud", "DevOps", "Infrastructure"],
        duration: "8:30",
        views: "523K",
        likes: "19K"
    },
    {
        id: 5,
        title: "Mobile App Development with React Native",
        description: "Learn how to build cross-platform mobile applications using React Native, from setup to deployment.",
        tags: ["Mobile", "React Native", "Development"],
        duration: "12:18",
        views: "742K",
        likes: "35K"
    },
    {
        id: 6,
        title: "Cybersecurity Essentials for Developers",
        description: "Essential security practices every developer should know to protect applications and user data from common threats.",
        tags: ["Security", "DevSecOps", "Best Practices"],
        duration: "6:45",
        views: "445K",
        likes: "17K"
    },
    {
        id: 7,
        title: "Introduction to Blockchain Technology",
        description: "Understand the fundamentals of blockchain, cryptocurrencies, and decentralized applications in this comprehensive overview.",
        tags: ["Blockchain", "Crypto", "Web3"],
        duration: "9:20",
        views: "612K",
        likes: "24K"
    },
    {
        id: 8,
        title: "UI/UX Design Principles",
        description: "Master the core principles of user interface and user experience design to create intuitive and engaging digital products.",
        tags: ["Design", "UI/UX", "Product"],
        duration: "7:55",
        views: "823K",
        likes: "41K"
    }
];

class VideoOverviewApp {
    constructor() {
        this.currentVideoIndex = 0;
        this.videoFeed = document.getElementById('videoFeed');
        this.progressIndicator = document.getElementById('progressIndicator');
        this.isScrolling = false;
        
        this.init();
    }

    init() {
        this.renderVideos();
        this.setupEventListeners();
        this.createProgressIndicator();
        this.updateProgressIndicator();
    }

    renderVideos() {
        this.videoFeed.innerHTML = '';
        
        videoData.forEach((video, index) => {
            const videoCard = this.createVideoCard(video, index);
            this.videoFeed.appendChild(videoCard);
        });
    }

    createVideoCard(video, index) {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="video-placeholder">
                <div class="play-button" data-video-id="${video.id}">
                    <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
                <div class="video-number">${index + 1}/${videoData.length}</div>
            </div>
            
            <div class="video-content">
                <h2 class="video-title">${video.title}</h2>
                <p class="video-description">${video.description}</p>
                <div class="video-tags">
                    ${video.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
                <div class="video-meta">
                    <span class="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${video.duration}
                    </span>
                    <span class="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        ${video.views}
                    </span>
                </div>
            </div>
            
            <div class="action-buttons">
                <button class="action-btn" data-action="like" aria-label="Like">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span class="action-count">${video.likes}</span>
                </button>
                <button class="action-btn" data-action="share" aria-label="Share">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                    <span class="action-count">Share</span>
                </button>
                <button class="action-btn" data-action="bookmark" aria-label="Bookmark">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span class="action-count">Save</span>
                </button>
            </div>
        `;
        
        return card;
    }

    createProgressIndicator() {
        this.progressIndicator.innerHTML = '';
        
        videoData.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            dot.dataset.index = index;
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                this.scrollToVideo(index);
            });
            
            this.progressIndicator.appendChild(dot);
        });
    }

    updateProgressIndicator() {
        const dots = this.progressIndicator.querySelectorAll('.progress-dot');
        dots.forEach((dot, index) => {
            if (index === this.currentVideoIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    setupEventListeners() {
        // Navigation buttons
        document.getElementById('navUp').addEventListener('click', () => {
            this.navigateUp();
        });
        
        document.getElementById('navDown').addEventListener('click', () => {
            this.navigateDown();
        });
        
        // Scroll event
        let scrollTimeout;
        this.videoFeed.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                this.handleScroll();
            }, 150);
        });
        
        // Play button clicks
        this.videoFeed.addEventListener('click', (e) => {
            const playButton = e.target.closest('.play-button');
            if (playButton) {
                this.handlePlayClick(playButton);
            }
            
            // Handle action buttons
            const actionBtn = e.target.closest('.action-btn');
            if (actionBtn) {
                this.handleActionClick(actionBtn);
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateUp();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateDown();
            }
        });
        
        // Touch swipe support
        let touchStartY = 0;
        let touchEndY = 0;
        
        this.videoFeed.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        this.videoFeed.addEventListener('touchend', (e) => {
            touchEndY = e.changedTouches[0].clientY;
            this.handleSwipe(touchStartY, touchEndY);
        }, { passive: true });
    }

    handleScroll() {
        const scrollTop = this.videoFeed.scrollTop;
        const cardHeight = window.innerHeight;
        const newIndex = Math.round(scrollTop / cardHeight);
        
        if (newIndex !== this.currentVideoIndex && newIndex >= 0 && newIndex < videoData.length) {
            this.currentVideoIndex = newIndex;
            this.updateProgressIndicator();
        }
    }

    handleSwipe(startY, endY) {
        const swipeThreshold = 50;
        const diff = startY - endY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped up - next video
                this.navigateDown();
            } else {
                // Swiped down - previous video
                this.navigateUp();
            }
        }
    }

    navigateUp() {
        if (this.currentVideoIndex > 0) {
            this.scrollToVideo(this.currentVideoIndex - 1);
        }
    }

    navigateDown() {
        if (this.currentVideoIndex < videoData.length - 1) {
            this.scrollToVideo(this.currentVideoIndex + 1);
        }
    }

    scrollToVideo(index) {
        const videoCards = this.videoFeed.querySelectorAll('.video-card');
        if (videoCards[index]) {
            videoCards[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.currentVideoIndex = index;
            this.updateProgressIndicator();
        }
    }

    handlePlayClick(playButton) {
        const videoId = playButton.dataset.videoId;
        const video = videoData.find(v => v.id == videoId);
        
        // Simulate video play
        playButton.style.opacity = '0';
        setTimeout(() => {
            playButton.style.opacity = '1';
        }, 300);
        
        this.showNotification(`Playing: ${video.title}`);
    }

    handleActionClick(actionBtn) {
        const action = actionBtn.dataset.action;
        const videoIndex = this.currentVideoIndex;
        const video = videoData[videoIndex];
        
        switch(action) {
            case 'like':
                this.handleLike(actionBtn, video);
                break;
            case 'share':
                this.handleShare(video);
                break;
            case 'bookmark':
                this.handleBookmark(actionBtn, video);
                break;
        }
    }

    handleLike(btn, video) {
        const svg = btn.querySelector('svg');
        const isLiked = svg.style.fill === 'red';
        
        if (isLiked) {
            svg.style.fill = 'none';
            this.showNotification('Removed from favorites');
        } else {
            svg.style.fill = 'red';
            this.showNotification('Added to favorites');
        }
        
        // Animate
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    }

    handleShare(video) {
        this.showNotification(`Share: ${video.title}`);
        
        // In a real app, this would open share dialog
        if (navigator.share) {
            navigator.share({
                title: video.title,
                text: video.description,
                url: window.location.href
            }).catch(() => {});
        }
    }

    handleBookmark(btn, video) {
        const svg = btn.querySelector('svg');
        const isBookmarked = svg.style.fill === 'white';
        
        if (isBookmarked) {
            svg.style.fill = 'none';
            this.showNotification('Removed from saved');
        } else {
            svg.style.fill = 'white';
            this.showNotification('Saved to library');
        }
        
        // Animate
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 0.9rem;
            z-index: 1000;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            animation: slideDown 0.3s ease-out;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VideoOverviewApp();
});
