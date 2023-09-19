import React from 'react'

const App = () => {


  const relativeList = [
    { key: 'relativeListItem1', name: 'Aunt Jane' },
    { key: 'relativeListItem2', name: 'Uncle Bob' },
    { key: 'relativeListItem3', name: 'Cousin Alice' },
    { key: 'relativeListItem4', name: 'Grandma Mary' },
    // Add more relatives here
  ];


  return (
    <div id="main">
               <h1>Relatives to Visit This Diwali:</h1>
      <ol>
          {relativeList.map((relative) => (
            <li key={relative.key}>{relative.name}</li>
          ))}
      </ol>
    </div>
  )
}

export default App
