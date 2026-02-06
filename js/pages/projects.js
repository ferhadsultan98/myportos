window.PAGES['projects'] = `
    <h2 class="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
        <i class="ri-rocket-2-line text-primary"></i> Portfolia & Layihələr
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div class="group bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col h-full">
            <div class="h-40 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                <i class="ri-tools-fill text-6xl text-white/20 absolute -right-4 -bottom-4 group-hover:scale-110 transition duration-500"></i>
                <i class="ri-terminal-box-line text-4xl text-white z-10"></i>
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <div class="flex justify-between items-start mb-3">
                    <h3 class="font-bold text-lg text-slate-900 dark:text-white">FS Tools</h3>
                    <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded">Live</span>
                </div>
                <p class="text-slate-500 text-sm mb-4 line-clamp-3">
                    Developerlər üçün gündəlik alətlər toplusu. JSON formatlayıcı, API tester və digər kiçik utilitlər bir mərkəzdə.
                </p>
                <div class="mt-auto">
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="text-xs font-medium text-slate-500 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Vanilla JS</span>
                        <span class="text-xs font-medium text-slate-500 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Tailwind</span>
                    </div>
                    <button onclick="navigateTo('home')" class="w-full py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition font-medium text-sm">
                        Keçid et <i class="ri-arrow-right-line ml-1"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="group bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col h-full">
            <div class="h-40 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center relative">
                 <i class="ri-shopping-bag-3-line text-4xl text-white"></i>
            </div>
            <div class="p-6 flex-1 flex flex-col">
                 <div class="flex justify-between items-start mb-3">
                    <h3 class="font-bold text-lg text-slate-900 dark:text-white">ByJalali</h3>
                    <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold rounded">İnkişafda</span>
                </div>
                <p class="text-slate-500 text-sm mb-4">
                    E-ticarət brendi üçün loqo və veb sayt konsepti. Brendinq və istifadəçi interfeysi üzərində işlər.
                </p>
                <div class="mt-auto">
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="text-xs font-medium text-slate-500 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Branding</span>
                        <span class="text-xs font-medium text-slate-500 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Design</span>
                    </div>
                    <button disabled class="w-full py-2 rounded-lg border border-gray-200 dark:border-dark-600 text-gray-400 cursor-not-allowed font-medium text-sm">
                        Tezliklə...
                    </button>
                </div>
            </div>
        </div>

        <div class="group bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col h-full">
            <div class="h-40 bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center">
                 <i class="ri-chat-voice-line text-4xl text-white"></i>
            </div>
            <div class="p-6 flex-1 flex flex-col">
                 <div class="flex justify-between items-start mb-3">
                    <h3 class="font-bold text-lg text-slate-900 dark:text-white">Omni Chat SaaS</h3>
                    <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded">Planlama</span>
                </div>
                <p class="text-slate-500 text-sm mb-4">
                    Bizneslər üçün çoxkanallı (WhatsApp, Instagram, Web) canlı dəstək sistemi.
                </p>
                <div class="mt-auto">
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="text-xs font-medium text-slate-500 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">React</span>
                        <span class="text-xs font-medium text-slate-500 bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Node.js</span>
                    </div>
                     <button disabled class="w-full py-2 rounded-lg border border-gray-200 dark:border-dark-600 text-gray-400 cursor-not-allowed font-medium text-sm">
                        Tezliklə...
                    </button>
                </div>
            </div>
        </div>

    </div>
`;