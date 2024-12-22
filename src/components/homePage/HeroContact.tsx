import { ChevronDown, MapPin, Search } from "lucide-react";

const HeroContact = () => {
  return (
    <div className="flex flex-col py-8">
      <div className="flex items-center gap-4">
        <button
          style={{
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
          }}
          className="bg-[#ffffffa8] px-5 py-2 uppercase leading-[36px] tracking-[0.2em] text-[#02598A] drop-shadow-custom backdrop-blur-custom"
        >
          Call
        </button>
        <button
          style={{
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
          }}
          className="px-5 py-2 uppercase leading-[36px] tracking-[0.2em] text-[#02598A] drop-shadow-custom backdrop-blur-custom"
        >
          Gallery
        </button>
      </div>
      <div
        style={{
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
        }}
        className="flex w-full max-w-[920px] items-center justify-between gap-4 bg-white/80 px-8 py-6 drop-shadow-custom backdrop-blur-custom"
      >
        <div className="flex w-full flex-col items-start gap-5 md:max-w-[644px] md:flex-row">
          {/* Location Section */}
          <div className="flex w-[calc(100%-50px)] items-center gap-2 border-b-[1px] border-r-[1px] border-gray-300 pb-5 pr-4 md:border-b-0 md:pb-0">
            <div>
              <h4 className="mb-3 font-Poppins text-lg font-bold">Location</h4>
              <p className="flex items-center gap-2 text-sm text-[#0E0E21]">
                ELMANSOURA, EGYPT <MapPin className="h-[20px] w-6" />
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-[calc(100%-48px)] border-b-[1px] border-gray-300 pb-5 pr-4 md:border-b-0 md:border-r-[1px] md:pb-0">
            <h4 className="mb-3 font-Poppins text-lg font-bold">Contact</h4>

            <div className="flex items-center justify-between">
              <p className="flex gap-2 text-sm text-[#0E0E21]">+20106566768</p>

              <ChevronDown className="h-[20px] w-6" />
            </div>
          </div>

          {/* Price Range Section */}
          <div className="w-[calc(100%-48px)] p-0 md:pl-4">
            <h4 className="mb-3 font-Poppins text-lg font-bold">Price Range</h4>
            <p className="flex items-center gap-5 text-sm text-gray-600">
              LE
              <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[15px] bg-black text-white md:hidden">
                <Search className="h-5 w-5" />
              </div>
            </p>
          </div>
        </div>

        {/* Search Icon */}
        <div className="hidden h-[54px] w-[54px] cursor-pointer items-center justify-center rounded-[15px] bg-black text-white md:flex">
          <Search className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
