export default function Hero() {
  return (
    <section className="py-16 lg:py-24 bg-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse">
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let&apos;s Make Awesome Things, Together.
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iste
            tenetur quasi tempora, dolore magnam, in quas perspiciatis rem,
            reiciendis, repellat placeat deserunt adipisci porro aperiam?
            Officia, sapiente, temporibus!
          </p>
          <button className="bg-orange-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors cursor-pointer">
            Start your project
          </button>
        </div>
      </div>
    </section>
  );
}
