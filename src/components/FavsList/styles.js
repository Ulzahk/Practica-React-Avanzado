import styled from 'styled-components'

export const Link = styled.a`
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    display: inline-block;
    margin: 1%;
    overflow: hidden;
    position: relative;
    width: 31.33%;
    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`

export const Grid = styled.div`
    padding-top: 32px;
`

export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  text-align: center;
`