import React from 'react'

export default function ProductNotFoundMessage({buttonClicked,searchResult}) {
  return (
    <>
      {
        (searchResult.length === 0 && buttonClicked)
          ? <h2> Nenhum produto foi encontrado</h2>
          : null
      }
    </>
  )
}