export function Footer() {
    const socialIcons = [
        { iconClassName: "ri-instagram-line" },
        { iconClassName: "ri-twitter-x-line" },
        { iconClassName: "ri-facebook-line" }
    ];

    const quickLinks = [
        { text: "Home", href: "#home" },
        { text: "Videos", href: "#" },
        { text: "Products", href: "#" },
        { text: "Blog", href: "#blogs" }
    ];

    return (
        <footer className="bg-black box-border caret-transparent border-gray-800 py-16 border-t border-solid text-white">
            <div className="box-border caret-transparent max-w-screen-xl mx-auto px-6">
                <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mb-12 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
                    {/* Inlined FooterBrand */}
                    <div className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_2] md:col-start-[span_2]">
                        <div className="text-3xl box-border caret-transparent leading-9 mb-4 font-pacifico text-white">
                            TheAutoBharat
                        </div>
                        <p className="text-gray-400 box-border caret-transparent mb-6">
                            India&apos;s premier automotive content creator bringing you the latest
                            in supercars, reviews, and racing culture.
                        </p>
                    </div>

                    {/* Inlined Quick Links */}
                    <div className="box-border caret-transparent">
                        <h4 className="text-lg font-bold box-border caret-transparent leading-7 mb-4">
                            Quick Links
                        </h4>
                        <div className="box-border caret-transparent">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className={`text-gray-400 box-border caret-transparent block hover:text-white ${index > 0 ? "mt-2" : ""}`}
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Inlined Social Follow */}
                    <div className="box-border caret-transparent">
                        <h4 className="text-lg font-bold box-border caret-transparent leading-7 mb-4">
                            Follow Us
                        </h4>
                        <div className="box-border caret-transparent flex">
                            {socialIcons.map((icon, index) => (
                                <div
                                    key={index}
                                    className={`items-center bg-gray-800 box-border caret-transparent flex h-12 justify-center w-12 rounded-full hover:bg-red-600 ${index > 0 ? "ml-3" : ""}`}
                                >
                                    <i
                                        className={`text-lg box-border caret-transparent block leading-7 ${icon.iconClassName} text-white`}
                                    ></i>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Inlined Copyright */}
                <div className="box-border caret-transparent text-center border-gray-800 pt-8 border-t border-solid">
                    <p className="text-gray-400 box-border caret-transparent">
                        © 2026 TheAutoBharat. All rights reserved. Built with passion for
                        automotive excellence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
