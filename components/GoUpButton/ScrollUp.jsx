"use client"
import { useEffect } from 'react'
import classNames from 'classnames'
import style from './ScrollUp.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


function ScrollUp() {
  useEffect(() => {
    const scrollUp = document.getElementById('scroll-up')
    window.addEventListener('scroll', () => {
        window.scrollY >= 200
          ? scrollUp.classList.add(style['scroll-up--show'])
          : scrollUp.classList.remove(style['scroll-up--show'])
      }
    )
  }, [])

  return (
    <a href='#' className={style['scroll-up']} id='scroll-up' title={'Go up!'}>
      <i
        className={classNames(style['scroll-up__icon'])}
      >
        <FontAwesomeIcon icon={faArrowUp}/>
      </i>
    </a>
  )
}

export default ScrollUp
