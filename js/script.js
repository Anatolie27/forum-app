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
        <a href="QandSpage.html" class="thread-card">Q&As</a>
        <a href="storiesPage.html" class="thread-card">Stories</a>
        <a href="confessionsPage.html" class="thread-card">Confessions</a>
        <a href="creepyPage.html" class="thread-card">Creepy</a>
        `;
    } else if (title === 'Internet Culture') {
        newContent.innerHTML = `
        <a href="memesPage.html" class="thread-card">Memes</a>
        <a href="funnyPage.html" class="thread-card">Funny</a>
        `;
    } else if (title === 'Technology') {
        newContent.innerHTML = `
        <a href="programmingPage.html" class="thread-card">Programming</a>
        <a href="artificialIntelligencePage.html" class="thread-card">Artificial Intelligence</a>
        `;
    } else if (title === 'Politics') {
        newContent.innerHTML = `
        <a href="domesticPolicyPage.html" class="thread-card">Domestic Policy</a>
        <a href="foreignPolicyPage.html" class="thread-card">Foreign policy</a>
        `;
    } else if (title === 'Sports') {
        newContent.innerHTML = `
        <a href="footballPage.html" class="thread-card">Football</a>
        <a href="formula1Page.html" class="thread-card">Formula 1</a>
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
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const postList = document.querySelector(".recent-posts");

    const posts = {
        "New Posts": [
            "Apple iPhone 17 design leaks",
            "Messi undecided if he will play at 2026 World Cup",
            "Fires in the Amazon forest may melt sea ice in Antarctica"
        ],
        "New Threads": [
            "When will GTA VI be released?",
            "How has the current economic crisis affected your access to healthcare or treatment options?",
            "How do you take care of your mental health while living with a chronic condition?"
        ]
    };

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const selected = tab.textContent.trim();
            postList.innerHTML = posts[selected]
                .map(item => `<li>${item}</li>`)
                .join("");
        });
    });
});

