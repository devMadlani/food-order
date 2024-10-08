import React from 'react'
import { useRouteError } from 'react-router-dom'
function ErrorElement() {
    const err = useRouteError()
    // console.log(err)
  return (
    <div className="flex flex-col mt-2">
      <h1 className="text-4xl text-center">
        {err.status} - {err.statusText}
      </h1>
      <h1 className="mx-auto mt-2">{err.data}</h1>
    </div>
  );
}

export default ErrorElement