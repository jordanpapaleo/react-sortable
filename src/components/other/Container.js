import React, { Component } from 'react'
import update from 'react/lib/update'
import Card from './Card'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd/modules/backends/HTML5'

class Container extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cards: [{
        id: 1,
        text: 'Write a cool JS library'
      }, {
        id: 2,
        text: 'Make it generic enough'
      }, {
        id: 3,
        text: 'Write README'
      }, {
        id: 4,
        text: 'Create some examples'
      }, {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
      }, {
        id: 6,
        text: '???'
      }, {
        id: 7,
        text: 'PROFIT'
      }]
    }

    this.moveCard = this.moveCard.bind(this)
  }

  moveCard (id, afterId) {
    console.log(id, afterId)
  }

  render () {
    const { cards } = this.state
    const style = {
      width: 400
    }

    return (
      <div style={style}>
        { cards.map((card, i) => {
          return (
            <Card key={card.id} index={i} id={card.id} text={card.text} moveCard={this.moveCard} />
          )
        })}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Container)
