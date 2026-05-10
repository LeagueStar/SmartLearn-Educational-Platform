
class Course {
  /**
   * constructor()
   * Called automatically when creating a new Course instance.
   *
   * @param {string} title       - Full course title.
   * @param {string} category    - Category label shown in the pill badge.
   * @param {string} level       - Difficulty: "Beginner", "Intermediate", etc.
   * @param {string} description - One-line course description.
   * @param {string} imageUrl    - URL for the thumbnail image (Unsplash).
   * @param {number} rating      - Average star rating (e.g. 4.9).
   * @param {string} reviews     - Formatted review count (e.g. "2.4k").
   * @param {string} tagColor    - Text color for the category pill.
   * @param {string} tagBg       - Background color for the category pill.
   */
  constructor(title, category, level, description, imageUrl, rating, reviews, tagColor, tagBg) {
    this.title       = title;
    this.category    = category;
    this.level       = level;
    this.description = description;
    this.imageUrl    = imageUrl;
    this.rating      = rating;
    this.reviews     = reviews;
    this.tagColor    = tagColor;
    this.tagBg       = tagBg;
  }

  /**
   * renderHTML()
   * A METHOD on the Course class that returns a complete HTML string
   * for this course's card. Uses TEMPLATE LITERALS for clean embedding.
   *
   * Template literal syntax:
   *   - Backticks (`) allow multi-line strings.
   *   - ${expression} embeds any JavaScript value inline.
   *
   * @returns {string} — HTML for one course card.
   */
  renderHTML() {
    return `
      <article class="course-card animate-on-scroll" aria-label="${this.title} course">
        <div class="course-thumbnail">
          <img src="${this.imageUrl}" alt="${this.title} course thumbnail" loading="lazy" />
        </div>
        <div class="course-body">
          <div class="course-meta">
            <span class="course-tag"
                  style="background:${this.tagBg}; color:${this.tagColor};">
              ${this.category}
            </span>
            <span class="course-level">${this.level}</span>
          </div>
          <h4>${this.title}</h4>
          <p>${this.description}</p>
          <div class="course-footer">
            <div class="course-rating">
              <i class="fas fa-star" aria-hidden="true"></i>
              ${this.rating}
              <span style="color:var(--text-muted)">(${this.reviews})</span>
            </div>
            <button
              class="btn-enrol"
              data-course-name="${this.title}"
              aria-label="Enrol in ${this.title} for free"
            >
              Enrol Free
            </button>
          </div>
        </div>
      </article>
    `;
  }
}

const availableCourses = [
  new Course(
    'Full-Stack Web Development',
    'Web Dev',
    'Beginner',
    'HTML, CSS, JavaScript, React, Node.js. Build real projects from scratch.',
    'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&auto=format&fit=crop&q=80',
    4.9, '2.4k',
    '#1a253a',              /* Navy text */
    'rgba(26,37,58,0.10)'   /* Light navy background */
  ),
  new Course(
    'Machine Learning & AI',
    'AI & ML',
    'Intermediate',
    'Deep learning, neural networks, NLP — theory and hands-on projects.',
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop&q=80',
    4.8, '1.8k',
    '#cf6d17',              /* Dark orange text */
    'rgba(230,126,34,0.12)' /* Light orange background */
  ),
  new Course(
    'Data Science with Python',
    'Data Science',
    'Beginner',
    'Pandas, NumPy, Matplotlib — analyze and visualize real datasets.',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    4.7, '3.1k',
    '#1a253a',
    'rgba(26,37,58,0.10)'
  ),
];

const featureDetails = [
  {
    icon: '💬',
    title: 'AI Tutor Chat',
    description: 'Talk to our advanced AI that understands context and provides personalized guidance.',
    detail: '• Natural language conversations\n• Context-aware responses\n• 24/7 availability\n• Multiple subjects support',
  },
  {
    icon: '📁',
    title: 'Content Upload',
    description: 'Upload any learning material and let AI transform it into interactive study content.',
    detail: '• PDF documents\n• YouTube videos\n• PowerPoint slides\n• Lecture recordings',
  },
  {
    icon: '🧪',
    title: 'Knowledge Testing',
    description: 'Generate personalized quizzes and exams to test your understanding deeply.',
    detail: '• Adaptive difficulty\n• Instant feedback\n• Progress tracking\n• Performance analytics',
  },
  {
    icon: '🎙️',
    title: 'Summary & Podcasts',
    description: 'Convert any content into concise summaries or listen as AI-generated podcasts.',
    detail: '• Key point extraction\n• Audio learning mode\n• Multiple languages\n• Downloadable content',
  },
  {
    icon: '▶️',
    title: 'YouTube Summarizer',
    description: 'Get key insights from any YouTube video without watching the entire content.',
    detail: '• Video transcript analysis\n• Timestamped summaries\n• Key concept extraction\n• Save learning time',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics and insights.',
    detail: '• Learning streaks\n• Knowledge gaps analysis\n• Achievement badges\n• Study time tracking',
  },
];


/** Validates standard email format (declared as a constant — used by all 3 forms) */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * calculatePasswordStrength()
 * Scores a password from 0 (empty) to 5 (very strong) by testing
 * it against five independent regex criteria.
 *
 * @param {string} passwordValue — the raw password string to test.
 * @returns {number} — integer 0–5.
 */
function calculatePasswordStrength(passwordValue) {
  let strengthScore = 0;

  if (passwordValue.length >= 8)          strengthScore++;  // Minimum length
  if (/[A-Z]/.test(passwordValue))        strengthScore++;  // Has uppercase
  if (/[a-z]/.test(passwordValue))        strengthScore++;  // Has lowercase
  if (/[0-9]/.test(passwordValue))        strengthScore++;  // Has digit
  if (/[^A-Za-z0-9]/.test(passwordValue)) strengthScore++;  // Has special char

  return strengthScore;
}

/**
 * updatePasswordStrengthUI()
 * Updates the visual strength bar (width + color) and the label text.
 * Uses the score from calculatePasswordStrength() to index into parallel arrays.
 *
 * @param {string} passwordValue   — raw password string.
 * @param {string} fillElementId   — id of the bar fill <div>.
 * @param {string} textElementId   — id of the <span> label.
 */
function updatePasswordStrengthUI(passwordValue, fillElementId, textElementId) {
  const strengthScore = calculatePasswordStrength(passwordValue);

  // Parallel arrays: index = score → color and label
  // Orange is used for "Good"/"Strong" to align with the brand action color.
  const strengthColors = ['#ccc', '#e74c3c', '#e67e22', '#f39c12', '#27ae60', '#1a6f3c'];
  const strengthLabels = ['', 'Weak', 'Fair', 'Fair', 'Good', 'Strong 💪'];

  // DOM Manipulation: select and modify the bar and label elements
  const fillElement = document.getElementById(fillElementId);
  const textElement = document.getElementById(textElementId);

  if (!fillElement || !textElement) return;

  fillElement.style.width           = `${strengthScore * 20}%`;
  fillElement.style.backgroundColor = strengthColors[strengthScore];
  textElement.textContent           = passwordValue.length ? strengthLabels[strengthScore] : '';
}

/**
 * showFieldError()
 * Makes a validation error message visible and marks the field red.
 *
 * @param {string} errorElementId — id of the .form-error <span>.
 */
function showFieldError(errorElementId) {
  const errorSpan = document.getElementById(errorElementId);
  if (!errorSpan) return;

  errorSpan.style.display = 'block';

  // .closest() walks up the DOM tree to find the nearest .form-group ancestor
  const formGroup = errorSpan.closest('.form-group');
  if (formGroup) formGroup.classList.add('has-error');
}

/**
 * hideFieldError()
 * Hides the error message and removes the red error state.
 *
 * @param {string} errorElementId — id of the .form-error <span>.
 */
function hideFieldError(errorElementId) {
  const errorSpan = document.getElementById(errorElementId);
  if (!errorSpan) return;

  errorSpan.style.display = 'none';

  const formGroup = errorSpan.closest('.form-group');
  if (formGroup) formGroup.classList.remove('has-error');
}

/**
 * clearAllErrors()
 * Clears multiple error fields in one call using rest parameters (...ids).
 * The spread syntax collects any number of arguments into an array,
 * then forEach iterates over each one.
 *
 * @param {...string} errorIds — any number of error element id strings.
 */
function clearAllErrors(...errorIds) {
  errorIds.forEach(id => hideFieldError(id));
}

/**
 * openPopup() — adds "is-open" class to show a modal overlay.
 * @param {string} popupId — id of the .overlay element.
 */
function openPopup(popupId) {
  const overlayElement = document.getElementById(popupId);
  if (overlayElement) overlayElement.classList.add('is-open');
}

/**
 * closePopup() — removes "is-open" class to hide a modal overlay.
 * @param {string} popupId — id of the .overlay element.
 */
function closePopup(popupId) {
  const overlayElement = document.getElementById(popupId);
  if (overlayElement) overlayElement.classList.remove('is-open');
}

/**
 * showSuccessPopup()
 * Populates the dynamic success popup with specific content,
 * then opens it. The "Continue" button callback is replaced each
 * time by cloning the button node (removing any stale listeners).
 *
 * @param {string}   icon       — emoji icon string.
 * @param {string}   title      — heading text.
 * @param {string}   message    — body paragraph text.
 * @param {Function} onContinue — callback after the user clicks Continue.
 */
function showSuccessPopup(icon, title, message, onContinue) {
  // DOM Manipulation: update text content of existing elements
  document.getElementById('success-popup-icon').textContent    = icon;
  document.getElementById('success-popup-title').textContent   = title;
  document.getElementById('success-popup-message').textContent = message;

  // Replace the Continue button with a fresh clone to remove old listeners
  const oldContinueBtn = document.getElementById('success-popup-btn');
  const newContinueBtn = oldContinueBtn.cloneNode(true);
  oldContinueBtn.parentNode.replaceChild(newContinueBtn, oldContinueBtn);

  newContinueBtn.addEventListener('click', () => {
    closePopup('success-popup');
    if (typeof onContinue === 'function') onContinue();
  });

  openPopup('success-popup');
}


/** Timeout reference — stored so we can cancel and reset on rapid calls */
let toastAutoHideTimer;

/**
 * showToast()
 * Displays a toast notification with the given content.
 *
 * @param {string} icon    — emoji icon.
 * @param {string} title   — bold headline.
 * @param {string} message — smaller subtext.
 */
function showToast(icon, title, message) {
  const toastElement = document.getElementById('toast-notification');

  // Populate the toast content
  document.getElementById('toast-icon').textContent    = icon;
  document.getElementById('toast-title').textContent   = title;
  document.getElementById('toast-message').textContent = message;

  // Show by adding the CSS class that triggers the slide-in transition
  toastElement.classList.add('is-visible');

  // Reset the auto-hide timer so rapid toasts don't vanish prematurely
  clearTimeout(toastAutoHideTimer);
  toastAutoHideTimer = setTimeout(() => {
    toastElement.classList.remove('is-visible');
  }, 3200);
}

/**
 * smoothScrollTo()
 * Scrolls the page smoothly to the element matching a CSS selector.
 *
 * @param {string} cssSelector — e.g. "#courses", "#login".
 */
function smoothScrollTo(cssSelector) {
  const targetElement = document.querySelector(cssSelector);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * switchAuthTab()
 * Activates the chosen tab and its corresponding form panel.
 *
 * @param {'login'|'signup'} tabName — which tab to make active.
 */
function switchAuthTab(tabName) {
  // Retrieve the four relevant DOM elements
  const loginTabButton  = document.getElementById('login-tab-btn');
  const signupTabButton = document.getElementById('signup-tab-btn');
  const loginPanel      = document.getElementById('login-form-panel');
  const signupPanel     = document.getElementById('signup-form-panel');

  if (tabName === 'login') {
    loginTabButton.classList.add('active');
    loginTabButton.setAttribute('aria-selected', 'true');
    signupTabButton.classList.remove('active');
    signupTabButton.setAttribute('aria-selected', 'false');
    loginPanel.classList.add('active');
    signupPanel.classList.remove('active');
  } else {
    signupTabButton.classList.add('active');
    signupTabButton.setAttribute('aria-selected', 'true');
    loginTabButton.classList.remove('active');
    loginTabButton.setAttribute('aria-selected', 'false');
    signupPanel.classList.add('active');
    loginPanel.classList.remove('active');
  }
}

/**
 * handleLoginFormSubmit()
 * Called when the login <form> fires its "submit" event.
 * Validates email (Regex) and password length, then shows a popup.
 *
 * @param {Event} submitEvent — the native DOM submit event.
 */
function handleLoginFormSubmit(submitEvent) {
  // Prevent the browser's default action (page reload / GET request)
  submitEvent.preventDefault();

  // Read input values
  const emailInput    = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const userEmail     = emailInput.value.trim();
  const userPassword  = passwordInput.value;

  // Reset any previously shown errors
  clearAllErrors('login-email-error', 'login-password-error');

  let formIsValid = true;

  // Validation 1: Email format tested with EMAIL_REGEX
  if (!userEmail || !EMAIL_REGEX.test(userEmail)) {
    showFieldError('login-email-error');
    formIsValid = false;
  }

  // Validation 2: Password minimum length
  if (userPassword.length < 6) {
    showFieldError('login-password-error');
    formIsValid = false;
  }

  // Abort if any field is invalid
  if (!formIsValid) return;

  // Extract display name from the email local part (before the @)
  const displayName = userEmail.split('@')[0];

  showSuccessPopup(
    '✅',
    'Logged In!',
    `Welcome back, ${displayName}! Taking you to your courses...`,
    () => { setTimeout(() => smoothScrollTo('#courses'), 200); }
  );

  // Clear the form after successful submission
  emailInput.value    = '';
  passwordInput.value = '';
  document.getElementById('login-password-strength-fill').style.width = '0';
  document.getElementById('login-password-strength-text').textContent = '';
}

/**
 * handleSignupFormSubmit()
 * Validates all four signup fields and shows a success popup.
 *
 * @param {Event} submitEvent — the native DOM submit event.
 */
function handleSignupFormSubmit(submitEvent) {
  submitEvent.preventDefault();

  // Cache input elements for repeated access
  const nameInput            = document.getElementById('signup-name');
  const emailInput           = document.getElementById('signup-email');
  const passwordInput        = document.getElementById('signup-password');
  const confirmPasswordInput = document.getElementById('signup-confirm-password');

  const fullName        = nameInput.value.trim();
  const userEmail       = emailInput.value.trim();
  const userPassword    = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  clearAllErrors(
    'signup-name-error', 'signup-email-error',
    'signup-password-error', 'signup-confirm-error'
  );

  let formIsValid = true;

  if (!fullName) {
    showFieldError('signup-name-error');
    formIsValid = false;
  }

  if (!userEmail || !EMAIL_REGEX.test(userEmail)) {
    showFieldError('signup-email-error');
    formIsValid = false;
  }

  if (userPassword.length < 8) {
    showFieldError('signup-password-error');
    formIsValid = false;
  }

  if (userPassword !== confirmPassword) {
    showFieldError('signup-confirm-error');
    formIsValid = false;
  }

  if (!formIsValid) return;

  showSuccessPopup(
    '🎉',
    'Account Created!',
    `Welcome to SmartLearn, ${fullName}! Your free account is ready. 🎓`,
    () => { setTimeout(() => smoothScrollTo('#services'), 200); }
  );

  // Clear all fields
  [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
    input.value = '';
  });
  document.getElementById('signup-password-strength-fill').style.width = '0';
  document.getElementById('signup-password-strength-text').textContent =
    'Use uppercase, lowercase, number & special character.';
}

/**
 * handleFeedbackFormSubmit()
 * Validates name, email, and message, then shows a confirmation popup.
 *
 * @param {Event} submitEvent — the native DOM submit event.
 */
function handleFeedbackFormSubmit(submitEvent) {
  submitEvent.preventDefault();

  const nameInput    = document.getElementById('feedback-name');
  const emailInput   = document.getElementById('feedback-email');
  const messageInput = document.getElementById('feedback-message');

  const senderName  = nameInput.value.trim();
  const senderEmail = emailInput.value.trim();
  const messageText = messageInput.value.trim();

  clearAllErrors('feedback-name-error', 'feedback-email-error', 'feedback-message-error');

  let formIsValid = true;

  if (!senderName) {
    showFieldError('feedback-name-error');
    formIsValid = false;
  }

  if (!senderEmail || !EMAIL_REGEX.test(senderEmail)) {
    showFieldError('feedback-email-error');
    formIsValid = false;
  }

  if (messageText.length < 10) {
    showFieldError('feedback-message-error');
    formIsValid = false;
  }

  if (!formIsValid) return;

  showSuccessPopup(
    '📨',
    'Feedback Sent!',
    `Thanks, ${senderName}! We'll reply to ${senderEmail} soon.`,
    null
  );

  nameInput.value    = '';
  emailInput.value   = '';
  messageInput.value = '';
}

/**
 * closeFeatureInfoBox()
 * Hides the feature detail panel and the overlay behind it.
 */
function closeFeatureInfoBox() {
  const featureInfoBox = document.getElementById('feature-info-box');
  const featureOverlay = document.getElementById('feature-overlay');

  featureInfoBox.classList.remove('is-active');
  featureOverlay.classList.remove('is-active');
}

/**
 * openFeatureInfoBox()
 * Looks up the clicked card's index in featureDetails[], builds the
 * inner HTML using a template literal, injects it into the DOM, and
 * animates the panel into view.
 *
 * @param {number} featureIndex — integer index into featureDetails[].
 */
function openFeatureInfoBox(featureIndex) {
  const featureInfoBox  = document.getElementById('feature-info-box');
  const featureOverlay  = document.getElementById('feature-overlay');
  const selectedFeature = featureDetails[featureIndex];

  if (!selectedFeature) return;

  // DOM Manipulation: inject the feature's content using innerHTML
  featureInfoBox.innerHTML = `
    <span class="fib-icon" aria-hidden="true">${selectedFeature.icon}</span>
    <h3>${selectedFeature.title}</h3>
    <p>${selectedFeature.description}</p>
    <div class="feature-detail">
      ${selectedFeature.detail
        .split('\n')
        .map(line => `<div>${line}</div>`)
        .join('')}
    </div>
    <button class="close-info-btn" id="close-feature-btn">Got it! ✓</button>
  `;

  // Show the overlay, then the info box (short delay lets CSS transition play)
  featureOverlay.classList.add('is-active');
  setTimeout(() => featureInfoBox.classList.add('is-active'), 10);

  // The "Got it" button was just created — wire it up immediately
  document.getElementById('close-feature-btn').addEventListener('click', closeFeatureInfoBox);
}

function renderCourseCards() {
  const coursesGridElement = document.getElementById('courses-grid');
  if (!coursesGridElement) return;

  // Array.map() calls renderHTML() on each Course object → string[]
  // Array.join('') merges all strings into one (no separator)
  const allCardsHTML = availableCourses.map(course => course.renderHTML()).join('');

  // DOM Manipulation: inject the generated HTML
  coursesGridElement.innerHTML = allCardsHTML;

  // Start observing the newly created cards for the scroll-in animation
  coursesGridElement.querySelectorAll('.animate-on-scroll').forEach(card => {
    scrollObserver.observe(card);
  });

  // Attach click handlers to the "Enrol Free" buttons
  coursesGridElement.querySelectorAll('.btn-enrol').forEach(enrolButton => {
    enrolButton.addEventListener('click', () => {
      const courseName = enrolButton.dataset.courseName;
      showToast('🎉', 'Enrolled!', `Welcome to ${courseName}!`);
    });
  });
}

const scrollObserver = new IntersectionObserver(
  (observedEntries) => {
    observedEntries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        scrollObserver.unobserve(entry.target);  // Run the animation only once
      }
    });
  },
  { threshold: 0.12 }
);

document.addEventListener('DOMContentLoaded', () => {

  /* ── A) Generate course cards via OOP Course class ── */
  renderCourseCards();


  /* ── B) Start scroll-animation observation on all static elements ──
     renderCourseCards() handles the dynamically-generated cards separately.
  */
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    scrollObserver.observe(element);
  });


  /* ── C) Header scroll detection — DOM QUERY CACHE example ──
     siteHeader is queried ONCE here and stored.
     The scroll listener (which fires on every scroll event, potentially
     hundreds of times per page load) reads from the variable,
     NOT from a fresh document.getElementById() call each time.
  */
  const siteHeader = document.getElementById('site-header');  /* ← CACHED */

  window.addEventListener('scroll', () => {
    // classList.toggle(cls, force): adds class if force=true, removes if false
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 50);
  });


  /* ── D) Mobile navigation toggle ──
     Both elements cached once; used in multiple handlers below.
  */
  const mobileMenuButton = document.getElementById('mobile-menu-btn');  /* ← CACHED */
  const mainNavElement   = document.getElementById('main-nav');          /* ← CACHED */

  mobileMenuButton.addEventListener('click', () => {
    const isNowOpen = mainNavElement.classList.toggle('is-open');
    // aria-expanded tells screen readers whether the menu is open
    mobileMenuButton.setAttribute('aria-expanded', String(isNowOpen));
  });

  // Close the mobile nav when any link inside it is tapped
  mainNavElement.querySelectorAll('a').forEach(navLink => {
    navLink.addEventListener('click', () => {
      mainNavElement.classList.remove('is-open');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
  });


  /* ── E) Smooth scroll for all <a href="#..."> anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchorLink => {
    anchorLink.addEventListener('click', (clickEvent) => {
      clickEvent.preventDefault();
      smoothScrollTo(anchorLink.getAttribute('href'));
    });
  });


  /* ── F) Hero CTA buttons with data-scroll-to attribute ── */
  document.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', () => {
      const scrollTarget = button.dataset.scrollTo;   // Read from data-scroll-to
      const tabToOpen    = button.dataset.openTab;    // Read from data-open-tab (optional)

      smoothScrollTo(scrollTarget);

      // If a tab was specified, open it after the scroll animation completes
      if (tabToOpen) {
        setTimeout(() => switchAuthTab(tabToOpen), 400);
      }
    });
  });


  /* ── G) Auth tab button listeners ── */
  document.getElementById('login-tab-btn').addEventListener('click', () => {
    switchAuthTab('login');
  });

  document.getElementById('signup-tab-btn').addEventListener('click', () => {
    switchAuthTab('signup');
  });


  /* ── H) Form submit handlers ── */
  document.getElementById('login-form').addEventListener('submit',    handleLoginFormSubmit);
  document.getElementById('signup-form').addEventListener('submit',   handleSignupFormSubmit);
  document.getElementById('feedback-form').addEventListener('submit', handleFeedbackFormSubmit);


  /* ── I) Live password strength bars ──
     The "input" event fires on every keystroke inside the field.
  */
  document.getElementById('login-password').addEventListener('input', function () {
    updatePasswordStrengthUI(
      this.value,
      'login-password-strength-fill',
      'login-password-strength-text'
    );
  });

  document.getElementById('signup-password').addEventListener('input', function () {
    updatePasswordStrengthUI(
      this.value,
      'signup-password-strength-fill',
      'signup-password-strength-text'
    );
  });


  /* ── J) Popup close buttons (elements with data-close-popup) ── */
  document.querySelectorAll('[data-close-popup]').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
      closePopup(closeButton.dataset.closePopup);
    });
  });

  // Also close when clicking the dark overlay background (outside popup-box)
  document.querySelectorAll('.overlay').forEach(overlayElement => {
    overlayElement.addEventListener('click', (clickEvent) => {
      // e.target is the element actually clicked;
      // if it IS the overlay itself (not a child), close it.
      if (clickEvent.target === overlayElement) {
        overlayElement.classList.remove('is-open');
      }
    });
  });


  /* ── K) Feature cards — click to expand detail ── */
  document.querySelectorAll('.feature-card').forEach(featureCard => {
    // Click handler
    featureCard.addEventListener('click', () => {
      const featureIndex = parseInt(featureCard.dataset.featureIndex, 10);
      openFeatureInfoBox(featureIndex);
    });

    // Keyboard handler — allows Enter/Space for accessibility
    featureCard.addEventListener('keydown', (keyEvent) => {
      if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
        keyEvent.preventDefault();
        const featureIndex = parseInt(featureCard.dataset.featureIndex, 10);
        openFeatureInfoBox(featureIndex);
      }
    });
  });

  // Close the feature info box when clicking the overlay behind it
  document.getElementById('feature-overlay').addEventListener('click', closeFeatureInfoBox);


  /* ── L) Welcome popup — shown automatically after 900ms ── */
  setTimeout(() => openPopup('welcome-popup'), 900);

}); 