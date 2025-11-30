        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.padding = '8px 0';
            } else {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                header.style.padding = '12px 0';
            }
        });

        // Mobile menu toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        const navActions = document.querySelector('.nav-actions');
        
        mobileMenu.addEventListener('click', function() {
            const isVisible = navLinks.style.display === 'flex';
            
            if (isVisible) {
                navLinks.style.display = 'none';
                navActions.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navActions.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navLinks.style.backdropFilter = 'blur(20px)';
                navLinks.style.padding = '20px';
                navLinks.style.gap = '15px';
                
                navActions.style.flexDirection = 'column';
                navActions.style.position = 'absolute';
                navActions.style.top = '260px';
                navActions.style.left = '0';
                navActions.style.right = '0';
                navActions.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navActions.style.backdropFilter = 'blur(20px)';
                navActions.style.padding = '20px';
                navActions.style.gap = '15px';
            }
        });

        // Animate dock icons on hover
        const dockIcons = document.querySelectorAll('.dock-icon');
        dockIcons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2)';
                this.style.background = 'rgba(255, 255, 255, 0.2)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            });
        });