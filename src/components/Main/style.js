import styled from '@emotion/styled'

const Wrapper = styled.main`
  display: flex;
  align-items: flex-start;

  height: calc(100vh - 72px);
  padding: 1rem;

  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden; 
  scrollbar-width: thin;
  scrollbar-color: #90A4AE #002b41;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #042657 ;
    border-radius: 8px;
    border: 2px solid #ddd;
  }
`

export { Wrapper }