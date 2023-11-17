import { AnimatePresence, MotionProps, motion } from 'framer-motion'
import React, { FC, useState } from 'react'

import { ITrip } from 'src/models'
import { RoutesEnum } from 'src/router/routes'
import countries from 'src/utils/countries'

import { Preview } from '..'

import classes from './TripItem.module.css'

interface TripItemProps extends MotionProps {
  trip: ITrip
}

const TripItem: FC<TripItemProps> = ({ trip, ...motionProps }) => {
  const { id, country, place, description } = trip
  const { name, flag } = countries[country]
  const path = `/TRAVEL${RoutesEnum.TRIP.replace(':id', id)}`

  const [isPreviewed, setPreviewed] = useState<boolean>(false)

  const extendedFlag = React.cloneElement(flag, {
    className: classes.no_events,
  })

  const mouseOverHandler = () => setPreviewed(true)
  const mouseLeaveHandler = () => setPreviewed(false)

  return (
    <motion.a
      {...motionProps}
      href={path}
      className={classes.tripItem}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {extendedFlag}

      <h2 className={classes.no_events}>{name}</h2>

      {description && <h3 className={classes.description}>{description}</h3>}

      {place && <h5 className={classes.no_events}>{`(${place})`}</h5>}

      <AnimatePresence>
        {isPreviewed && <Preview className={classes.preview} />}
      </AnimatePresence>
    </motion.a>
  )
}

export default TripItem
