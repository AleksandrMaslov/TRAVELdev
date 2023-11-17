import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ITrip } from 'src/models'
import { RoutesEnum } from 'src/router/routes'
import countries from 'src/utils/countries'

import classes from './TripItem.module.css'

interface TripItemProps {
  trip: ITrip
}

const TripItem: FC<TripItemProps> = ({ trip }) => {
  const { id, country, place, description } = trip
  const { name, flag } = countries[country]
  const path = RoutesEnum.TRIP.replace(':id', id)

  return (
    <Link to={path} className={classes.tripItem}>
      {flag}

      <h2>{name}</h2>

      {description && <h3 className={classes.description}>{description}</h3>}

      {place && <h5>{`(${place})`}</h5>}
    </Link>
  )
}

export default TripItem
