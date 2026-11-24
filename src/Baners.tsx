export default function Baners() {
    return <div className="relative w-81.5 h-full rounded-lg bg-[#0B4789] border border-[#1F272A] p-4 overflow-hidden">
          <img className="absolute top-0 right-0" src="/Vector.svg" alt="icon" />

          <div className="flex flex-col gap-3">
            <div><img src="/Frame.svg" alt="icon" /></div>

            
              <div>
                <h1 className="w-73.5 text-[20px] font-bold">Aynan siz uchun qanday imtiyozlar borligini bilib oling</h1>
              </div>

              <button className="flex flex-row items-center justify-center gap-2.5 shrink-0 bg-[#1C92E0] w-37.25 h-10 rounded-lg">
                Batafsil
                <img className="w-5 h-5" src="/arrow-forward-circle.svg" alt="icon" />
              </button>
           
          </div>
      </div>
}