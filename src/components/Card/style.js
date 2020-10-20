import styled from '@emotion/styled'
import TextareaAutosize from 'react-textarea-autosize'

const Wrapper = styled.div`
  position: relative;

  margin-bottom: 1rem; 
  padding: 1rem;

  border: 1px solid #04265780;

  &:last-of-type {
    margin: 0;
  }

  &:hover {
    > button {
      opacity: 1;
    }
  }
`

const Title = styled.h3`
  white-space: normal;

  font-size: 1.125rem;
`

const Delete = styled.button`
  position: absolute;
  top: -.75rem;
  right: -.75rem;
  
  width: 1.5rem;
  height: 1.5rem;

  background-color: #f68888;
  border-radius: 100%;
  border: none;
  box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.5);

  line-height: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #FFF;

  transition: all .15s ease-in-out;
  opacity: 0;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #fe5b6e;
  }
`

const Update = styled.button`
  position: absolute;
  top: -.75rem;
  right: 1.25rem;

  width: 1.5rem;
  height: 1.5rem;

  background-color: #f68888;
  border-radius: 100%;
  border: none;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);

  line-height: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #FFF;

  transition: all .15s ease-in-out;
  opacity: 0;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #fe5b6e;
    opacity: 1;
  }
`

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  margin-bottom: 1rem;

  border: none;
  background-color: transparent;

  font-size: 1.125rem;
  color: #FFF;

  resize: none;
  outline: none;
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

export { Wrapper, Title, Delete, Update, Textarea, Confirm, Cancel }