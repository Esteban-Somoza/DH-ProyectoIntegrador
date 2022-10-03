import React from 'react'

export default function Statistics({title, data}) {
  let info = data.data
  console.log(data.data);
  return (
    <div>
      <h3>Total {title} Count</h3>
      {
        info.nombre
      }
    </div>
  )
}
