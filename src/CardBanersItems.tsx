export default function CardBanersItems() {
  return (
    <div className="w-81.5 h-full bg-[#0B1418]/80 border border-[#1F272A] rounded-2xl pl-4 pt-5 pr-4 pb-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <h3 className="text-[16px] shrink-0">To‘lov narxi:</h3>
          <h3 className="shrink-0">1 560 000.00 UZS</h3>
        </div>
        <div className="flex flex-row justify-between">
          <h3 className="text-[16px] shrink-0">Chegirma:</h3>
          <h3 className="shrink-0">1 560 00.00 UZS (10%)</h3>
        </div>
        <div className="flex flex-row justify-between">
          <h3 className="text-[16px] shrink-0">Kupon:</h3>
          <h3 className="shrink-0">0 UZS</h3>
        </div>
        <div className="flex flex-row justify-between">
          <h3 className="text-[16px] shrink-0">Yetkazib berish:</h3>
          <h3 className="shrink-0">0 UZS</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-77.5 h-px bg-[#1D2529]"></div>

        <div className="flex flex-row justify-between">
          <h1 className="text-[20px] text-[#FFFFFF] font-medium">Jami:</h1>
          <h1 className="text-[20px] text-[#FFFFFF] font-bold">1 404 000.00 UZS</h1>
        </div>

        <div className="w-77.5 h-px bg-[#1D2529]"></div>

        <div className="flex flex-col gap-2">
          <p className="text-[14px] text-[#F7F9FA] font-bold">Kupon</p>
          <div className="w-73 h-11 bg-[#13181C] rounded-xl border border-[#454F54] pt-3 pl-3">
            <p className="text-[#454F54] text-[14px] font-medium">Kupondagi kodni kiriting</p>
          </div>
        </div>

        <button className="flex flex-row items-center justify-center gap-2.5 w-73.5 h-12.5 bg-[#1C92E0] rounded-lg">
          <img src="/money.svg" alt="icon" />
          <p className="text-[20px] text-[#F7F9FA] font-medium">Rasmiylashtrish</p>
        </button>
      </div>
    </div>
  );
}
