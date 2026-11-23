export default function Footer() {
    return <div className="flex flex-col items-center" style={{ backgroundColor: '#1A1D1F', width: '1440px', height: '208px', gap: '12px', paddingTop: '25px' }}>
      <img src="/tegchess.svg" alt="icon" />
      <div className="flex flex-row items-center" style={{ fontSize: '14px', fontWeight: '400', width: '632px', height: '21px', gap: '23px' }}>
        <p>Biz haqimizda</p>
        <p>Cookie fayllari siyosati</p>
        <p>Foydalanish qoidalari</p>
        <p>Cookie fayllari siyosati</p>
      </div>
      <div className="flex flex-row items-center" style={{ gap: '14px' }}>
        <img src="instagram.svg" alt="icon" />
        <img src="telegram.svg" alt="icon" />
        <img src="youtube.svg" alt="icon" />
        <img src="twitter.svg" alt="icon" />
        <img src="facebook 01.svg" alt="icon" />
      </div>
      <div
        className="flex flex-row items-center justify-between"
        style={{
          fontSize: '16px',
          fontWeight: 400,
          width: '1440px',
          height: '40px',
          padding: '26px 24px',
          marginTop: '12px',
          backgroundColor: 'rgba(35, 34, 44, 4%)',
          borderTop: '1px solid #3D4549',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <p>© UzChess. All rights reserved.</p>

        <img src="/Group 1.svg" alt="icon" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}/>

        <p>Foydalanish qoidalari</p>
      </div>
    </div>
}