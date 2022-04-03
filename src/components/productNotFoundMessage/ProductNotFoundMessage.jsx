import React from 'react'

export default function ProductNotFoundMessage({buttonClicked,searchResult}) {
  return (
    <>
      {
        (searchResult.length === 0 && buttonClicked)
          ? <h1> Nenhum produto foi encontrado</h1>
          : null
      }
    </>
  )
}