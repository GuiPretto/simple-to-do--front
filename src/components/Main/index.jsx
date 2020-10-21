import React, { useEffect, useState } from 'react'

// Libraries
import { connect } from 'react-redux'

// Components
import Container from '../Container'
import NewContainer from '../NewContainer'
import { Wrapper } from './style'

// Api
import { ContainerService } from '../../services/api/index'

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