import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Container from '../Container'
import { ContainerService } from '../../services/api/index'
import { Wrapper } from './style'
import NewContainer from '../NewContainer'

const Main = ({ updating }) => {
  const [ containers, setContainers ] = useState(null)
  const containerService = new ContainerService()
  
  useEffect(() => {
    containerService.getAll()
      .then(res => {
        setContainers(res.data)
      })
      .catch(error => console.log(error.response.data))
  }, [updating])

  return (
    <Wrapper>
      {containers?.map((item, index) => (
        <Container key={index} title={item.title} id={item.id}/>
      ))}
      <NewContainer/>
    </Wrapper>
  )
}

export default connect(state => ({ updating: state.updating }))(Main)