import styled from '@emotion/styled'
import TextareaAutosize from 'react-textarea-autosize'

const Wrapper = styled.div`
  border-radius: 0 0 10px 10px;

  overflow: hidden;
`

const Button = styled.button`
  width: 100%;
  padding: 1rem 2rem;

  background-color: #042657;
  border: none;

  text-align: left;
  font-size: 1.125rem;
  font-weight: 600;
  color: #FFF;

  transition: all .15s ease-in-out;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #274670;
  }
`

const Form = styled.form`
  padding: 1rem;

  background-color: #274670;
  border-top: 2px solid #042657;
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

export { Wrapper, Button, Form, Textarea, Confirm, Cancel }