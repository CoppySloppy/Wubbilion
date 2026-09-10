import { useMemo, useState } from "react";
import { DEFAULT_CSV_URL, STORAGE_KEYS } from './config';
import type { Screen } from "./types";

function App() {
    const [screen, useScreen] = useState<Screen>('setup');

    const initialUrl = useMemo(
        () => DEFAULT_CSV_URL || localStorage.getItem(STORAGE_KEYS.csvUrl) || '',
        []
    );


    return (
        <div className="stage">
            <div className="stage-inner">
                {screen === 'setup' && <SetupScreen initialUrl={initialUrl} />}
            </div>
        </div>
    );
}

export default App;