'use client'
import { MY_IMAGE } from '@/generated/images'
import styled from 'styled-components'
import { ICON_LIST } from './_fragments/home.data'

const Container = styled.div`
  margin: auto;
  width: 80%;
`

const Box = styled.div`
  margin: auto;
  width: 100%;
  height: 300px;
  border: 1px solid blue;
`

const Top = styled.div`
  width: 100%;
  background-color: white;
`

const Icon = styled.div`
  display: flex;

  & > img {
    width: 25%;
  }
`

const Slide = styled.div`
  margin: 10px 0px;
`

const Menu = styled.div`
  margin-bottom: 10px;
`

function Home() {
  return (
    <Container>
      <Top>
        <Icon>
          {ICON_LIST.map((item) => (
            <div key={item.id}>
              <img src={item.img} />
            </div>
          ))}
        </Icon>
        <Slide></Slide>
        <Menu></Menu>
      </Top>
      <Box>container</Box>
      <Box>container</Box>
      <Box>container</Box>
      <Box>container</Box>
      <Box>container</Box>
      <Box>container</Box>
    </Container>
  )
}

export default Home
