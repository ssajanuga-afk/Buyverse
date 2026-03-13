/**
 * Bootstrap Initialization and Custom Functions
 * This file handles Bootstrap component initialization and custom interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    initializeTooltips();
    
    // Initialize Bootstrap popovers
    initializePopovers();
    
    // Initialize dynamic carousels
    initializeCarousels();
    
    // Add custom bootstrap event listeners
    setupBootstrapEvents();
});

/**
 * Initialize Bootstrap Tooltips
 */
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

/**
 * Initialize Bootstrap Popovers
 */
function initializePopovers() {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

/**
 * Initialize Dynamic Carousels
 */
function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(function(carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            keyboard: true
        });
    });
}

/**
 * Setup Bootstrap Modal Events
 */
function setupBootstrapEvents() {
    // Modal Events
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        modal.addEventListener('show.bs.modal', function(e) {
            console.log('Modal shown:', e.target.id);
        });
        
        modal.addEventListener('hidden.bs.modal', function(e) {
            console.log('Modal hidden:', e.target.id);
        });
    });
}

/**
 * Open Bootstrap Modal Programmatically
 */
function openModal(modalId) {
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}

/**
 * Close Bootstrap Modal Programmatically
 */
function closeModal(modalId) {
    const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
    if (modal) {
        modal.hide();
    }
}

/**
 * Show Bootstrap Alert
 */
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const container = document.querySelector('.container') || document.body;
    container.insertBefore(alertDiv, container.firstChild);
    
    // Auto-dismiss after 5 seconds
    setTimeout(function() {
        alertDiv.remove();
    }, 5000);
}

/**
 * Show Bootstrap Toast
 */
function showToast(title, message, delay = 5000) {
    const toastDiv = document.createElement('div');
    toastDiv.className = 'toast';
    toastDiv.role = 'alert';
    toastDiv.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">${title}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    document.body.appendChild(toastDiv);
    const toast = new bootstrap.Toast(toastDiv, { delay: delay });
    toast.show();
    
    toastDiv.addEventListener('hidden.bs.toast', function() {
        toastDiv.remove();
    });
}

/**
 * Handle Bootstrap Dropdown Actions
 */
function setupDropdownActions() {
    const dropdownElements = document.querySelectorAll('.dropdown-item');
    dropdownElements.forEach(function(element) {
        element.addEventListener('click', function(e) {
            // Prevent default link behavior if needed
            // e.preventDefault();
            console.log('Dropdown item clicked:', this.textContent);
        });
    });
}

/**
 * Validate Bootstrap Form
 */
function validateBootstrapForm(formId) {
    const form = document.getElementById(formId);
    
    if (!form.checkValidity() === false) {
        form.classList.add('was-validated');
        return true;
    } else {
        form.classList.add('was-validated');
        return false;
    }
}

/**
 * Reset Bootstrap Form
 */
function resetBootstrapForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
    form.classList.remove('was-validated');
}

/**
 * Apply Bootstrap Loading State to Button
 */
function setButtonLoading(buttonId, isLoading = true) {
    const button = document.getElementById(buttonId);
    
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Loading...';
    } else {
        button.disabled = false;
        button.innerHTML = 'Submit';
    }
}

// Export functions for external use
window.BootstrapUtils = {
    openModal,
    closeModal,
    showAlert,
    showToast,
    setupDropdownActions,
    validateBootstrapForm,
    resetBootstrapForm,
    setButtonLoading
};
