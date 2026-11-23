import TopBookItem from "./TopBookItem.tsx";

export default function TopBooks({title}) {
  return <div className="flex flex-col gap-4.5 bg-[#1A1D1F] rounded-lg w-81.5 border border-[#1F272A]">
    <div className="flex flex-row justify-between" style={{padding: '16px 16px 0 16px'}}>
      <h1 style={{fontSize: '18px', color: '#FCFCFC', fontWeight: '500'}}>{title}</h1>
      <button className="flex flex-row items-center" style={{color: '#9DA1A3', backgroundColor: 'transparent', border: 'none'}}>
        Barchasi
        <img src="/arrow-right.svg" alt="icon"/>
      </button>
    </div>
    <div className="flex flex-col" style={{gap: '12px', overflow: 'hidden', padding: '0 0 16px 16px'}}>
      <TopBookItem author="D.Bronstein" title="Zurixdagi shaxmat musobaqasi" image="/book.png"/>
      <div style={{width: '310px', height: '1px', backgroundColor: '#1F272A'}}></div>
      <TopBookItem author="A.Nimzowitsch" title="Mening tizimim" image="/book2.png"/>
      <div style={{width: '310px', height: '1px', backgroundColor: '#1F272A'}}></div>
      <TopBookItem author="B.Fischer" title="Mening esdaqolarlik o'yinlarim" image="/book3.png"/>
    </div>
  </div>
}