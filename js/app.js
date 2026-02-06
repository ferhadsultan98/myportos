// --- QLOBAL DƏYİŞƏNLƏR ---
const container = document.getElementById('viewContainer');
const searchInput = document.getElementById('searchInput');

let appState = {
    currentCategory: 'All',
    currentPage: 1,
    itemsPerPage: 100 // Rahat scroll üçün pagination-u ləğv edirik
};

// --- NAVİQASİYA SİSTEMİ ---
function navigateTo(pageId) {
    // 1. Mobil Sidebar-ı MƏCBURİ bağla (Əsas Fix Buradadır)
    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.add('-translate-x-full');
        document.getElementById('sidebarOverlay').classList.add('hidden');
    }

    // 2. Yuxarı sürüşdür
    if(container) container.scrollTo(0,0);
    
    // 3. Səhifəni Tap və Yüklə
    if (window.PAGES[pageId]) {
        container.innerHTML = window.PAGES[pageId];
        return;
    } 
    
    if (pageId === 'all-tools') {
        renderAllToolsPage();
        return;
    }

    if (pageId === 'home') {
        renderHomePage();
        return;
    }

    // Alətlər arasından axtar
    const tool = window.TOOLS_DATA.find(t => t.id === pageId);
    if (tool) {
        openTool(tool);
        return;
    }

    renderHomePage(); // Default
}

// --- ANA SƏHİFƏ ---
function renderHomePage() {
    const recentTools = window.TOOLS_DATA.slice(0, 6);
    
    container.innerHTML = `
        <div class="space-y-8 animate-fade-in max-w-6xl mx-auto">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
                <div class="relative z-10">
                    <h1 class="text-2xl md:text-4xl font-bold mb-3">Xoş Gəldin! 👋</h1>
                    <p class="opacity-90 text-sm md:text-base max-w-xl">İşlərini sürətləndirmək üçün ən lazımlı alətlər bir ünvanda.</p>
                </div>
                <i class="ri-code-s-slash-line absolute -right-6 -bottom-10 text-[150px] opacity-10 rotate-12"></i>
            </div>

            <div>
                <div class="flex justify-between items-end mb-4">
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white">Populyar Alətlər</h2>
                    <button onclick="navigateTo('all-tools')" class="text-sm text-primary font-medium hover:underline">Hamısına bax</button>
                </div>
                <div id="homeGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"></div>
            </div>
        </div>
    `;
    
    renderSimpleGrid(document.getElementById('homeGrid'), recentTools);
}

// --- BÜTÜN ALƏTLƏR (Horizontal Scroll Categories) ---
function renderAllToolsPage() {
    container.innerHTML = `
        <div class="space-y-6 animate-fade-in max-w-7xl mx-auto min-h-full flex flex-col">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white shrink-0">Bütün Alətlər</h2>

            <div class="shrink-0 w-full overflow-hidden">
                <div id="categoryTabs" class="flex flex-nowrap gap-3 pb-4 overflow-x-auto hide-scroll touch-pan-x snap-x">
                    </div>
            </div>

            <div id="allToolsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-10">
                </div>
        </div>
    `;

    renderCategories(); 
    updateToolsGrid(); 
}

// --- KATEQORIYALAR (Scrollable Chips) ---
function renderCategories() {
    const tabsContainer = document.getElementById('categoryTabs');
    if (!tabsContainer) return;

    const categories = ['All', ...new Set(window.TOOLS_DATA.map(t => t.category || 'Other'))];

    tabsContainer.innerHTML = categories.map(cat => `
        <button onclick="setCategory('${cat}')" 
            class="snap-start flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition border select-none whitespace-nowrap
            ${appState.currentCategory === cat 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-lg transform scale-105' 
                : 'bg-white dark:bg-dark-800 text-slate-600 dark:text-slate-400 border-gray-200 dark:border-dark-700 hover:border-gray-300 dark:hover:border-dark-600'
            }">
            ${cat}
        </button>
    `).join('');
}

// --- ALƏTLƏRİN SÜZÜLMƏSİ ---
function updateToolsGrid() {
    const grid = document.getElementById('allToolsGrid');
    if (!grid) return;

    let filtered = window.TOOLS_DATA;
    
    if (appState.currentCategory !== 'All') {
        filtered = filtered.filter(t => t.category === appState.currentCategory);
    }

    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(t => 
            t.title.toLowerCase().includes(searchTerm) || 
            (t.keywords && t.keywords.some(k => k.toLowerCase().includes(searchTerm)))
        );
    }

    renderSimpleGrid(grid, filtered);
}

// --- KARTLARI ÇƏKMƏK ---
function renderSimpleGrid(element, data) {
    if (data.length === 0) {
        element.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400">
                <i class="ri-search-2-line text-5xl mb-3 opacity-50"></i>
                <p>Heç bir alət tapılmadı</p>
            </div>
        `;
        return;
    }

    element.innerHTML = data.map(tool => `
        <div onclick="openToolById('${tool.id}')" class="group bg-white dark:bg-dark-800 p-5 rounded-2xl border border-gray-200 dark:border-dark-700 hover:border-primary dark:hover:border-primary transition-all cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 h-full flex flex-col relative overflow-hidden">
            <div class="relative z-10 flex items-start justify-between mb-4">
                <div class="w-12 h-12 bg-gray-50 dark:bg-dark-700 rounded-xl flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <i class="${tool.icon || 'ri-tools-line'}"></i>
                </div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-gray-100 dark:bg-dark-900 px-2 py-1 rounded-md">
                    ${tool.category || 'General'}
                </span>
            </div>
            
            <h3 class="relative z-10 text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">${tool.title}</h3>
            <p class="relative z-10 text-sm text-slate-500 dark:text-slate-400 line-clamp-2 flex-1">${tool.description}</p>
        </div>
    `).join('');
}

// --- ALƏTİN AÇILMASI ---
function openTool(tool) {
    // Mobil menu açıqdırsa bağla
    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.add('-translate-x-full');
        document.getElementById('sidebarOverlay').classList.add('hidden');
    }

    container.innerHTML = `
        <div class="animate-fade-in max-w-6xl mx-auto h-full flex flex-col">
            <div class="flex items-center gap-3 mb-4 md:mb-6 shrink-0">
                <button onclick="navigateTo('all-tools')" class="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-dark-700 transition shadow-sm">
                    <i class="ri-arrow-left-line text-xl"></i>
                </button>
                <div>
                    <h2 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        ${tool.title}
                    </h2>
                </div>
            </div>
            <div id="toolWorkArea" class="bg-white dark:bg-dark-800 p-1 md:p-6 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm flex-1 min-h-0 overflow-y-auto">
                ${tool.render()}
            </div>
        </div>
    `;
    
    setTimeout(() => {
        if (tool.init) tool.init();
    }, 50);
}

// --- GLOBAL ACTIONS ---
window.setCategory = (cat) => {
    appState.currentCategory = cat;
    renderCategories(); 
    updateToolsGrid();
};

window.openToolById = (id) => {
    const tool = window.TOOLS_DATA.find(t => t.id === id);
    if (tool) openTool(tool);
};

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
    searchInput.addEventListener('input', () => {
        if (!document.getElementById('allToolsGrid')) {
            navigateTo('all-tools');
        }
        updateToolsGrid();
    });
});

window.navigateTo = navigateTo;
