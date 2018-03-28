import React from 'react';

const List = ({repos}) => {
  if(repos.length === 0) {
    return <p style={{color: "red"}}>No result</p>
  }

  return (
    repos.map((item, index) => {
      return (
          <li
            key={index}
            className='list-group-item'
            onClick={() => window.open(item.html_url, '_blank')}
          >
            <a>{item.name}</a>
          </li>
      )
    })
  )
}

export default List