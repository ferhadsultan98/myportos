window.PAGES['about'] = `
    <style>
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
        }
    </style>

    <div class="space-y-8 animate-fade-in pb-10">

        <div class="bg-white dark:bg-dark-800 rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-dark-700 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div class="relative w-40 h-40 md:w-48 md:h-48 shrink-0">
                <div class="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow blur-md opacity-70"></div>
                <div class="absolute inset-1 bg-white dark:bg-dark-800 rounded-full z-10"></div>
                <div class="absolute inset-2 rounded-full overflow-hidden z-20 border-4 border-gray-50 dark:border-dark-700 shadow-inner">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                         alt="Fərhad Sultanov" 
                         class="w-full h-full object-cover hover:scale-110 transition duration-500">
                </div>
            </div>

            <div class="text-center md:text-left z-10 flex-1">
                <div class="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full">
                    Frontend Developer
                </div>
                <h2 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Fərhad Sultanov</h2>
                <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6 max-w-2xl">
                    Kodun estetikası və funksionallığı arasında balans yaradan developer. 
                    <span class="text-slate-900 dark:text-white font-semibold">React</span> və <span class="text-slate-900 dark:text-white font-semibold">Next.js</span> ekosistemində ixtisaslaşıram.
                </p>

                <div class="flex flex-wrap justify-center md:justify-start gap-3">
                    <a href="https://github.com/ferhadsultan98" target="_blank" class="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition">
                        <i class="ri-github-fill text-xl"></i> GitHub
                    </a>
                    <a href="#" class="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                        <i class="ri-linkedin-fill text-xl"></i> LinkedIn
                    </a>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="p-5 bg-white dark:bg-dark-800 rounded-2xl border border-gray-100 dark:border-dark-700 text-center">
                <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                <div class="text-xs font-bold text-slate-400 uppercase">İl Təcrübə</div>
            </div>
            <div class="p-5 bg-white dark:bg-dark-800 rounded-2xl border border-gray-100 dark:border-dark-700 text-center">
                <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">15+</div>
                <div class="text-xs font-bold text-slate-400 uppercase">Bitmiş Layihə</div>
            </div>
            <div class="p-5 bg-white dark:bg-dark-800 rounded-2xl border border-gray-100 dark:border-dark-700 text-center">
                <div class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">Clean</div>
                <div class="text-xs font-bold text-slate-400 uppercase">Code Style</div>
            </div>
            <div class="p-5 bg-white dark:bg-dark-800 rounded-2xl border border-gray-100 dark:border-dark-700 text-center">
                <div class="text-3xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
                <div class="text-xs font-bold text-slate-400 uppercase">Öyrənmə</div>
            </div>
        </div>

        <div class="bg-white dark:bg-dark-800 p-6 rounded-3xl border border-gray-100 dark:border-dark-700 shadow-sm overflow-hidden">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <i class="ri-github-fill text-2xl"></i> GitHub Aktivliyi (@ferhadsultan98)
            </h3>
            <div class="w-full overflow-x-auto pb-2">
                <img src="https://ghchart.rshah.org/3b82f6/ferhadsultan98" alt="GitHub Chart" class="min-w-[700px] w-full block dark:opacity-90">
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div class="bg-white dark:bg-dark-800 p-8 rounded-3xl border border-gray-200 dark:border-dark-700 shadow-sm relative overflow-hidden">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center"><i class="ri-stack-line"></i></span>
                    Texnologiyalar
                </h3>
                
                <div class="flex flex-wrap gap-3">
                    <span class="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 font-bold text-sm border border-yellow-100 dark:border-yellow-800/30">
                        <i class="ri-javascript-fill text-lg"></i> JavaScript
                    </span>
                    <span class="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold text-sm border border-blue-100 dark:border-blue-800/30">
                        <i class="ri-reactjs-line text-lg"></i> React.js
                    </span>
                    <span class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white font-bold text-sm border border-slate-200 dark:border-slate-600">
                        <i class="ri-nextjs-fill text-lg"></i> Next.js
                    </span>
                    <span class="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400 font-bold text-sm border border-cyan-100 dark:border-cyan-800/30">
                        <i class="ri-tailwind-css-fill text-lg"></i> Tailwind
                    </span>
                    <span class="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 font-bold text-sm border border-orange-100 dark:border-orange-800/30">
                        <i class="ri-html5-fill text-lg"></i> HTML5
                    </span>
                    <span class="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold text-sm border border-blue-100 dark:border-blue-800/30">
                        <i class="ri-css3-fill text-lg"></i> CSS3
                    </span>
                    <span class="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 font-bold text-sm border border-red-100 dark:border-red-800/30">
                        <i class="ri-git-merge-line text-lg"></i> Git
                    </span>
                    <span class="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 font-bold text-sm border border-purple-100 dark:border-purple-800/30">
                        <i class="ri-database-2-line text-lg"></i> REST API
                    </span>
                </div>
            </div>

            <div class="bg-white dark:bg-dark-800 p-8 rounded-3xl border border-gray-200 dark:border-dark-700 shadow-sm relative overflow-hidden">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span class="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center"><i class="ri-lightbulb-flash-line"></i></span>
                    İş Yanaşması
                </h3>

                <div class="space-y-4">
                    <div class="flex gap-4 items-start">
                        <div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 shrink-0 flex items-center justify-center font-bold text-sm">01</div>
                        <div>
                            <h4 class="font-bold text-slate-900 dark:text-white">Clean Code</h4>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Yalnız işləyən yox, həm də oxunaqlı və dəstəklənə bilən kod.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 items-start">
                        <div class="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 shrink-0 flex items-center justify-center font-bold text-sm">02</div>
                        <div>
                            <h4 class="font-bold text-slate-900 dark:text-white">Pixel Perfect</h4>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Dizayndakı hər detalı incəliyinə qədər koda köçürmək.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 items-start">
                        <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 shrink-0 flex items-center justify-center font-bold text-sm">03</div>
                        <div>
                            <h4 class="font-bold text-slate-900 dark:text-white">Sürətli Öyrənmə</h4>
                            <p class="text-sm text-slate-500 dark:text-slate-400">Yeni texnologiyaları sürətlə mənimsəyib tətbiq etmək.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;