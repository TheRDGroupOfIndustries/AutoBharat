export function Contact() {
    return (
        <section className="bg-black py-24 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a partnership proposal or just want to talk cars? Reach out and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-red-600/30 transition-colors">
                            <div className="bg-red-600/10 p-3 rounded-lg mr-6">
                                <i className="ri-mail-send-line text-2xl text-red-600"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Email Us</h3>
                                <p className="text-gray-400">contact@theautobharat.com</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-red-600/30 transition-colors">
                            <div className="bg-red-600/10 p-3 rounded-lg mr-6">
                                <i className="ri-map-pin-line text-2xl text-red-600"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Location</h3>
                                <p className="text-gray-400">Varanasi & Delhi, India</p>
                            </div>
                        </div>

                        <div className="flex items-start bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-red-600/30 transition-colors">
                            <div className="bg-red-600/10 p-3 rounded-lg mr-6">
                                <i className="ri-share-line text-2xl text-red-600"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                    <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                                        <i className="ri-twitter-x-line"></i>
                                    </a>
                                    <a href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                                        <i className="ri-facebook-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 shadow-2xl backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition-colors resize-none"
                                placeholder="Tell us more about your inquiry..."
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-red-600 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 active:scale-[0.98]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
