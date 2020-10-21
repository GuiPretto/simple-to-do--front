import React, { useRef, useState } from 'react'

// Libraries
import { connect } from 'react-redux'

// Hooks
import useOutsideClick from '../../hooks/useOutsideClick'

// Api
import { CardService } from '../../services/api/index'

// Redux Store
import toggleUpdating from '../../store/actions/updating'

// Components
import { Wrapper, Button, Form, Textarea, Confirm, Cancel } from './style'

const NewCard = ({ idContainer, updating, dispatch }) => {
  const [ active, setActive ] = useState(false)
  const [ title, setTitle ] = useState('')
  const boxRef = useRef(null)
  const cardService = new CardService()

  useOutsideClick(boxRef, () => {
    if (active) {
      setActive(false)
      setTitle('')
    }
  })

  const handleSubmit = () => {
    setActive(false)
    if (title !== '') {
      cardService.create({title, idContainer})
        .catch((error) => console.log(error.response.data))
        .finally(() => dispatch(toggleUpdating(!updating)))   
    }
  }

  return (
    <Wrapper>
      {!active && (
        <Button onClick={() => setActive(!active)}>Novo Card +</Button>
      )}
      {active && (
        <Form onSubmit={() => handleSubmit()} ref={boxRef}>
          <Textarea onChange={e => setTitle(e.target.value)} placeholder='Digite alguma coisa...'/>
          <div>
            <Confirm type='submit'>Salvar</Confirm>
            <Cancel onClick={() => setActive(!active)} type='button'>Cancelar</Cancel>
          </div>
        </Form>
      )}
    </Wrapper>
  )
}

export default connect(state => ({ updating: state.updating }))(NewCard)