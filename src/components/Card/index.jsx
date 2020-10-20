import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { CardService } from '../../services/api'
import toggleUpdating from '../../store/actions/updating'
import { Wrapper, Title, Delete, Update, Textarea, Confirm, Cancel } from './style'

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
  const [ card, setCard ] = useState({
    id: id,
    title: title,
    idContainer: idContainer
  })
  const [ editable, setEditable ] = useState(false)

  const cardService = new CardService()

  const handleOpenModal = (e) => {
    if (e.contentEl) {
      e.contentEl.querySelector('textarea').focus()
    }
  }

  const handleUpdate = (e) => {
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
      .catch(err => {})
      .finally(() => dispatch(toggleUpdating(!updating)))
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      {editable && (
        <>
        <Modal onAfterOpen={(e) => handleOpenModal(e)} style={modalStyles} onRequestClose={() => setEditable(false)} isOpen={editable}>
          <form onSubmit={(e) => handleUpdate(e)}>
            <Textarea onChange={e => setCard({...card, title: e.target.value})} defaultValue={card.title} placeholder='Digite alguma coisa...'/>
            <div>
              <Confirm type='submit'>Atualizar</Confirm>
              <Cancel onClick={() => setEditable(!editable)} type='button'>Cancelar</Cancel>
            </div>
          </form>
        </Modal>
        </>
      )}
      <Update onClick={() => setEditable(true)}>E</Update>
      <Delete onClick={() => handleDelete()}>X</Delete>
    </Wrapper>
  )
}

export default connect(state => ({ updating: state.updating }))(Card)