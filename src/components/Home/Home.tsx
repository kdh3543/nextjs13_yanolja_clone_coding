'use client'
import { MY_IMAGE } from '@/generated/images'
import styled from 'styled-components'
import { EVENT_ICON_LIST, MAIN_ICON_LIST } from './_fragments/home.data'

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
  justify-content: space-around;
  flex-wrap: wrap;
  & > div {
    width: 25%;
    margin: 20px 0px;
    text-align: center;
    & > div {
      width: 50%;
      margin: auto;
      cursor: pointer;

      & > img {
        width: 40px;
      }
      & > p {
        font-size: 11px;
        font-weight: bold;
      }
    }
  }
`

const Slide = styled.div`
  margin: 10px 0px;
`

const Menu = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  & > div {
    width: 25%;
    margin: 20px 0px;
    text-align: center;
    & > div {
      width: 50%;
      margin: auto;
      cursor: pointer;

      & > img {
        width: 40px;
      }
      & > p {
        font-size: 11px;
        font-weight: bold;
      }
    }
  }
`

function Home() {
  return (
    <Container>
      <Top>
        <Icon>
          {MAIN_ICON_LIST.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.img} />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Icon>
        <Slide>여긴 슬라이드</Slide>
        <Menu>
          {EVENT_ICON_LIST.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.img} />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Menu>
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
