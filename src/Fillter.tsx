export default function Fillter() {
  return (
    <div className="w-83.5 h-full bg-[#1A1D1F] border border-[#1F272A] rounded-lg p-5">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <h2 className="w-11 h-5.75 text-[18px] text-[#FCFCFC] font-medium">Filter</h2>
          <p className="w-17.75 h-6 text-[16px] text-[#1C92E0]">Tozalash</p>
        </div>

        <div className="flex flex-col w-71.5 gap-6">
          <div className="flex flex-col gap-4 bor">
            <p className="text-[#F7F9FA]/60 text-[12px]">DARAJANI TANLANG:</p>
            <div className="flex flex-row w-71.5 h-13.5 border border-[#232627] bg-[#15181A] rounded-lg pr-3.75 pl-4 items-center justify-between">
              Barchasi
              <img src="/arrow-down.svg" alt="icon" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#F7F9FA]/60 text-[12px]">KATEGORIYA:</p>
            <div className="flex flex-row w-71.5 h-13.5 border border-[#232627] bg-[#15181A] rounded-lg pr-3.75 pl-4 items-center justify-between">
              Barchasi
              <img src="/arrow-down.svg" alt="icon" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#F7F9FA]/60 text-[12px]">DARSLIK TILARI:</p>
            <div className="flex flex-row w-71.5 h-13.5 border border-[#232627] bg-[#15181A] rounded-lg pr-3.75 pl-4 items-center justify-between">
              Barchasi
              <img src="/arrow-down.svg" alt="icon" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#F7F9FA]/60 text-[12px]">REYTING:</p>
            <div className="flex flex-row w-71.5 h-full border border-[#232627] bg-[#15181A] pt-2 pb-2 pl-2.75 pr-2.75 gap-4 rounded-lg">
              <img className="w-10 h-10" src="/star 1.svg" alt="icon" />
              <img className="w-10 h-10" src="/star 1.svg" alt="icon" />
              <img className="w-10 h-10" src="/star 1.svg" alt="icon" />
              <img className="w-10 h-10" src="/star 1.svg" alt="icon" />
              <img className="w-10 h-10" src="/star 1.svg" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
