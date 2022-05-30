import { useState } from 'react'

function DarkModeSwitch() {

    const root = document.querySelector(':root');

    let [darkModeActive, setDarkMode] = useState(
        localStorage.getItem('dark-mode') === 'true'
    );

    if (darkModeActive === true) {

        root.style.setProperty('--bg-body', '#1A1A1A');
        root.style.setProperty('--color', '#FFFFFF');
        root.style.setProperty('--bg-dynamic', '#282828');

        root.style.setProperty('--bg-loading-1', '#444444');
        root.style.setProperty('--bg-loading-2', '#5B5B5B');

        root.style.setProperty('--border-color', '#424242');

        root.style.setProperty('--bg-label-dynamic', '#424242');

    } else {

        root.style.setProperty('--bg-body', '#F6F6F6');
        root.style.setProperty('--color', '#000000');
        root.style.setProperty('--bg-dynamic', '#FFFFFF');

        root.style.setProperty('--bg-loading-1', '#F0F0F0');
        root.style.setProperty('--bg-loading-2', '#f9f9f9');

        root.style.setProperty('--border-color', '#F0F0F0');

        root.style.setProperty('--bg-label-dynamic', '#F6F6F6');

    }


    const ActivateDarkMode = () => {

        if (darkModeActive === true) {
            setDarkMode(false);
        
        localStorage.setItem('dark-mode', false);
        } else {
            setDarkMode(true);
            localStorage.setItem('dark-mode', true);
        }
    }

    if (darkModeActive) {

        return (
            <button className='bg-transparent border-0 p-32' onClick={ActivateDarkMode}>☀️</button>
        );

    } else {
        return (
            <button className='bg-transparent border-0 p-32' onClick={ActivateDarkMode}>🌙</button>
        );
    }

}

export default DarkModeSwitch;