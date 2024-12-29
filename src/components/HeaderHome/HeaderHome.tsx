import './HeaderHome.scss'
import { Sidebar } from 'primereact/sidebar'
import Logo from './../../assets/icons/carito-jpg.svg'
import { FC, useState } from 'react'
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { NavLink, useNavigate } from 'react-router-dom';
import { FloatLabel, Password } from './../../components/Prime';

type WhereShowNavbar = "navbar" | "sidebar";

export interface ItemsNavbar {
    label: string;
    path: string;
    whereShow: WhereShowNavbar[];
}


interface IconMenuProps {
    icon: string;
    fontSize?: string;
    onClick: () => void;
}
const PwaIconMenu: FC<IconMenuProps> = ({
    icon,
    onClick
}) => {
    return <section className='iconMenu'>
        <Button icon={"pi " + icon} severity="secondary" rounded onClick={onClick} className='text'/>
    </section>
}


interface HeaderHomeProps {
    items: ItemsNavbar[];
    userName: string;
    memberSince: Date;
    hasNotifications?: boolean;
    valueThemeMode: boolean;
    onChangeTheme: (mode: "light" | "dark") => void;
    onClickLogout: () => void;
    onClickNotifications: () => void;
    positionSidebar?: "right" | "top" | "bottom" | "left"
    handleProfileRedirection?: () => void;
}

export const HeaderHome: FC<HeaderHomeProps> = ({
    items,
    positionSidebar = 'right',
}) => {
    const [value, setValue] = useState('');
    const [showSidebar, setShowSidebar] = useState(false);
    const handleToggleSidebar = () => setShowSidebar(!showSidebar);
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate("/")
    }

    if (value == "Carito.31") {
        navigate("/betweenUs")
    }

    return (
        <header className='headerHome'>
            <section className='headerHome__logo'>
                <img src={Logo} alt="Carito jpg logo" onClick={() => handleRedirect()} className='cursor-pointer'/>
            </section>
            <nav className='headerHome__nav' >
                {
                    items.map(({ label, path, whereShow }, i) => (
                        whereShow.includes("navbar") &&
                        <div key={path + i + "navbar"} className={classNames('headerHome__item h__xxs',)}>
                            <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
                        </div>
                    ))
                }
            </nav>
            <section className='headerHome__menu'>
                <PwaIconMenu onClick={handleToggleSidebar} icon='pi-bars' />
            </section>

            <section className='headerHome__end'>
            <FloatLabel>
                <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="password">Between us</label>
            </FloatLabel>                
            </section>
            <Sidebar className='sidebarHome' visible={showSidebar} showCloseIcon={false} position={positionSidebar} onHide={handleToggleSidebar}>
                <section className='sidebarHome__content'>
                    <section className='sidebarHome__header'>
                        <div>
                            <h2 className='h__md'>Carito</h2>
                            <p className='micro'>Mi niña desde mayo 2024</p>
                        </div>
                        <div className='sidebarHome__icons'>
                            <Button icon="pi pi-times" severity="secondary" rounded onClick={() => setShowSidebar(false)} />
                        </div>

                    </section>
                    <section className='sidebarHome__items'>
                        {
                            items.map(({ label, path, whereShow }, i) => (
                                whereShow.includes("sidebar") &&
                                <div key={path + i + "sidebar"} className={classNames('sidebarHome__item h__xs',)}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
                                </div>
                            ))
                        }
                        <FloatLabel>
                            <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
                            <label htmlFor="password">Between us</label>
                        </FloatLabel>
                    </section>
                </section>
            </Sidebar>
        </header>
    )
}