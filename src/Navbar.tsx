export default function Navbar() {
  return (
    <div className="flex flex-row items-center w-344 h-19 bg-[#1A1D1F] rounded-2xl p-5 border border-[#272B30]">
      <div className="flex flex-row items-center gap-[155.5px] w-full">
        <div className="flex flex-row gap-5 items-center">
          <img className="-translate-y-1" src="/uzchess.svg" alt="icon" />

          <div className="w-px h-6 bg-[#3D4549]"></div>

          <div className="flex flex-row gap-2 items-center">
            <h2 className="text-[15px] font-medium">O'zbekcha</h2>
            <img src="/arrow-down.svg" alt="icon" />
          </div>
        </div>

        <div className="flex flex-row items-center gap-[70.5px]">
          <div className="text-[14px]font-medium flex flex-row items-center gap-10">
            <h3>Asosiy</h3>
            <h3>Yangiliklar</h3>
            <h3>Kurslar</h3>
            <h3>Kutubxona</h3>
            <h3>Bog'lanish</h3>
          </div>

          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row gap-6">
              <img src="/search.svg" alt="icon" />
              <img src="/Component.svg" alt="icon" />
              <img src="/notifications.svg" alt="icon" />
            </div>

            <div className="bg-[#3D4549] w-px h-6"></div>

            <div className="flex flex-row items-center gap-1.5">
              <p className="text=[16px] font-normal">Jasurbek Pulatov</p>
              <img className="w-8 h-8" src="/profile.png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
