import React from 'react'
import { useParams } from 'react-router-dom'

function ErrorPage() {

    let {cardName} = useParams();

  return (
    <div>OOPS!! something when wrong, Go back or try another search term other than {`"${cardName}"`}</div>
  )
}

/*
Add styling to center message on screen
*/

export default ErrorPage