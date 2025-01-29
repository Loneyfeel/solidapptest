import {useEffect, useState} from "react";
import './App.css'
import Main from "./screens/Main";
import Preloader from "./screens/Preloader";
import {tg, userDataUnsafe} from "./share/telegram/telegram.ts";
import {useTranslation} from "react-i18next";

function App() {

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { i18n } = useTranslation();

    async function loadContent () {
        await new Promise(resolve => setTimeout(resolve, 3500)) // Симуляция загрузки
        setIsLoaded(true)
    }

    function languageChange(){
        i18n.changeLanguage(userDataUnsafe.language_code);
        // i18n.changeLanguage('en');
    }

    useEffect(() => {
        loadContent()
        languageChange()
    }, []);

    tg.setBackgroundColor('#000000')
    tg.setHeaderColor('#000000')

    return (
        <>
            {!isLoaded ? (
                <Preloader/>
            ) : (
                <Main/>
            )}
        </>
    )
}

export default App
