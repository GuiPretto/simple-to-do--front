import React, { useState } from 'react'

// Libraries
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { useDrag } from 'react-dnd'

// Api
import { CardService } from '../../services/api'

// Hooks
import toggleUpdating from '../../store/actions/updating'

// ReactDnD Items
import { ItemTypes } from '../../dnd/items'

// Components
import { Wrapper, Title, Delete, Update, Textarea, Confirm, Cancel, Options } from './style'

Modal.setAppElement('#root')

const modalStyles = {
  overlay: {
    backgroundColor: '#00000080'
  },
  content: {
    width: '320px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#274670',
    border: '4px solid #042657'
  }
}

const Card = ({ id, idContainer, title, updating, dispatch}) => {
  const cardService = new CardService()
  const [ editable, setEditable ] = useState(false)
  const [ card, setCard ] = useState({
    id: id,
    title: title,
    idContainer: idContainer
  })

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      card: card
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }) 
  })

  const handleOpenModal = (e) => {
    if (e.contentEl) {
      e.contentEl.querySelector('textarea').focus()
    }
  }

  const handleUpdate = (e, card) => {
    e.preventDefault()
    cardService.update(card)
      .catch(err => {})
      .finally(() => {
        dispatch(toggleUpdating(!updating))
        setEditable(false)
      })
  }

  const handleDelete = () => {
    cardService.remove(card.id)
      .catch(err => console.log(err))
      .finally(() => dispatch(toggleUpdating(!updating)))
  }

  return (
    <Wrapper ref={drag} isDragging={isDragging}>
      <Title>{title}</Title>
      {editable && (
        <Modal onAfterOpen={(e) => handleOpenModal(e)} style={modalStyles} onRequestClose={() => setEditable(false)} isOpen={editable}>
          <form onSubmit={(e) => handleUpdate(e, card)}>
            <Textarea onChange={e => setCard({...card, title: e.target.value})} defaultValue={card.title} placeholder='Digite alguma coisa...'/>
            <Options>
              <div>
                <Confirm type='submit'>Atualizar</Confirm>
                <Cancel onClick={() => setEditable(!editable)} type='button'>Cancelar</Cancel>
              </div>
              <Delete onClick={() => handleDelete()}>Excluir</Delete>
            </Options>
          </form>
        </Modal>
      )}
      <Update onClick={() => setEditable(true)}/>
    </Wrapper>
  )
}

export default connect(state => ({ updating: state.updating }))(Card)