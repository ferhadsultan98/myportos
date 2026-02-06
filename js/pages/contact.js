window.PAGES['contact'] = `
    <div class="max-w-5xl mx-auto pb-10">
        
        <div class="relative bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden mb-10 shadow-lg">
            <div class="absolute top-0 right-0 p-4 opacity-10">
                <i class="ri-mail-send-fill text-9xl"></i>
            </div>
            <div class="relative z-10">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Birgə nəsə yaradaq! 🚀</h2>
                <p class="text-blue-100 text-lg max-w-xl leading-relaxed">
                    İstər yeni bir layihə fikriniz olsun, istərsə də komandanıza frontend developer axtarın. 
                    Mən həmişə maraqlı təkliflərə açığam.
                </p>
                <div class="flex items-center gap-2 mt-6 bg-white/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                    <span class="relative flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span class="text-sm font-medium">Status: Yeni layihələr üçün mümkündür</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div class="space-y-6 lg:col-span-1">
                
                <div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm hover:shadow-md transition group relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition group-hover:bg-primary/10"></div>
                    
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-xl flex items-center justify-center text-2xl">
                            <i class="ri-mail-line"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-slate-900 dark:text-white">Email</h3>
                            <p class="text-xs text-slate-500">Rəsmi yazışmalar üçün</p>
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 dark:bg-dark-900 p-3 rounded-lg border border-gray-200 dark:border-dark-700 flex items-center justify-between group-hover:border-primary/30 transition cursor-pointer" onclick="copyEmail(this)">
                        <span class="text-sm font-mono text-slate-700 dark:text-slate-300 truncate">contact@farhadsultanov.info</span>
                        <i class="ri-file-copy-line text-slate-400 hover:text-primary transition"></i>
                    </div>
                    <p id="copyFeedback" class="text-xs text-green-500 mt-2 opacity-0 transition-opacity flex items-center gap-1"><i class="ri-check-line"></i> Kopyalandı!</p>
                </div>

                <div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-xl flex items-center justify-center text-2xl">
                            <i class="ri-map-pin-line"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-slate-900 dark:text-white">Lokasiya</h3>
                            <p class="text-sm text-slate-500">Bakı, Azərbaycan</p>
                            <p class="text-xs text-slate-400 mt-1 flex items-center gap-1"><i class="ri-time-line"></i> GMT+4</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <a href="#" class="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 hover:border-black dark:hover:border-white hover:-translate-y-1 transition duration-300 group">
                        <i class="ri-github-fill text-3xl mb-2 text-slate-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white"></i>
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-400">GitHub</span>
                    </a>
                    <a href="#" class="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 hover:border-blue-600 hover:-translate-y-1 transition duration-300 group">
                        <i class="ri-linkedin-fill text-3xl mb-2 text-slate-700 dark:text-slate-300 group-hover:text-blue-600"></i>
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-400">LinkedIn</span>
                    </a>
                </div>

            </div>

            <div class="lg:col-span-2">
                <div class="bg-white dark:bg-dark-800 p-8 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-lg h-full relative">
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <i class="ri-message-3-line text-primary"></i> Mənə yazın
                    </h3>
                    
                    <form onsubmit="handleContactSubmit(event)" class="space-y-5">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div class="relative group">
                                <i class="ri-user-line absolute left-4 top-3.5 text-slate-400 group-focus-within:text-primary transition"></i>
                                <input type="text" required placeholder="Adınız" class="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition text-slate-900 dark:text-white">
                            </div>
                            <div class="relative group">
                                <i class="ri-mail-line absolute left-4 top-3.5 text-slate-400 group-focus-within:text-primary transition"></i>
                                <input type="email" required placeholder="Email ünvanınız" class="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition text-slate-900 dark:text-white">
                            </div>
                        </div>
                        
                        <div class="relative group">
                            <i class="ri-chat-1-line absolute left-4 top-3.5 text-slate-400 group-focus-within:text-primary transition"></i>
                            <textarea required rows="6" placeholder="Layihəniz haqqında qısa məlumat..." class="w-full bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition text-slate-900 dark:text-white resize-none"></textarea>
                        </div>

                        <button type="submit" class="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group">
                            <span>Mesajı Göndər</span>
                            <i class="ri-send-plane-fill group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>

       
`;

// --- KÖMƏKÇİ FUNKSİYALAR (Global scope-da olmalıdır) ---

window.copyEmail = function(element) {
    navigator.clipboard.writeText('contact@farhadsultanov.info');
    const feedback = document.getElementById('copyFeedback');
    feedback.classList.remove('opacity-0');
    
    // Vizual effekt
    element.classList.add('border-green-500', 'bg-green-50', 'dark:bg-green-900/10');
    
    setTimeout(() => {
        feedback.classList.add('opacity-0');
        element.classList.remove('border-green-500', 'bg-green-50', 'dark:bg-green-900/10');
    }, 2000);
}

window.handleContactSubmit = function(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;
    
    // Loading effekti
    btn.disabled = true;
    btn.innerHTML = '<i class="ri-loader-4-line animate-spin text-xl"></i> Göndərilir...';
    btn.classList.add('opacity-75', 'cursor-not-allowed');

    setTimeout(() => {
        btn.innerHTML = '<i class="ri-check-line text-xl"></i> Uğurla göndərildi!';
        btn.classList.replace('bg-primary', 'bg-green-500');
        btn.classList.replace('shadow-blue-500/20', 'shadow-green-500/20');
        e.target.reset();

        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = originalText;
            btn.classList.remove('opacity-75', 'cursor-not-allowed');
            btn.classList.replace('bg-green-500', 'bg-primary');
            btn.classList.replace('shadow-green-500/20', 'shadow-blue-500/20');
        }, 3000);
    }, 1500);
}