import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <main className="pt-8">
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                  Killswitch
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
                The next generation of digital solutions. Powerful, elegant, and
                designed for the modern world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/25 dark:hover:shadow-white/25">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-100 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
                <button className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-2xl font-semibold text-lg transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 -right-4 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-24 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Built for Excellence
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Every detail crafted with precision and purpose
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Lightning Fast
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Optimized for speed and performance in every interaction
                </p>
              </div>

              <div className="group p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mb-6 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Secure
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Enterprise-grade security protecting your data
                </p>
              </div>

              <div className="group p-8 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  Intuitive
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Designed with user experience at the forefront
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto text-center px-6 sm:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Join thousands of users who have already made the switch
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              Start Your Journey
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Killswitch
              </h3>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#privacy"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
              >
                Terms
              </a>
              <a
                href="#support"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
              >
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-700/50 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2024 Killswitch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
