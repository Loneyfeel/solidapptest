import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Preloader from "./screens/Preloader";
import { useAppInit } from "./share/hooks/useAppInit";
import {AppContent} from "./components/AppContent/AppContent.tsx";

function App() {
    const { isLoaded } = useAppInit();

    return (
        <>
            {!isLoaded ? (
                <Preloader />
            ) : (
                <Router>
                    <AppContent />
                </Router>
            )}
        </>
    );
}

export default App;