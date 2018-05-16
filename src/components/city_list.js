import React from 'react'
import Link from 'gatsby-link'

const CityList = props => (
  <ul>
    {props.items.map(item => (
      <CityListItem key={item.internalId} prefix={props.prefix} item={item} />
    ))}
  </ul>
)

const CityListItem = props => {
  const url = `${props.prefix}/map?id=${props.item.internalId}`
  const name = `${props.item.name}, ${props.item.country}`
  return (
    <li>
      <Link to={url}>{name}</Link>
    </li>
  )
}

export default { CityList, CityListItem }
