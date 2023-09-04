import { MY_IMAGE } from '@/generated/images'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

export interface StarType {
  width: number
}

const MainBox = styled.div`
  margin: auto;
  width: 100%;
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
  div {
    margin-top: 30px;
  }
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
  margin-bottom: 10px;
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
  justify-content: space-between;
  width: 100%;
  padding-bottom: 50px;
  flex-wrap: wrap;
`

const HotelWrapper = styled.div`
  width: 45%;
  display: flex;
  margin-top: 5px;
  cursor: pointer;

  &>div: nth-child(2) {
    font-size: 13px;
    padding: 5px;
    & > span:last-child {
      font-size: 15px;
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }
  }
  // @media screen and (max-width: 1024px) {
  //   width: %;
  // }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

const HotelRank = styled.span`
  position: absolute;
  z-index: 3;
  color: white;
  background-color: black;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 5px;
  font-size: 12px;
`

const StarWrapper = styled.div`
  color: #aaa9a9;
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: gold;
`
const Star = styled.div<StarType>`
  color: #fff58c;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${(props) => props.width}%;
  -webkit-text-fill-color: gold;
`
const EmptyStar = styled.div`
  z-index: 0;
  padding: 0;
`

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  position: relative;
`

type hotelListType = {
  id?: number
  image?: string
  like?: string
  price?: string
  sale?: string
  title?: string
}

function ThisLocateLodging() {
  const [hotelList, setHotelList] = useState<hotelListType[]>([])
  useEffect(() => {
    const newData = MY_IMAGE.HOME_IMG.THIS_LOCATED[0].END_CLOSED
    if (newData) setHotelList(newData)
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
          {hotelList.map((val, idx) => (
            <HotelWrapper key={val.id}>
              <div>
                <HotelRank>{idx + 1}</HotelRank>
                <Img src={val.image}></Img>
              </div>
              <div style={{ position: 'relative', width: '80%' }}>
                <span>{val.title}</span>
                <div style={{ display: 'flex' }}>
                  <StarWrapper>
                    <Star width={Number(val.like) * 20}>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </Star>
                    <EmptyStar>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </EmptyStar>
                  </StarWrapper>
                  <span style={{ marginLeft: '3px' }}>{val.like}</span>
                </div>
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    right: '0px',
                    fontWeight: 'bold',
                  }}
                >
                  {val.price}
                </span>
                {/* <Star>★★★★★</Star> */}
              </div>
            </HotelWrapper>
          ))}
        </ImgLists>
      </Content>
    </MainBox>
  )
}

export default ThisLocateLodging
