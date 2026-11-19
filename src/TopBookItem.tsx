export default function TopBookItem({author, title, image}) {
    return <div className="flex flex-row" style={{gap: '10px'}}>
        <div>
            <img style={{width: '54px', height: '80px', borderRadius: '8px'}} src={image} alt="image"/>
        </div>
        <div className="flex flex-col justify-between" style={{paddingBottom: '18px'}}>
            <h2 style={{fontSize: '14px', color: '#FCFCFC'}}>{title}</h2>
            <p style={{fontSize: '13px', color: 'rgba(240,240,240,72%)'}}>{author}</p>
        </div>
    </div>
}