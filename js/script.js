// Expand/collapse 
document.querySelectorAll('.expand-btn').forEach(btn => {
btn.addEventListener('click', () => {
    const section = btn.closest('.forum-section');
    const title = section.querySelector('h2')?.textContent.trim();
    const expanded = section.classList.toggle('expanded');

    if (expanded) {
    btn.textContent = '−';
    const newContent = document.createElement('div');
    newContent.className = 'card-list';

    if (title === 'Q&As') {
        newContent.innerHTML = `
        <div class="thread-card">Q&As</div>
        <div class="thread-card">Stories</div>
        <div class="thread-card">Confessions</div>
        <div class="thread-card">Creepy</div>
        `;
    } else if (title === 'Internet Culture') {
        newContent.innerHTML = `
        <div class="thread-card">Memes</div>
        <div class="thread-card">Funny</div>
        `;
    } else if (title === 'Technology') {
        newContent.innerHTML = `
        <div class="thread-card">Programming</div>
        <div class="thread-card">Artificial Intelligence</div>
        `;
    } else if (title === 'Politics') {
        newContent.innerHTML = `
        <div class="thread-card">Domestic Policy</div>
        <div class="thread-card">Foreign policy</div>
        `;
    } else if (title === 'Sports') {
        newContent.innerHTML = `
        <div class="thread-card">Football</div>
        <div class="thread-card">Formula 1</div>
        `;
    } else {
        newContent.innerHTML = `
        <div class="thread-card">Placeholder Topic</div>
        <div class="thread-card">Another Topic</div>
        `;
    }

    section.appendChild(newContent);
    } else {
    btn.textContent = '+';
    const cardList = section.querySelector('.card-list');
    if (cardList) cardList.remove();
    }
});
});

// Tab switching
const tabs = document.querySelectorAll('.tab');
const postList = document.querySelector('.recent-posts');

tabs.forEach(tab => {
tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    if (tab.textContent.includes('Threads')) {
    postList.innerHTML = `
        <li>Apple iPhone 17 design leaks</li>
        <li>Messi undecided if he will play at 2026 World Cup</li>
        <li>Fires in the Amazon forest may melt sea ice in Antarctica</li>
    `;
    } else {
    postList.innerHTML = `
        <li>When will GTA VI be released?</li>
        <li>How has the current economic crisis affected your access to healthcare or treatment options?</li>
        <li>How do you take care of your mental health while living with a chronic condition?</li>
    `;
    }
});
});
