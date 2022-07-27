import React from "react"
import Header from "./Component/header"
import Tes from "./Component/module/tes"
import {Button, Input} from "./Component/module/name"

function App() {
  return(
    <React.Fragment>
      <h1 style={{textAlign: 'center'}}>Latihan Export import</h1>
      <Header/>
      <Tes/>
      <Input/>
      <Button/>
    </React.Fragment>
  )
}

export default App