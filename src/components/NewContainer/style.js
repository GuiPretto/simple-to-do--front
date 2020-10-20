import styled from '@emotion/styled'
import TextareaAutosize from 'react-textarea-autosize'

const Wrapper = styled.div`
  position: relative;

  display: flex;

  width: 100%;
  min-width: 320px;
  max-width: 320px;
  max-height: 100%;

  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);

  overflow: hidden;
`

const Button = styled.button`
  width: 100%;
  padding: 1rem 2rem;

  border: none;

  text-align: left;
  font-size: 1.125rem;
  font-weight: 600;
  color: #042657;

  transition: all .15s ease-in-out;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #EBEBEB;
  }
`

const Form = styled.form`
  width: 100%;
  padding: 1rem;

  background-color: #274670;
`

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  padding: 1rem;

  border: none;
  background-color: transparent;

  font-size: 1.125rem;
  color: #FFF;

  resize: none;
  outline: none;
  
  &::placeholder {
    color: #FFFFFF80;
  }
`

const Confirm = styled.button`
  margin-right: 1rem;
  padding: .25rem .5rem;

  border-radius: 6px;
  border: none;
  background-color: #82c682;

  font-size: .875rem;
  font-weight: 700;
  color: #FFF;

  outline: none;
  cursor: pointer;
`

const Cancel = styled.button`
  margin-right: 1rem;
  padding: .25rem .5rem;

  border-radius: 6px;
  border: none;
  background-color: #f68888;

  font-size: .875rem;
  font-weight: 700;
  color: #FFF;

  outline: none;
  cursor: pointer;
`

const Dummy = styled.div`
  min-width: 1rem;
  height: 100%;
`

export { Wrapper, Button, Form, Textarea, Confirm, Cancel, Dummy }