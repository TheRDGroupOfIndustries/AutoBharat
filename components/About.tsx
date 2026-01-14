export function About() {
    return (
        <section className="bg-gray-900 py-24 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl blur opacity-20"></div>
                        <img
                            src="https://readdy.ai/api/search-image?query=professional%20automotive%20influencer%20posing%20with%20luxury%20supercar%20in%20a%20modern%20garage%20cinematic%20lighting%20high%20quality%20photography&width=600&height=800&seq=about001&orientation=portrait"
                            alt="About Me"
                            className="relative rounded-2xl shadow-2xl border border-gray-800 object-cover w-full h-[600px]"
                        />
                        <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10">
                            <div className="text-3xl font-black text-red-600">12+</div>
                            <div className="text-sm text-gray-400">Hours of Daily Research</div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8">
                            Driving the Future of <br />
                            <span className="text-red-600 italic">Automotive Hub</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I'm the creator behind TheAutoBharat, where we bridge the gap between automotive excellence and enthusiast passion. What started as a simple blog has evolved into India's premier destination for supercar reviews, technical deep-dives, and cutting-edge racing coverage.
                            </p>
                            <p>
                                Our mission is simple: to provide unapologetic, high-octane content that fuels your obsession with machines. From the roar of a V12 to the silent surge of electric hypercars, we cover it all with a focus on cinematic quality and technical accuracy.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-white font-bold mb-2">Technical Insight</h4>
                                <p className="text-gray-500 text-sm">Deep dives into engineering and performance metrics.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Cinematic Quality</h4>
                                <p className="text-gray-500 text-sm">Visual storytelling that captures every curve and sound.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Global Coverage</h4>
                                <p className="text-gray-500 text-sm">From local launches to international motor shows.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Community First</h4>
                                <p className="text-gray-500 text-sm">Building a space for every petrolhead in India.</p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a href="#contact" className="inline-flex items-center text-red-600 font-bold hover:text-red-500 transition-colors">
                                LEARN MORE ABOUT OUR VISION
                                <i className="ri-arrow-right-line ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
