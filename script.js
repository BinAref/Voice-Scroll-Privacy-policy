// Language Toggle
const langToggle = document.getElementById('langToggle');
const englishContent = document.getElementById('english');
const arabicContent = document.getElementById('arabic');

let currentLang = 'en';

langToggle.addEventListener('click', () => {
    if (currentLang === 'en') {
        englishContent.classList.remove('active');
        arabicContent.classList.add('active');
        langToggle.textContent = 'English';
        currentLang = 'ar';
        document.documentElement.lang = 'ar';
    } else {
        arabicContent.classList.remove('active');
        englishContent.classList.add('active');
        langToggle.textContent = 'العربية';
        currentLang = 'en';
        document.documentElement.lang = 'en';
    }
    
    // Save preference
    localStorage.setItem('preferredLang', currentLang);
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
let currentTheme = 'light';

themeToggle.addEventListener('click', () => {
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        currentTheme = 'dark';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
        currentTheme = 'light';
    }
    
    // Save preference
    localStorage.setItem('preferredTheme', currentTheme);
});

// Load saved preferences
window.addEventListener('DOMContentLoaded', () => {
    // Load language preference
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang === 'ar') {
        englishContent.classList.remove('active');
        arabicContent.classList.add('active');
        langToggle.textContent = 'English';
        currentLang = 'ar';
        document.documentElement.lang = 'ar';
    }
    
    // Load theme preference
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        currentTheme = 'dark';
    }
    
    // Auto-detect system theme if no preference saved
    if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        currentTheme = 'dark';
    }
});

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('preferredTheme')) {
            if (e.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggle.textContent = '☀️';
                currentTheme = 'dark';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                themeToggle.textContent = '🌙';
                currentTheme = 'light';
            }
        }
    });
}
