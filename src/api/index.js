import ajax from './ajax.js'
const BASE_URL = '/api'
// 1、根据经纬度获取位置详情
export const getAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const getCategories = () => ajax(BASE_URL + '/index_category')
// 3、根据经纬度获取商铺列表
export const getShops = (latitude, longitude) => ajax(BASE_URL + '/shops', {latitude, longitude})
// 4、根据经纬度和关键字搜索商铺列表
export const searchShops = (keyword, geohash) => ajax(BASE_URL + '/search_shops', {keyword, geohash})
// 5、获取一次性验证码
// 6、用户名密码登陆
export const loginByUser = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'post')
// 7、发送短信验证码
export const sendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// 8、手机号验证码登陆
export const loginBySms = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'post')
// 9、根据会话获取用户信息
export const getUserInfo = () => ajax(BASE_URL + '/userinfo')
// 10、用户登出
export const logOut = () => ajax(BASE_URL + '/logout')

export const getShopInfo = () => ajax('/info')

export const getShopRatings = () => ajax('/ratings')

export const getGoods = () => ajax('/goods')
