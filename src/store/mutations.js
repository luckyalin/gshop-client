import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORIES,
  UPDATE_USERINFO,
  RECEIVE_SHOP_INFO,
  RECEVIE_GOODS,
  RECEVIE_SHOP_RATINGS
} from './mutations-type.js'
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORIES] (state, {categories}) {
    state.categories = categories
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [UPDATE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_SHOP_INFO] (state, {shopInfo}) {
    state.shopInfo = shopInfo
  },
  [RECEVIE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEVIE_SHOP_RATINGS] (state, {goodsRatings}) {
    state.goodsRatings = goodsRatings
  }
}
