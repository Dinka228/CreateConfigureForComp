import React, {useState} from 'react';
import Configure from "../components/modals/configure";
import SetupList from "../components/modals/setupList";

const Main = () => {
    const [confVisible,setConfVisible] = useState(true)
    const [setupVisible,setSetupVisible] = useState(false)
    return (
        <div>
            <Configure show={confVisible} onHide={()=>setConfVisible(false)} showSetup={()=>setSetupVisible(true)}/>
            <SetupList show={setupVisible} onHide={()=>setSetupVisible(false)} showConf={()=>setConfVisible(true)}/>
        </div>
    );
};

export default Main;