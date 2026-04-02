document.addEventListener('DOMContentLoaded', () => {
    const terminalBody = document.getElementById('terminal-body');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const commandInput = document.querySelector('.terminal-command-input');
    
    // Initial Boot-up text
    const bootSequence = [
        'Initializing IbrahimOS v2.4.2...',
        'System: macOS 15.0 (Sequoia)',
        'Kernel: xnu-11215.1.10~2/RELEASE_ARM64_T6000',
        'Shell: zsh 5.9 (arm64-apple-darwin24.0)',
        'Checking dependencies... OK',
        'Loading profile image... DONE',
        'Welcome, visitor. Type "help" to see available commands.'
    ];

    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function typeText(element, text, speed = 50) {
        for (let i = 0; i < text.length; i++) {
            element.textContent += text.charAt(i);
            await sleep(speed);
        }
    }

    async function runBootSequence() {
        const bootContainer = document.getElementById('boot-sequence');
        for (const line of bootSequence) {
            const p = document.createElement('p');
            p.className = 'output text-muted';
            p.style.fontSize = '0.8rem';
            p.style.marginBottom = '4px';
            bootContainer.appendChild(p);
            await typeText(p, line, 10);
            await sleep(50);
        }
        
        // Show About section by default after boot
        await sleep(500);
        showSection('about', 'cat about.md');
    }

    function showSection(sectionId, commandText) {
        // Update Nav UI
        navLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Logic for "typing" command in main terminal feed
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
            activeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Event Listeners for Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const sectionId = e.target.getAttribute('data-section');
            const command = e.target.getAttribute('data-command');
            showSection(sectionId, command);
        });
    });

    // Start boot sequence
    runBootSequence();
});
