import PwaHeaderHome, { ItemsNavbar } from './../../components/HeaderHome';
import { useState } from 'react';
import { Outlet } from "react-router-dom";

const items: ItemsNavbar[] = [
    {
        label: 'Memories',
        path: './memories',
        whereShow: ["navbar", "sidebar"],
    },
    {
        label: 'Felicitaciones',
        path: './felicitaciones',
        whereShow: ["navbar", "sidebar"],
    }
];

export const HeaderHomeLayout = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <main className='h-full flex flex-column'>
            <PwaHeaderHome
                userName='Carito'
                memberSince={new Date("18/05/2024")}
                items={items}
                hasNotifications
                valueThemeMode={darkMode}
                onChangeTheme={(mode) => setDarkMode(mode !== "dark")}
                onClickLogout={() => console.log("onClickLogout")}
                onClickNotifications={() => console.log("onClickNotifications")}
                positionSidebar='right'
            />
            <Outlet />
        </main>
    )
}
