import { MY_IMAGE } from '@/generated/images'

export const MAIN_ICON_LIST = [
  { id: 1, img: MY_IMAGE.HOME_IMG.MOTEL, title: '모텔' },
  { id: 2, img: MY_IMAGE.HOME_IMG.HOTEL, title: '호텔/리조트' },
  { id: 3, img: MY_IMAGE.HOME_IMG.PENSION, title: '펜션/풀빌라' },
  { id: 4, img: MY_IMAGE.HOME_IMG.FAMILY, title: '가족형숙소' },
  { id: 5, img: MY_IMAGE.HOME_IMG.LEISURE, title: '레저/티켓' },
  { id: 6, img: MY_IMAGE.HOME_IMG.TRAFFIC, title: '교통' },
  { id: 7, img: MY_IMAGE.HOME_IMG.AIRPORT, title: '항공' },
  { id: 8, img: MY_IMAGE.HOME_IMG.ABROAD, title: '해외숙소' },
]

export const MAIN_SLIDE_LIST = Array.from(
  { length: MY_IMAGE.HOME_IMG.SLIDE_LIST.length },
  (item, index) => ({
    id: index,
    img: item,
  })
)

export const EVENT_ICON_LIST = [
  {
    id: 1,
    img: MY_IMAGE.HOME_IMG.MAIL,
    title: '메일응모하기',
  },
  {
    id: 2,
    img: MY_IMAGE.HOME_IMG.PAYBACK,
    title: '항공권페이백',
  },
  {
    id: 3,
    img: MY_IMAGE.HOME_IMG.COMPENSATION,
    title: '최저가보상제',
  },
  {
    id: 4,
    img: MY_IMAGE.HOME_IMG.BENEFIT,
    title: '8월혜택모음',
  },
]
