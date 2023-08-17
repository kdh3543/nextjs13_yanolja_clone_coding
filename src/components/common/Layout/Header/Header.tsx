'use client'

import { styled } from 'styled-components'

const Content = styled.div`
  width: 100%;
  background-color: red;
  position: fixed;
  height: 50px;
`
function Header() {
  return <Content>header</Content>
}

export default Header
