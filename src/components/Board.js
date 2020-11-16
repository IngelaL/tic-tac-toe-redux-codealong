import React from 'react'
import { useSelector } from 'react-redux'
import { Square } from 'components/Square'

export const Board = () => {
  // ((store) function takes the entire store from redux and retirns something from that store (store.game.squares)
  const squares = useSelector ((store) => (store.game.squares))

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
