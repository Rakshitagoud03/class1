import React from 'react'
import Button from './component/Button'
//component body ->functionl,const,arrow,const functional,class
function App(props){
    return(
        <div>
            <h1>JSX Part of react</h1>
            <button>Click Me</button>
            <hr/>

            <Button fname={'PUT'}/>
            <Button fname={'POST'}/>
            <Button fname={'DELETE'}/>
        </div>
    )
}
//default exports
export default App