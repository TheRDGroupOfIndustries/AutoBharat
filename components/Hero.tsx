export function Hero() {
    return (
        <section
            className="relative items-center bg-[url('https://readdy.ai/api/search-image?query=high%20speed%20luxury%20sports%20car%20racing%20on%20dark%20asphalt%20road%20at%20night%20with%20motion%20blur%20lights%20and%20dramatic%20lighting%20cinematic%20automotive%20photography%20black%20background%20premium%20feel&width=1920&height=1080&seq=hero001&orientation=landscape')] bg-cover bg-fixed box-border caret-transparent flex justify-center min-h-[1000px] bg-center text-white"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
            <div className="relative z-10 box-border caret-transparent max-w-screen-xl text-center w-full mx-auto px-6">
                <h1 className="text-6xl font-black box-border caret-transparent leading-[60px] mb-6 md:text-8xl md:leading-[96px]">
                    India&#39;s Auto Infotainment Hub
                </h1>

                <p className="text-gray-300 text-xl font-light box-border caret-transparent leading-7 mb-8 md:text-2xl md:leading-8">
                    Supercars • Reviews • Facts • Racing
                </p>

                <div className="box-border caret-transparent gap-x-6 flex flex-col justify-center gap-y-6 md:flex-row">
                    {/* HeroButton 1 */}
                    <button className="font-bold items-center caret-transparent flex justify-center text-nowrap px-10 py-4 rounded-lg text-black bg-white hover:bg-gray-100">
                        <i className="ri-play-line text-xl box-border caret-transparent block leading-7 text-nowrap mr-3 text-black"></i>
                        Watch Videos
                    </button>

                    {/* HeroButton 2 */}
                    <button className="font-bold items-center caret-transparent flex justify-center text-nowrap px-10 py-4 rounded-lg text-blue-600 bg-transparent shadow-[rgba(37,99,235,0.3)_0px_0px_20px_0px] border-blue-600 border-solid border-2 hover:text-white hover:bg-blue-600">
                        <i className="ri-roadster-line text-xl box-border caret-transparent block leading-7 text-nowrap mr-3 text-blue-600"></i>
                        Explore Garage
                    </button>
                </div>
            </div>
        </section>
    );
}
