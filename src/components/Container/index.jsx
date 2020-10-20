import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import toggleUpdating from '../../store/actions/updating'
import Card from '../Card'
import NewCard from '../NewCard'
import { CardService, ContainerService } from '../../services/api/index'
import { Wrapper, Title, CardBox, Delete, Update, Form, Textarea, Confirm, Cancel } from './style'
import useOutsideClick from '../../hooks/useOutsideClick'

const Container = ({ title, id, updating, dispatch }) => {
  const [ container, setContainer ] = useState({
    id: id,
    title: title
  })
  const [ cards, setCards ] = useState(null)
  const [ editable, setEditable ] = useState(false)
  const formRef = useRef(null)

  const cardService = new CardService()
  const containerService = new ContainerService()

  useOutsideClick(formRef, () => {
    editable && setEditable(false)
  })

  useEffect(() => {
    editable && formRef.current.querySelector('textarea').focus()
  }, [editable])

  useEffect(() => {
    cardService.getAllByContainer(id)
      .then(res => setCards(res.data))
      .catch(err => {})
  }, [updating])

  const handleUpdate = (e) => {
    e.preventDefault()

    containerService.update(container)
      .catch(err => {})
      .finally(() => {
        dispatch(toggleUpdating(!updating))
        setEditable(false)
      })
  }

  const handleDelete = (id) => {
    containerService.remove(id)
      .catch(err => {})
      .finally(() => dispatch(toggleUpdating(!updating)))
  }

  return (
    <Wrapper>
      {!editable && (
        <Title>{title}</Title>
      )}
      {editable && (
        <Form onSubmit={(e) => handleUpdate(e)} ref={formRef}>
          <Textarea onChange={e => setContainer({...container, title: e.target.value})} defaultValue={container.title} placeholder='Digite alguma coisa...'/>
          <div>
              <Confirm type='submit'>Atualizar</Confirm>
              <Cancel onClick={() => setEditable(!editable)} type='button'>Cancelar</Cancel>
            </div>
        </Form>
      )}
      <CardBox>
        {cards?.map((item, index) => (
          <Card key={index} title={item.title} id={item.id} idContainer={id}/>
        ))}
      </CardBox>
      <NewCard idContainer={id}/>
      <Update onClick={() => setEditable(true)}>E</Update>
      <Delete onClick={() => handleDelete(id)}>X</Delete>
    </Wrapper>
  )
}

export default connect(state => ({ updating: state.updating }))(Container)