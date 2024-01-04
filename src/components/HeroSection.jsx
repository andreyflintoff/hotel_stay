import image from '../assets/christian-lambert-vmIWr0NnpCQ-unsplash.jpg'

export function HeroSection() {
  return (
    <div className="relative w-full pb-8">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="mt-8 flex text-white max-w-max items-center space-x-2 rounded-full bg-[#0B8185] p-1">
            <div className="rounded-full bg-[#7c2b10d0] p-1 px-2">
              <p className="text-sm font-medium">DREAM&apos;</p>
            </div>
            {/* <p className="text-sm font-medium">Find Your Hotel &rarr;</p> */}
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
            Discover amazing places and Enjoy a <span className='text-[#0B8185] capitalize'>memorable experience</span>
          </h1>
          <p className="mt-8 text-lg">
          With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.

Fringed by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west. As you travel the expanse of the country, you are greeted by diverse nuances of cuisines, faiths, arts, crafts, music, nature, lands, tribes, history and adventure sports. India has a mesmeric conflation of the old and the new. As the bustling old bazaars rub shoulders with swanky shopping malls, and majestic monuments accompany luxurious heritage hotels, the quintessential traveller can get the best of both worlds. Head to the mountains, enjoy a beach retreat or cruise through the golden Thar, India has options galore for all.
          </p>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 rounded object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
