import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  padding: 16px 0;
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 30%;
  text-align: center;
  justify-self: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover{
    background: #9256c4;

  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  text-align: center;
`
