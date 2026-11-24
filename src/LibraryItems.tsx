import { useState } from "react";

export default function() {
    const [isOpen, setIsOpen] = useState(false);


    return <div className="w-256.5 h-133.75 bg-[#1A1D1F] rounded-xl border border-[#1F272A] pt-8 pl-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col relative w-48.75 h-68 items-center overflow-hidden rounded-sm">
              <img className="blur-xl object-cover" src="/sarlavha.png" alt="image" />

              <img className="absolute top-12 left-10 z-0 w-28.75 h-43.75" src="/sarlavha.png" alt="image" />
            </div>

            <div className="flex flex-col gap-5.5">
              <div className="flex flex-col gap-4">
                <h1 className="w-178.75 text-[#F7F9FA] text-[28px] font-bold">Shaxmatdagi qobilyatlaringizga qayta baxo bering</h1>

                <div className="flex flex-row items-center gap-3">
                  <img className="w-7 h-7" src="/price.svg" alt="icon" />
                  <p className="text-[#F7F9FA] text-[20px] font-bold">55 000.00 uzs</p>
                  <p className="text-[#F7F9FA]/64 text-[14px] line-through decoration-[#DC2D2D]/80">160 000.00 uzs</p>
                </div>

              </div>
              <div className="flex flex-col gap-5">

                <div className="flex flex-row">
                  <div className="w-46.75 h-15.5 border border-[#2C2F31] p-3">
                    <div className="flex flex-row items-center gap-1">
                      <img className="w-4 h-4" src="/levelBeginer.svg" alt="icon"/>
                      <p className="text-[#9DA1A3] text-[14px]">Daraja</p>
                    </div>
                    <h2 className="text-[14px] text-[#F7F9FA] font-medium">Boshlang'ich</h2>
                  </div>
                  <div className="w-46.75 h-15.5 border border-[#2C2F31] p-3">
                    <div className="flex flex-row items-center gap-1">
                      <img className="w-4 h-4" src="/user.svg" alt="icon"/>
                      <p className="text-[#9DA1A3] text-[14px]">Muallif</p>
                    </div>
                    <h2 className="text-[14px] text-[#F7F9FA] font-medium">Jeremy Silman</h2>
                  </div>
                  <div className="w-46.75 h-15.5 border border-[#2C2F31] p-3">
                    <div className="flex flex-row items-center gap-1">
                      <img className="w-4 h-4" src="/sarlavha-n.svg" alt="icon"/>
                      <p className="text-[#9DA1A3] text-[14px]">Sarlavha soni</p>
                    </div>
                    <h2 className="text-[14px] text-[#F7F9FA] font-medium">231</h2>
                  </div>
                  <div className="w-46.75 h-15.5 border border-[#2C2F31] p-3">
                    <div className="flex flex-row items-center gap-1">
                      <img className="w-4 h-4" src="/kalendar.svg" alt="icon"/>
                      <p className="text-[#9DA1A3] text-[14px]">Chop etilgan sana</p>
                    </div>
                    <h2 className="text-[14px] text-[#F7F9FA] font-medium">2002</h2>
                  </div>
                </div>

                

                <div className="flex flex-row gap-4 w-92.5 h-12.5">
                  <button className={`flex flex-row items-center h-12.5 px-10 rounded-lg text-white gap-2.5 ${isOpen ? 'bg-[#F7F9FA]/10' : 'bg-[#1C92E0]'}`} onClick={() => setIsOpen(!isOpen)}>
                    <img className="w-6 h-6" src={isOpen ? 'cart add.svg' : '/Component.svg'} alt="icon" />
                    {isOpen ? 'Savatchada' : 'Savatchaga'}
                  </button>

                  <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]/30 bg-[#F7F9FA]/10">
                    <img src="/heart.svg" alt="icon" />
                  </button>

                  <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]/30 bg-[#F7F9FA]/10">
                    <img src="/share.svg" alt="icon" />
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div className="w-246.5 h-49.25 gap-3">
            <h1 className="text-[24px] text-[#F7F9FA] font-bold">Kitob haqida</h1>
            <p className="text-[#C2C4C5] text-[16px]">Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan. Ushbu 4-nashr Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay yangi darajaga olib chiqadi. 1400 dan 2100 gacha bo'lgan reyting oralig'idagi o'yinchilar va shaxmat bo'yicha tayyor o'quv dasturini qidirayotgan o'qituvchilar uchun mo'ljallangan muallif o'quvchini nomutanosiblik asoslari orqali olib boradigan, barcha nomutanosibliklarning har bir tafsiloti o'zlashtirilishini ta'minlaydigan aqlni kengaytiruvchi sayohatni baham ko'radi. va shaxmat o'yinchisini/sevuvchisini har doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan qoldiradi: usta darajasidagi pozitsion poydevor.</p>
          </div>
        </div>
      </div>
}