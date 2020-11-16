import React from 'react'
import { useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'

export const Square = ({ value, index }) => {
  //dispatch allows us to trigger things within our store but we need an action to dipatch
  const dispatch = useDispatch()

  const handleClick = () => {
    //Here we dispatch an action. Index is the payload with the value of whatever that is at the moment
    dispatch(game.actions.captureSquare({ index }))
  }

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type="button"
      onClick={handleClick}>
      <Player value={value} />
    </button>
  )
}
