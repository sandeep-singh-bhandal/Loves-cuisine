"use client"
import { useState } from 'react'
import classNames from 'classnames'
import styles from './StarRating.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function StarRating({ value }) {
  return (
    <div className={styles['star-rating']}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1
        return (
          <FontAwesomeIcon
            icon={faStar}
            key={index}
            data-value={ratingValue}
            className={classNames(styles.star, {
              [styles['marked']]: (value) >= ratingValue
            })} 
          />
        )
      })}
    </div>
  )
}

export default StarRating
