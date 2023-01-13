import './SideBarOption.scss'

function SideBarOption ({Icon , title , number , selected}) {
    return ( 
        <div className={`siderBarOption ${selected && 'siderBarOption--active'} `}>
            <Icon/>
            <h3 className="title">{title}</h3>
            <p className="number">{number}</p>
        </div>
     );
}

export default SideBarOption ;