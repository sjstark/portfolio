import React, { useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { clamp } from 'lodash'


function restrictedTranslation([x, y], stringLength) {
  let hypoteneus = Math.pow(x, 2) + Math.pow(y, 2)

  // Pythagorean theorem to see if coord within limit
  if (hypoteneus <= Math.pow(stringLength, 2)) {
    console.log([x, y])
    return [x, y]
  }
  let theta = Math.atan(y / x)

  let x2 = Math.cos(theta) * stringLength
  let y2 = Math.sin(theta) * stringLength

  if (x < 0) {
    x2 *= -1
    y2 *= -1
  }

  console.log([x2, y2])
  return [x2, y2]

}


export default function Handle({ stringLength = 300, handleWidth = 20 }) {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    set({
      xy: down
        ?
        restrictedTranslation(movement, stringLength)
        :
        [0, 0],
      config: config.wobbly
    })
  })

  return (
    <>
      <div style={{ border: '2px dashed red', width: stringLength * 2, height: stringLength * 2, borderRadius: '50%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto' }} />
      <animated.div {...bind()} className='string__handle'
        style={{
          width: `${handleWidth}px`,
          height: `${handleWidth}px`,
          transform: xy.interpolate((x, y) => `translate3d(${x - handleWidth / 2}px, ${y - handleWidth / 2}px, 0)`)
        }}>
      </animated.div >
    </>
  )
}
