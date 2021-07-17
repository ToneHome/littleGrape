import React  from 'react';
import MainScreen from '@/pages/appHome/components/MainScreen';
import Calc from '@/components/calc'
function App() {
    return (
        <div className="app-home">
            <MainScreen />
            <div>
               <Calc />
            </div>
        </div>
    )
}
export default App