// Footer component
function createFooter() {
    return `
        <footer>
            <div class="footer-content">
                <p>&copy; 2025 PlutoTool. All rights reserved.</p>
                <nav class="social-links">
                    <a href="https://github.com/PlutoTool" target="_blank" rel="noopener">GitHub</a>
                    <a href="mailto:cuong.dinhduynd@gmail.com">Contact</a>
                </nav>
            </div>
        </footer>
    `;
}

// Insert footer into page
function loadFooter() {
    document.addEventListener('DOMContentLoaded', function() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = createFooter();
        }
    });
}
