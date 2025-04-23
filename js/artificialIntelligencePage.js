document.querySelectorAll('.read-more').forEach(button => {
button.addEventListener('click', () => {
    alert('Detailed coming soon!');
});
});
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