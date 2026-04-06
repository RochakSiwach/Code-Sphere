import React, { useState } from 'react'

const welcomePage = () => {

  const[view, setView] = useState('one')

  return (
    <>
    

<button onClick={()=>{
  setView("one")
}}>One</button>
<button onClick={()=>{
  setView("two")
}}>Two</button>
<button onClick={()=>{
  setView("one")
}}>four</button>
<button onClick={()=>{
  setView("four")
}}>Four</button>

          <h1>Welcome Jii</h1>

      {view === 'one' &&(
        <div>
          hello jiii
        </div>
      )}


{view === 'two' &&(
        <div>
          two
        </div>
      )}


{view === 'three' &&(
        <div>
          threeeee
        </div>
      )}


{view === 'four' &&(
        <div>
            Fourrrr
        </div>
      )}

    </>
  )
}

export default welcomePage