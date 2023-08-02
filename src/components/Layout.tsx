'use client'

import { styled } from 'styled-components'
import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'

const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  min-height: 1500px;
  position: relative;
`

const Content = styled.div`
  padding: 50px 0px;
`

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Main>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Main>
  )
}

export default Layout
