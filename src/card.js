import React from 'react'
import { useSpring, animated } from 'react-spring'
import './styles.css'

export function Card({src}) {
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


  const [props, set] = useSpring({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } })

  return (
    <>
    <animated.div
      className="card" id="capture"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ backgroundImage: 'url('+src+')', transform: props.xys.interpolate(trans)}}
    />
    </>
  )
}
