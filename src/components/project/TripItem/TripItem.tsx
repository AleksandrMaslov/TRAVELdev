import { FC } from 'react'

import { ITrip } from 'src/models'
import countries from 'src/utils/countries'

import classes from './TripItem.module.css'

interface TripItemProps {
  trip: ITrip
}

const TripItem: FC<TripItemProps> = ({ trip }) => {
  const { country, place, description } = trip
  const { name, flag } = countries[country]

  return (
    <div className={classes.tripItem}>
      {flag}
      <h2>{name}</h2>
      {description && <h3 className={classes.description}>{description}</h3>}
      {place && <h5>{`(${place})`}</h5>}
    </div>
  )
}

export default TripItem
