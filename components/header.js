// Header component
function createHeader(isHomePage = false) {
    const basePath = isHomePage ? '' : '../../';
    
    return `
        <header>
            <div class="header-container">
                <a href="${basePath}index.html" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
                    <img src="${basePath}assets/images/PlutoTool.png" alt="PlutoTool Logo" style="width: 96px; height: 96px; margin-right: 12px; border-radius: 50%;">
                    <div>
                        <h1 class="site-title" style="margin: 0;">PlutoTool</h1>
                        <p class="tagline" style="margin: 0;">Fast, lightweight desktop tools for daily productivity.</p>
                    </div>
                </a>
            </div>
        </header>
    `;
}

// Insert header into page
function loadHeader(isHomePage = false) {
    document.addEventListener('DOMContentLoaded', function() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = createHeader(isHomePage);
        }
    });
}
