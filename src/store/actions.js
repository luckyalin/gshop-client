// 引入发送ajax获取数据模块
import {getAddress, getCategories, getShops, getShopInfo, getShopRatings, getGoods} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORIES,
  UPDATE_USERINFO,
  RECEIVE_SHOP_INFO,
  RECEIVE_SHOP_RATINGS,
  RECEVIE_GOODS
} from './mutations-type.js'
export default {
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await getAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  getCategories ({commit}) {
    getCategories().then(categories => {
      if (categories.code === 0) {
        categories = categories.data
        commit(RECEIVE_CATEGORIES, {categories})
      }
    })
  },
  async getShops ({commit, state}) {
    let shops = await getShops(state.latitude, state.longitude)
    if (shops.code === 0) {
      shops = shops.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  updateUserInfo ({commit}, userInfo) {
    commit(UPDATE_USERINFO, {userInfo})
  },
  async recevieShopInfo ({commit}, callback) {
    let shopInfo = await getShopInfo()
    if (shopInfo.code === 0) {
      shopInfo = shopInfo.data
      commit(RECEIVE_SHOP_INFO, {shopInfo})
    }
  },
  async receiveShopGoods ({commit}, callback) {
    let goods = await getGoods()
    if (goods.code === 0) {
      goods = goods.data
      commit(RECEVIE_GOODS, {goods})
    }
    callback && callback()
  },
  async recevieShopRatings ({commit}) {
    let shopRatings = await getShopRatings()
    if (shopRatings.code === 0) {
      shopRatings = shopRatings.data
      commit(RECEIVE_SHOP_RATINGS, {shopRatings})
    }
  }
}
