/**
 * Button Component JavaScript - Complete Reference
 * =====================================================
 * All available methods and utilities for button interactions
 */

/* =====================================================
   GLOBAL BUTTON UTILITIES - REFERENCE GUIDE
   ===================================================== */

/**
 * ✅ ButtonUtils.initializeAll()
 * Initializes all buttons with click handlers and effects
 * Usage: ButtonUtils.initializeAll();
 */

/**
 * ✅ ButtonUtils.create(options)
 * Creates a new button element programmatically
 * 
 * Options:
 * - type: 'button', 'submit', 'reset'
 * - className: CSS classes (default: 'btn btn-primary')
 * - text: Button text content
 * - id: Element ID
 * - title: Tooltip text
 * - disabled: boolean
 * - onClick: callback function
 * 
 * Example:
 * let btn = ButtonUtils.create({
 *   className: 'btn btn-success',
 *   text: 'Click Me',
 *   onClick: function() { alert('Clicked!'); }
 * });
 * document.body.appendChild(btn);
 */

/**
 * ✅ ButtonUtils.showLoading(buttonId, loadingText)
 * Shows loading state on button
 * 
 * Parameters:
 * - buttonId: ID of the button element
 * - loadingText: Text to show while loading (default: 'Loading...')
 * 
 * Example:
 * ButtonUtils.showLoading('submitBtn', 'Processing...');
 */

/**
 * ✅ ButtonUtils.hideLoading(buttonId)
 * Hides loading state and restores original text
 * 
 * Example:
 * ButtonUtils.hideLoading('submitBtn');
 */

/**
 * ✅ ButtonUtils.disable(buttonId)
 * Disables a button
 * 
 * Example:
 * ButtonUtils.disable('submitBtn');
 */

/**
 * ✅ ButtonUtils.enable(buttonId)
 * Enables a button
 * 
 * Example:
 * ButtonUtils.enable('submitBtn');
 */

/**
 * ✅ ButtonUtils.setText(buttonId, text)
 * Changes button text
 * 
 * Example:
 * ButtonUtils.setText('myBtn', 'New Text');
 */

/**
 * ✅ ButtonUtils.on(buttonId, callback)
 * Adds click event listener
 * 
 * Example:
 * ButtonUtils.on('myBtn', function() {
 *   alert('Button clicked!');
 * });
 */

/**
 * ✅ ButtonUtils.async(buttonId, asyncFunction)
 * Handles async operations with loading state
 * 
 * Example:
 * ButtonUtils.async('submitBtn', async function() {
 *   let response = await fetch('/api/data');
 *   let data = await response.json();
 *   console.log(data);
 * });
 */

/**
 * ✅ ButtonUtils.createGroup(buttons)
 * Creates a button group
 * 
 * Example:
 * let group = ButtonUtils.createGroup([
 *   { className: 'btn btn-success', text: 'Left' },
 *   { className: 'btn btn-success', text: 'Right' }
 * ]);
 * document.body.appendChild(group);
 */

/**
 * ✅ ButtonUtils.toggle(buttonId, onText, offText)
 * Creates toggle button behavior
 * 
 * Example:
 * ButtonUtils.toggle('toggleBtn', 'ON', 'OFF');
 */

/**
 * ✅ ButtonUtils.addBadge(buttonId, count)
 * Adds badge with count to button
 * 
 * Example:
 * ButtonUtils.addBadge('notificationBtn', 5);
 */

/**
 * ✅ ButtonUtils.removeBadge(buttonId)
 * Removes badge from button
 * 
 * Example:
 * ButtonUtils.removeBadge('notificationBtn');
 */

/**
 * ✅ ButtonUtils.updateBadge(buttonId, count)
 * Updates badge count
 * 
 * Example:
 * ButtonUtils.updateBadge('notificationBtn', 10);
 */

/**
 * ✅ ButtonUtils.showTooltip(buttonId, tooltipText)
 * Shows tooltip on button
 * 
 * Example:
 * ButtonUtils.showTooltip('saveBtn', 'Save your changes');
 */

/**
 * ✅ ButtonUtils.enableRippleForAll()
 * Enables ripple effect on all buttons
 * 
 * Example:
 * ButtonUtils.enableRippleForAll();
 */

/**
 * ✅ ButtonUtils.isDisabled(buttonId)
 * Checks if button is disabled
 * 
 * Returns: boolean
 * Example:
 * if (ButtonUtils.isDisabled('myBtn')) {
 *   console.log('Button is disabled');
 * }
 */

/**
 * ✅ ButtonUtils.isLoading(buttonId)
 * Checks if button is in loading state
 * 
 * Returns: boolean
 * Example:
 * if (ButtonUtils.isLoading('submitBtn')) {
 *   console.log('Button is loading');
 * }
 */

/**
 * ✅ ButtonUtils.animate(buttonId, animationName)
 * Animates button (pulse, bounce, shake)
 * 
 * Parameters:
 * - buttonId: ID of button
 * - animationName: 'pulse', 'bounce', or 'shake' (default: 'pulse')
 * 
 * Example:
 * ButtonUtils.animate('myBtn', 'bounce');
 */

/* =====================================================
   BUTTON CLASS - REFERENCE GUIDE
   ===================================================== */

/**
 * Creates a button instance with enhanced functionality
 * 
 * Usage:
 * let buttonElem = document.getElementById('myButton');
 * let button = new ButtonComponent(buttonElem);
 */

/**
 * Methods:
 * 
 * button.setLoading(isLoading)
 * - Sets or removes loading state
 * - Example: button.setLoading(true);
 * 
 * button.setText(text)
 * - Changes button text
 * - Example: button.setText('Processing...');
 * 
 * button.setOriginalText()
 * - Restores original button text
 * 
 * button.disable()
 * - Disables the button
 * 
 * button.enable()
 * - Enables the button
 * 
 * button.addLoader()
 * - Adds spinner to button
 * 
 * button.removeLoader()
 * - Removes spinner from button
 */

/* =====================================================
   PRACTICAL EXAMPLES
   ===================================================== */

/**
 * EXAMPLE 1: Basic Button Click
 * ─────────────────────────────
 * 
 * HTML:
 * <button class="btn btn-success" id="myBtn">Click Me</button>
 * 
 * JavaScript:
 * ButtonUtils.on('myBtn', function() {
 *   alert('Button clicked!');
 * });
 */

/**
 * EXAMPLE 2: Async Operation with Loading
 * ────────────────────────────────────────
 * 
 * HTML:
 * <button class="btn btn-primary" id="submitBtn">Submit</button>
 * 
 * JavaScript:
 * ButtonUtils.async('submitBtn', async function() {
 *   let response = await fetch('/api/submit');
 *   let result = await response.json();
 *   
 *   if (result.success) {
 *     alert('Success!');
 *   }
 * });
 */

/**
 * EXAMPLE 3: Toggle Button State
 * ──────────────────────────────
 * 
 * HTML:
 * <button class="btn btn-warning" id="toggleBtn">OFF</button>
 * 
 * JavaScript:
 * let isOn = false;
 * ButtonUtils.on('toggleBtn', function() {
 *   isOn = !isOn;
 *   ButtonUtils.setText('toggleBtn', isOn ? 'ON' : 'OFF');
 * });
 */

/**
 * EXAMPLE 4: Button with Badge Counter
 * ────────────────────────────────────
 * 
 * HTML:
 * <button class="btn btn-danger" id="notifyBtn">
 *   Notifications
 * </button>
 * 
 * JavaScript:
 * let count = 0;
 * 
 * function addNotification() {
 *   if (count === 0) {
 *     ButtonUtils.addBadge('notifyBtn', 1);
 *   } else {
 *     ButtonUtils.updateBadge('notifyBtn', count + 1);
 *   }
 *   count++;
 * }
 */

/**
 * EXAMPLE 5: Disable/Enable Button
 * ───────────────────────────────
 * 
 * HTML:
 * <button class="btn btn-success" id="targetBtn">Target</button>
 * <button class="btn btn-info" id="disableBtn">Disable</button>
 * <button class="btn btn-warning" id="enableBtn">Enable</button>
 * 
 * JavaScript:
 * ButtonUtils.on('disableBtn', function() {
 *   ButtonUtils.disable('targetBtn');
 * });
 * 
 * ButtonUtils.on('enableBtn', function() {
 *   ButtonUtils.enable('targetBtn');
 * });
 */

/**
 * EXAMPLE 6: Create Button Dynamically
 * ────────────────────────────────────
 * 
 * JavaScript:
 * let newBtn = ButtonUtils.create({
 *   className: 'btn btn-success btn-lg',
 *   text: 'Dynamic Button',
 *   id: 'dynamicBtn',
 *   onClick: function() {
 *     alert('I was created dynamically!');
 *   }
 * });
 * document.body.appendChild(newBtn);
 */

/**
 * EXAMPLE 7: Button Group
 * ──────────────────────
 * 
 * JavaScript:
 * let group = ButtonUtils.createGroup([
 *   {
 *     className: 'btn btn-outline-primary',
 *     text: '<i class="fa fa-chevron-left"></i> Previous',
 *     onClick: function() { console.log('Previous'); }
 *   },
 *   {
 *     className: 'btn btn-outline-primary',
 *     text: 'Next <i class="fa fa-chevron-right"></i>',
 *     onClick: function() { console.log('Next'); }
 *   }
 * ]);
 * document.body.appendChild(group);
 */

/**
 * EXAMPLE 8: Form Submit with Validation
 * ──────────────────────────────────────
 * 
 * HTML:
 * <form id="myForm">
 *   <input type="text" id="username" required>
 *   <input type="password" id="password" required>
 *   <button type="button" class="btn btn-success" id="submitBtn">
 *     Submit
 *   </button>
 * </form>
 * 
 * JavaScript:
 * ButtonUtils.on('submitBtn', function() {
 *   let username = document.getElementById('username').value;
 *   let password = document.getElementById('password').value;
 *   
 *   if (username && password) {
 *     ButtonUtils.showLoading('submitBtn', 'Signing in...');
 *     
 *     setTimeout(function() {
 *       ButtonUtils.hideLoading('submitBtn');
 *       alert('Login successful!');
 *     }, 2000);
 *   }
 * });
 */

/**
 * EXAMPLE 9: Real-time Counter
 * ───────────────────────────
 * 
 * HTML:
 * <button class="btn btn-info btn-with-badge" id="cartBtn">
 *   <i class="fa fa-shopping-cart"></i> Cart
 *   <span class="btn-badge">0</span>
 * </button>
 * 
 * JavaScript:
 * let cartCount = 0;
 * 
 * function addToCart() {
 *   cartCount++;
 *   if (cartCount === 1) {
 *     ButtonUtils.addBadge('cartBtn', cartCount);
 *   } else {
 *     ButtonUtils.updateBadge('cartBtn', cartCount);
 *   }
 * }
 */

/**
 * EXAMPLE 10: Animation Effects
 * ────────────────────────────
 * 
 * HTML:
 * <button class="btn btn-success" id="animBtn">Animate</button>
 * 
 * JavaScript:
 * ButtonUtils.on('animBtn', function() {
 *   ButtonUtils.animate('animBtn', 'bounce');
 * });
 */
