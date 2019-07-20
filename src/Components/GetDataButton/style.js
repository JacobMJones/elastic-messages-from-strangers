import styled from 'styled-components'

const BasicButton = styled.button `
    color: palevioletred;
    width:200px;
    height:200px;
    border-radius: 35px;
  
    &:focus{
        {outline:0}
    }
`

export {BasicButton}