import Quantity from "./Quantity";

export default function CartSectionItem({image, title, newPrice, oldPrice }){
    return <div className="relative w-5xl h-46 border border-[#1F272A] bg-[#1A1D1F] rounded-xl p-5">
    
            <button className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full border border-[#1F272A] bg-[#1A1D1F] flex items-center justify-center">
              <img src="/iks.svg" alt="close" className="w-4 h-4" />
            </button>
    
            <div className="flex flex-row gap-3">
              <div className="flex flex-col relative shrink-0 w-36 h-36 items-center overflow-hidden rounded-sm">
                <img className="blur-xl object-cover" src={image} alt="image" />
                <img className="absolute top-5.5 left-9.5 z-0 w-17 h-25 rounded-sm" src={image} alt="image" />
              </div>
    
              <div className="flex flex-col w-full gap-5">
                <div>
                  <h1 className="w-150.5 h-12 font-bold text-[20px]">{title}</h1>
                </div>
    
                <div className="flex flex-row justify-between items-end">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[#82CC27] text-[20px] font-bold">{newPrice}</p>
                    <p className="text-[#F7F9FA]/64 text-[14px] line-through decoration-[#DC2D2D]/80">{oldPrice}</p>
                  </div>
                  <Quantity/>
                </div>
                  
              </div>
            </div>
          </div>
}