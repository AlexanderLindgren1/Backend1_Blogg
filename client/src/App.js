import React, { useEffect, useState } from "react"

function App() {

  const [backenddata, setBackenddata] = useState([])
  useEffect(() => {

    fetch("/posts").then(
      response => response.json(

      ).then(
        data => {
    
          setBackenddata(data)
        }
      )
    )
  }, [])

  return (
    <div>
      {(typeof backenddata === "undefined") ? (<p>Loading</p>) : backenddata.map((user,index)=> (<p key={index}>{user.username}</p>) )}

    </div>
  )
}
export default App