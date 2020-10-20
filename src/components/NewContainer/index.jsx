import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import toggleUpdating from '../../store/actions/updating'
import useOutsideClick from '../../hooks/useOutsideClick'
import { ContainerService } from '../../services/api/index'
import { Wrapper, Button, Form, Textarea, Confirm, Cancel, Dummy } from './style'

const NewContainer = ({ idContainer, updating, dispatch }) => {
  const [ active, setActive ] = useState(false)
  const [ title, setTitle ] = useState('')
  const boxRef = useRef(null)
  const containerService = new ContainerService()

  useOutsideClick(boxRef, () => {
    if (active) {
      setActive(false)
      setTitle('')
    }
  })

  const handleSubmit = () => {

    setActive(false)
    if (title !== '') {
      containerService.create({title, idContainer})
        .catch((error) => console.log(error.response.data))  
        .finally(() => dispatch(toggleUpdating(!updating)))
    }
  }

  return (
    <>  
      <Wrapper>     
        {!active && (
          <Button onClick={() => setActive(!active)}>Novo Container +</Button>
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
      <Dummy/>
    </>
  )
}

export default connect(state => ({ updating: state.updating }))(NewContainer)