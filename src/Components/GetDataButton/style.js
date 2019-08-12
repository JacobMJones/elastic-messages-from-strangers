import styled from 'styled-components'

const BasicButton = styled.button `
    color: palevioletred;
    width:80%;
    height:200px;
    border-radius: 35px;
    font-size:35px;
    &:focus{
        {outline:0}
    }
`

export {BasicButton}