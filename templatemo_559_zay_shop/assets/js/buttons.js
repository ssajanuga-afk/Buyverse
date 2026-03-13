/**
 * Button Component JavaScript
 * Handles button interactions, events, and utilities
 */

class ButtonComponent {
    constructor(buttonElement) {
        this.button = buttonElement;
        this.originalText = this.button.innerHTML;
        this.init();
    }

    init() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.button.addEventListener('click', (e) => this.handleClick(e));
        this.button.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.button.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    }

    handleClick(event) {
        if (this.button.disabled) return;
        
        // Trigger ripple effect if enabled
        if (this.button.classList.contains('btn-ripple')) {
            this.createRipple(event);
        }

        // Log button click
        console.log('Button clicked:', this.button.textContent);
    }

    handleMouseDown(event) {
        if (!this.button.disabled) {
            this.button.style.transform = 'translateY(1px)';
        }
    }

    handleMouseUp(event) {
        this.button.style.transform = '';
    }

    createRipple(event) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = this.button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    setLoading(isLoading = true) {
        if (isLoading) {
            this.button.classList.add('btn-loading');
            this.button.disabled = true;
        } else {
            this.button.classList.remove('btn-loading');
            this.button.disabled = false;
        }
    }

    setText(text) {
        this.button.textContent = text;
    }

    setOriginalText() {
        this.button.innerHTML = this.originalText;
    }

    disable() {
        this.button.disabled = true;
        this.button.classList.add('disabled');
    }

    enable() {
        this.button.disabled = false;
        this.button.classList.remove('disabled');
    }

    addLoader() {
        const loader = document.createElement('span');
        loader.classList.add('btn-loader');
        loader.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
        this.button.appendChild(loader);
    }

    removeLoader() {
        const loader = this.button.querySelector('.btn-loader');
        if (loader) loader.remove();
    }
}

/**
 * Global Button Utilities
 */
const ButtonUtils = {
    /**
     * Initialize all buttons on page
     */
    initializeAll: function() {
        document.querySelectorAll('.btn').forEach(button => {
            new ButtonComponent(button);
        });
    },

    /**
     * Create a button in code
     */
    create: function(options) {
        const btn = document.createElement('button');
        btn.type = options.type || 'button';
        btn.className = options.className || 'btn btn-primary';
        btn.textContent = options.text || 'Button';
        
        if (options.id) btn.id = options.id;
        if (options.title) btn.title = options.title;
        if (options.disabled) btn.disabled = true;
        
        if (options.onClick) {
            btn.addEventListener('click', options.onClick);
        }

        return btn;
    },

    /**
     * Show loading state on button
     */
    showLoading: function(buttonId, loadingText = 'Loading...') {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.disabled = true;
            btn.classList.add('btn-loading');
            btn.setAttribute('data-original-text', btn.textContent);
            btn.textContent = loadingText;
        }
    },

    /**
     * Hide loading state on button
     */
    hideLoading: function(buttonId) {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.disabled = false;
            btn.classList.remove('btn-loading');
            const originalText = btn.getAttribute('data-original-text');
            if (originalText) {
                btn.textContent = originalText;
            }
        }
    },

    /**
     * Disable button
     */
    disable: function(buttonId) {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.disabled = true;
            btn.classList.add('disabled');
        }
    },

    /**
     * Enable button
     */
    enable: function(buttonId) {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.disabled = false;
            btn.classList.remove('disabled');
        }
    },

    /**
     * Set button text
     */
    setText: function(buttonId, text) {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.textContent = text;
        }
    },

    /**
     * Add click handler to button
     */
    on: function(buttonId, callback) {
        const btn = document.getElementById(buttonId);
        if (btn) {
            btn.addEventListener('click', callback);
        }
    },

    /**
     * Simulate async operation with button
     */
    async: function(buttonId, asyncFunction) {
        const btn = document.getElementById(buttonId);
        if (!btn) return;

        btn.addEventListener('click', async function() {
            ButtonUtils.showLoading(buttonId);
            try {
                await asyncFunction();
                ButtonUtils.hideLoading(buttonId);
            } catch (error) {
                console.error('Async operation failed:', error);
                ButtonUtils.hideLoading(buttonId);
            }
        });
    },

    /**
     * Create button group
     */
    createGroup: function(buttons) {
        const group = document.createElement('div');
        group.className = 'btn-group';
        
        buttons.forEach(btnOptions => {
            const btn = this.create(btnOptions);
            group.appendChild(btn);
        });

        return group;
    },

    /**
     * Toggle button state
     */
    toggle: function(buttonId, onText, offText) {
        const btn = document.getElementById(buttonId);
        if (!btn) return;

        btn.addEventListener('click', function() {
            const isOn = btn.classList.toggle('active');
            btn.textContent = isOn ? onText : offText;
        });
    },

    /**
     * Add badge to button
     */
    addBadge: function(buttonId, count) {
        const btn = document.getElementById(buttonId);
        if (!btn) return;

        const existingBadge = btn.querySelector('.btn-badge');
        if (existingBadge) {
            existingBadge.textContent = count;
            return;
        }

        const badge = document.createElement('span');
        badge.className = 'btn-badge';
        badge.textContent = count;
        btn.classList.add('btn-with-badge');
        btn.appendChild(badge);
    },

    /**
     * Remove badge from button
     */
    removeBadge: function(buttonId) {
        const btn = document.getElementById(buttonId);
        if (!btn) return;

        const badge = btn.querySelector('.btn-badge');
        if (badge) {
            badge.remove();
            btn.classList.remove('btn-with-badge');
        }
    },

    /**
     * Update badge count
     */
    updateBadge: function(buttonId, count) {
        const badge = document.querySelector(`#${buttonId} .btn-badge`);
        if (badge) {
            badge.textContent = count;
        }
    },

    /**
     * Show button tooltip
     */
    showTooltip: function(buttonId, tooltipText) {
        const btn = document.getElementById(buttonId);
        if (!btn) return;

        btn.setAttribute('title', tooltipText);
        btn.setAttribute('data-bs-toggle', 'tooltip');
        btn.setAttribute('data-bs-placement', 'top');

        // If using Bootstrap tooltips
        if (typeof bootstrap !== 'undefined') {
            new bootstrap.Tooltip(btn);
        }
    },

    /**
     * Add ripple effect to all buttons
     */
    enableRippleForAll: function() {
        document.querySelectorAll('.btn:not(.btn-ripple)').forEach(btn => {
            btn.classList.add('btn-ripple');
        });
    },

    /**
     * Check if button is disabled
     */
    isDisabled: function(buttonId) {
        const btn = document.getElementById(buttonId);
        return btn ? btn.disabled : false;
    },

    /**
     * Check if button is loading
     */
    isLoading: function(buttonId) {
        const btn = document.getElementById(buttonId);
        return btn ? btn.classList.contains('btn-loading') : false;
    },

    /**
     * Animate button
     */
    animate: function(buttonId, animationName = 'pulse') {
        const btn = document.getElementById(buttonId);
        if (!btn) return;

        btn.style.animation = `${animationName} 0.6s`;
        setTimeout(() => {
            btn.style.animation = '';
        }, 600);
    }
};

/**
 * Initialize buttons on DOM ready
 */
document.addEventListener('DOMContentLoaded', function() {
    ButtonUtils.initializeAll();

    // Add ripple effect to buttons by default
    ButtonUtils.enableRippleForAll();
});

/**
 * Export for use
 */
window.ButtonComponent = ButtonComponent;
window.ButtonUtils = ButtonUtils;

// CSS animations for button utilities
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
