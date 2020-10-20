import styled from '@emotion/styled'
import TextareaAutosize from 'react-textarea-autosize'

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 320px;
  max-width: 320px;
  max-height: 100%;
  margin-right: 2rem;

  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);

  h2:hover ~ button {
    opacity: 1;
  }
`

const Title = styled.h2`
  padding: 1rem;
  
  background-color: #042657;
  border-radius: 10px 10px 0 0;

  white-space: normal;
  text-align: center;
  font-size: 1.5rem;
  color: #FFF;
`

const CardBox = styled.div`
  padding: 1rem;

  overflow-y: auto;
  transition: all .15s ease-in-out;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #66778c;
    border-radius: 8px;
    border: 2px solid #FFF;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #042657 ;
    }
  }
`

const Delete = styled.button`
  position: absolute;
  top: -.75rem;
  right: -.75rem;
  
  width: 2rem;
  height: 2rem;

  background-color: #f68888;
  border-radius: 100%;
  border: none;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);

  line-height: 0;
  font-size: 1.4rem;
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

const Update = styled.button`
  position: absolute;
  top: -.75rem;
  right: 1.75rem;

  width: 2rem;
  height: 2rem;

  background-color: #f68888;
  border-radius: 100%;
  border: none;
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);

  line-height: 0;
  font-size: 1.4rem;
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

const Form = styled.form`
  padding: 1rem;

  background-color: #274670;
  border-radius: 10px 10px 0 0;
`

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  margin-bottom: 1rem;

  border: none;
  background-color: transparent;

  text-align: center;
  font-size: 1.5rem;
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

export { Wrapper, Title, CardBox, Delete, Update, Form, Textarea, Confirm, Cancel }