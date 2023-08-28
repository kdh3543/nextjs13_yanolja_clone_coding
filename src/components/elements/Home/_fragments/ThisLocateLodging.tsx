import { MY_IMAGE } from '@/generated/images'
import styled from 'styled-components'
import { useEffect } from 'react'

const MainBox = styled.div`
  margin: auto;
  width: 100%;
  height: 300px;
  border: 1px solid blue;
  background-color: white;
  & > * {
    width: 95%;
    margin: auto;
  }
`

const Header = styled.div`
  height: 20%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 18px;
  }
  span {
    font-size: 12px;
  }
  button {
    height: 50%;
    cursor: pointer;
    background-color: transparent;
    color: #0152cc;
    border: none;
    font-weight: bolder;
  }
  button:hover {
    background-color: #0152cc10;
  }
`

const Content = styled.div`
  margin-top: 10px;
`

const Categories = styled.div`
  display: flex;
`
const Items = styled.span`
  padding: 5px 10px;
  border: 1px solid #e6e6e6;
  border-radius: 1.6rem;
  margin: 0px 5px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  color: #616161;
`
const ImgLists = styled.div`
  display: flex;
  margin-top: 10px;
`
const Img = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 1.5rem;
`
function ThisLocateLodging() {
  useEffect(() => {
    console.log(MY_IMAGE.HOME_IMG.THIS_LOCATED)
  }, [])
  return (
    <MainBox>
      <Header>
        <div>
          <h3>이 지역은 이 숙소</h3>
          <span>관심 지역 근처의 구매 많은 순 추천</span>
        </div>
        <button>전체보기</button>
      </Header>
      <Content>
        <Categories>
          {MY_IMAGE.HOME_IMG.THIS_LOCATED.map((val) => (
            <Items key={val.ID}>{val.TITLE}</Items>
          ))}
        </Categories>
        <ImgLists>
          <Img></Img>
        </ImgLists>
      </Content>
    </MainBox>
  )
}

export default ThisLocateLodging
