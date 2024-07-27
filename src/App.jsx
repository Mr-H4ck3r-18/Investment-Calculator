import UserInput from "./components/UserInput"
import { useState } from "react"
import Results from "./components/Results"
function App() {
  const [values, setValues] = useState({ initialInvestment: 5000, annualInvestment: 1000, expectedReturn: 15, duration: 30 })
  const validInput=values.duration>0
  const handleChange = (name, value) => {
    setValues(prev => {
      return {
        ...prev,
        [name]: +value,
      }
    })
  }
  return (
    <>
      <UserInput onChange={handleChange} values={values} />
      {validInput?<Results values={values} />:<p className='center'>Please enter duration more than 0</p>}
    </>
  )
}

export default App
