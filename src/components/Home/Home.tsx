'use client'
import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  min-height: 1500px;
  position: relative;
`

const Container = styled.div`
  margin: auto;
  width: 80%;
  background-color: white;
  margin-top: 50px;
`

const Header = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  height: 50px;
`

function Home() {
  return (
    <>
      <Main>
        <Header>header</Header>
        <Container>container</Container>
      </Main>
    </>
  )
}

export default Home
