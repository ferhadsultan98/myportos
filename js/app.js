// --- QLOBAL DƏYİŞƏNLƏR ---
const container = document.getElementById('viewContainer');
const searchInput = document.getElementById('searchInput');

// Səhifələmə və Filtr üçün State
let appState = {
    currentCategory: 'All',
    currentPage: 1,
    itemsPerPage: 6 // Hər səhifədə neçə alət olsun?
};

// --- NAVİQASİYA SİSTEMİ ---
function navigateTo(pageId) {
    window.scrollTo(0, 0);
    
    // 1. Statik Səhifələri Yoxla
    if (window.PAGES[pageId]) {
        container.innerHTML = window.PAGES[pageId];
        return;
    } 
    
    // 2. Alətlər Səhifəsi (Məntiq dəyişdi)
    if (pageId === 'all-tools') {
        renderAllToolsPage();
        return;
    }

    // 3. Əgər konkret bir alət id-sidirsə onu aç (URL-dən və ya başqa yerdən gələrsə)
    const tool = window.TOOLS_DATA.find(t => t.id === pageId);
    if (tool) {
        openTool(tool);
        return;
    }

    // 4. Ana Səhifə (Dashboard)
    if (pageId === 'home') {
        renderHomePage();
        return;
    }

    container.innerHTML = '<h2 class="text-2xl font-bold text-center mt-10">Səhifə tapılmadı</h2>';
}

// --- ANA SƏHİFƏ (HOME) ---
function renderHomePage() {
    // Son 3 aləti göstərək
    const recentTools = window.TOOLS_DATA.slice(0, 3);
    
    container.innerHTML = `
        <div class="space-y-8 animate-fade-in">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
                <h1 class="text-3xl font-bold mb-2">Salam, Developer! 👋</h1>
                <p class="opacity-90">Gündəlik işlərini asanlaşdıracaq alətlər burada.</p>
            </div>

            <div>
                <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Populyar Alətlər</h2>
                <div id="homeGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            </div>
        </div>
    `;
    
    // Grid-i doldur (Pagination olmadan, sadəcə kartlar)
    renderSimpleGrid(document.getElementById('homeGrid'), recentTools);
}

// --- BÜTÜN ALƏTLƏR (Pagination + Category) ---
function renderAllToolsPage() {
    container.innerHTML = `
        <div class="space-y-6 animate-fade-in">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Bütün Alətlər</h2>
            </div>

            <div id="categoryTabs" class="flex flex-wrap gap-2 pb-2 border-b border-gray-100 dark:border-dark-700 overflow-x-auto">
                </div>

            <div id="allToolsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
                </div>

            <div id="paginationControls" class="flex justify-center items-center gap-2 mt-8">
                </div>
        </div>
    `;

    renderCategories(); // Kateqoriyaları yarat
    updateToolsGrid();  // Alətləri süz və göstər
}

// --- MƏNTİQ: Kateqoriyaları Yaratmaq ---
function renderCategories() {
    const tabsContainer = document.getElementById('categoryTabs');
    if (!tabsContainer) return;

    // Mövcud kateqoriyaları unikal olaraq tapırıq
    const categories = ['All', ...new Set(window.TOOLS_DATA.map(t => t.category || 'Other'))];

    tabsContainer.innerHTML = categories.map(cat => `
        <button onclick="setCategory('${cat}')" 
            class="px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap
            ${appState.currentCategory === cat 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                : 'bg-white dark:bg-dark-800 text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-dark-700 border border-gray-200 dark:border-dark-700'
            }">
            ${cat}
        </button>
    `).join('');
}

// --- MƏNTİQ: Alətləri Yeniləmək (Filter + Paginate) ---
function updateToolsGrid() {
    const grid = document.getElementById('allToolsGrid');
    const pagContainer = document.getElementById('paginationControls');
    if (!grid) return;

    // 1. Filterləmə
    let filtered = window.TOOLS_DATA;
    if (appState.currentCategory !== 'All') {
        filtered = filtered.filter(t => t.category === appState.currentCategory);
    }

    // Axtarış varsa onu da nəzərə al
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(t => 
            t.title.toLowerCase().includes(searchTerm) || 
            (t.keywords && t.keywords.some(k => k.toLowerCase().includes(searchTerm)))
        );
    }

    // 2. Pagination Hesablaması
    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / appState.itemsPerPage);
    
    // Səhifə sayını düzəlt (əgər filterdən sonra səhifə sayı azalarsa)
    if (appState.currentPage > totalPages) appState.currentPage = 1;
    
    const startIndex = (appState.currentPage - 1) * appState.itemsPerPage;
    const endIndex = startIndex + appState.itemsPerPage;
    const visibleTools = filtered.slice(startIndex, endIndex);

    // 3. Render Grid
    renderSimpleGrid(grid, visibleTools);

    // 4. Render Pagination Controls
    if (totalPages > 1) {
        pagContainer.innerHTML = `
            <button onclick="changePage(${appState.currentPage - 1})" ${appState.currentPage === 1 ? 'disabled' : ''} class="p-2 rounded-lg border border-gray-200 dark:border-dark-700 disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-dark-800 text-slate-600 dark:text-white">
                <i class="ri-arrow-left-s-line"></i>
            </button>
            
            <span class="text-sm font-medium text-slate-600 dark:text-slate-300 px-2">
                Səhifə ${appState.currentPage} / ${totalPages}
            </span>

            <button onclick="changePage(${appState.currentPage + 1})" ${appState.currentPage === totalPages ? 'disabled' : ''} class="p-2 rounded-lg border border-gray-200 dark:border-dark-700 disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-dark-800 text-slate-600 dark:text-white">
                <i class="ri-arrow-right-s-line"></i>
            </button>
        `;
    } else {
        pagContainer.innerHTML = ''; // Tək səhifədirsə pagination lazım deyil
    }
}

// --- KÖMƏKÇİ: Kartların Çəkilməsi ---
function renderSimpleGrid(element, data) {
    if (data.length === 0) {
        element.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-10 text-slate-400">
                <i class="ri-search-2-line text-4xl mb-2"></i>
                <p>Heç nə tapılmadı</p>
            </div>
        `;
        return;
    }

    element.innerHTML = data.map(tool => `
        <div onclick="openToolById('${tool.id}')" class="group bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
            <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                    <i class="${tool.icon || 'ri-tools-line'} text-2xl"></i>
                </div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-dark-700 px-2 py-1 rounded">
                    ${tool.category || 'General'}
                </span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${tool.title}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 flex-1">${tool.description}</p>
            <div class="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                Aləti aç <i class="ri-arrow-right-line"></i>
            </div>
        </div>
    `).join('');
}

// --- ACTIONLARI QLOBALA BAĞLAMAQ ---
window.setCategory = (cat) => {
    appState.currentCategory = cat;
    appState.currentPage = 1; // Kateqoriya dəyişəndə birinci səhifəyə qayıt
    renderCategories(); // Düymələri yenilə (active class üçün)
    updateToolsGrid();
};

window.changePage = (newPage) => {
    appState.currentPage = newPage;
    updateToolsGrid();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Yuxarı qalx
};

window.openToolById = (id) => {
    const tool = window.TOOLS_DATA.find(t => t.id === id);
    if (tool) openTool(tool);
};

function openTool(tool) {
    container.innerHTML = `
        <div class="animate-fade-in">
            <div class="flex items-center gap-3 mb-6">
                <button onclick="navigateTo('all-tools')" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 text-slate-500 transition">
                    <i class="ri-arrow-left-line text-xl"></i>
                </button>
                <div>
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        ${tool.title}
                        <span class="text-xs font-normal bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">${tool.category}</span>
                    </h2>
                </div>
            </div>
            <div id="toolWorkArea" class="bg-white dark:bg-dark-800 p-1 md:p-6 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm min-h-[500px]">
                ${tool.render()}
            </div>
        </div>
    `;
    
    // Alətin funksionallığını işə sal
    setTimeout(() => {
        if (tool.init) tool.init();
    }, 50);
}

// --- AXTARIŞ ---
searchInput.addEventListener('input', () => {
    // Axtarış edən kimi avtomatik "Bütün Alətlər" səhifəsinə keçirik
    if (!document.getElementById('allToolsGrid')) {
        navigateTo('all-tools');
    }
    appState.currentPage = 1;
    updateToolsGrid();
});

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // Mobil sidebar və theme funksiyaları html-də qaldı, bura sadəcə navigation
    navigateTo('home');
});

// Qlobal funksiyalar
window.navigateTo = navigateTo;