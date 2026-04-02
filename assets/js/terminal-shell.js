/**
 * IbrahimOS v5 - Deep Obsidian "Premium" Shell
 * Dual-Pane | Universal Navigation | Command Aliases
 */
document.addEventListener('DOMContentLoaded', () => {
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = '';
    document.body.classList.add('terminal-theme');

    const tabs = [
        { name: 'About.md', icon: 'fab fa-html5', path: '/', alias: ['about', 'home', 'index'] },
        { name: 'Resume.pdf', icon: 'fas fa-file-pdf', path: '/cv/', alias: ['cv', 'resume'] },
        { name: 'Projects.sh', icon: 'fas fa-code', path: '/projects/', alias: ['projects', 'work'] },
        { name: 'Publications.log', icon: 'fas fa-graduation-cap', path: '/publications/', alias: ['publications', 'research', 'paper', 'papers'] },
        { name: 'Teaching.md', icon: 'fas fa-chalkboard-teacher', path: '/teaching/', alias: ['teaching', 'classes'] },
        { name: 'Moments.png', icon: 'fas fa-camera', path: '/moments/', alias: ['moments', 'gallery', 'photos'] }
    ];

    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    const currentTab = tabs.find(t => {
        const tabPath = t.path.replace(/\/$/, '') || '/';
        return currentPath === tabPath;
    });

    const appHTML = `
    <div class="app-container">
        <!-- Content Pane (Left) -->
        <div class="content-pane">
            <div class="terminal-tabs">
                ${tabs.map(t => `
                    <div class="tab ${t === currentTab ? 'active' : ''}" onclick="window.location.href='${t.path}'">
                        <i class="${t.icon}"></i> ${t.name}
                        <span class="close-tab">×</span>
                    </div>
                `).join('')}
            </div>
            <div class="content-scroll" id="content-scroll">
                <div class="content-wrapper">
                    ${originalContent}
                </div>
            </div>
        </div>
        
        <!-- Terminal Pane (Right) -->
        <div class="terminal-pane">
            <div id="terminal-window">
                <div class="terminal-header">
                    <div class="window-controls">
                        <div class="control close"></div>
                        <div class="control minimize"></div>
                        <div class="control maximize"></div>
                    </div>
                    <div class="window-title">ibrahim:~</div>
                </div>
                
                <div id="terminal-body" id="term-body">
                    <div id="boot-log"></div>
                    <div id="terminal-history"></div>
                    <div class="input-line">
                        <span class="prompt-user">ibrahim</span><span class="prompt-at">@</span><span class="prompt-path">~</span><span class="prompt-git">(main*)</span><span class="prompt-char">$</span>
                        <span class="command-text" id="fake-input"></span>
                        <span class="cursor"></span>
                        <input type="text" id="real-input" autocomplete="off" spellcheck="false" autofocus>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', appHTML);

    const terminalHistory = document.getElementById('terminal-history');
    const realInput = document.getElementById('real-input');
    const fakeInput = document.getElementById('fake-input');
    const bootLog = document.getElementById('boot-log');
    const terminalBody = document.getElementById('terminal-body');

    // --- Core Interaction ---
    realInput.focus();
    document.addEventListener('click', () => realInput.focus());

    realInput.addEventListener('input', (e) => {
        fakeInput.textContent = e.target.value;
    });

    let history = [];
    let historyIdx = -1;

    realInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = realInput.value.trim();
            if (cmd) {
                history.unshift(cmd);
                historyIdx = -1;
                executeCommand(cmd);
            }
            realInput.value = '';
            fakeInput.textContent = '';
        } else if (e.key === 'ArrowUp') {
            if (historyIdx < history.length - 1) {
                historyIdx++;
                realInput.value = history[historyIdx];
                fakeInput.textContent = realInput.value;
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIdx > 0) {
                historyIdx--;
                realInput.value = history[historyIdx];
                fakeInput.textContent = realInput.value;
            } else {
                historyIdx = -1;
                realInput.value = '';
                fakeInput.textContent = '';
            }
        }
    });

    // --- Command Execution Engine ---
    function executeCommand(cmd) {
        const line = document.createElement('div');
        line.className = 'command-line';
        line.innerHTML = `<span class="prompt-user">ibrahim</span><span class="prompt-at">@</span><span class="prompt-path">~</span><span class="prompt-git">(main*)</span><span class="prompt-char">$</span> <span class="command-text">${cmd}</span>`;
        terminalHistory.appendChild(line);

        const args = cmd.toLowerCase().split(' ');
        const mainCmd = args[0];
        const target = args[1];
        let response = '';

        if (mainCmd === 'help') {
            response = 'Standard Commands:\n  ls         - List pages/modules\n  cat [file] - View file/Go to section\n  cd [dir]   - Change directory\n  clear      - Reset terminal\n  whoami     - Personnel info\n  exit       - Kill session';
        } else if (mainCmd === 'ls') {
            response = 'bin/  etc/  lib/  home/  projects/  publications/\nAbout.md  Resume.pdf  Projects.sh  Publications.log  Teaching.md  Moments.png';
        } else if (mainCmd === 'clear') {
            terminalHistory.innerHTML = '';
            return;
        } else if (mainCmd === 'whoami') {
            response = 'Md Ibrahim | Software Engineer\n@ Softzino Technologies\n\nBio: Software engineer specialized in high-performance web systems and AI research.';
        } else if (mainCmd === 'cat' || mainCmd === 'cd') {
            if (!target) {
                response = `Usage: ${mainCmd} [filename]`;
            } else {
                const found = navigateUniversal(target);
                if (found) {
                    response = `Accessing ${target}... [OK]`;
                } else {
                    response = `err: file or directory not found: ${target}`;
                }
            }
        } else {
            response = `zsh: command not found: ${mainCmd}`;
        }

        if (response) {
            const out = document.createElement('div');
            out.className = 'output';
            out.textContent = response;
            terminalHistory.appendChild(out);
        }

        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    // --- Universal Navigation Engine ---
    function navigateUniversal(target) {
        const cleanTarget = target.replace('.md', '').replace('.pdf', '').replace('.sh', '').replace('.log', '').replace('.png', '').replace('/', '');
        
        // Find Tab by Name or Alias
        const tabMatch = tabs.find(t => 
            t.name.toLowerCase().includes(cleanTarget) || 
            t.alias.some(a => a.includes(cleanTarget))
        );

        if (tabMatch) {
            const isCurrentPage = window.location.pathname === tabMatch.path || (window.location.pathname === '/' && tabMatch.path === '/');
            
            if (isCurrentPage) {
                // Scroll to ID if already on same page
                const el = document.getElementById(cleanTarget) || document.querySelector('.content-wrapper');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                return true;
            } else {
                // Navigate to new page
                window.location.href = tabMatch.path;
                return true;
            }
        }
        return false;
    }

    async function runBoot() {
        const lines = [
            'IbrahimOS Premium Booting...',
            'Kernel: Deep_Obsidian_v5.4',
            'Connection: Fully Encrypted (SSL/TLS)',
            'Identity Verified. Welcome, Md Ibrahim.'
        ];
        for (let l of lines) {
            const p = document.createElement('p');
            p.style.fontSize = '0.75rem';
            p.style.color = '#565f89';
            p.textContent = '> ' + l;
            bootLog.appendChild(p);
            await new Promise(r => setTimeout(r, 80));
        }
    }

    runBoot();
});
