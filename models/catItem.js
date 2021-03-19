import startCase from 'lodash/startCase'
import { findKittenByParent } from '../data/derivedCatData'
// eslint-disable-next-line no-unused-vars
import { KittenItem } from './kittenItem'

export class CatItem {
  /**
   *
   * @param {string} name
   * @param {string} img
   * @param {string} colors
   * @param {string} gender
   * @param {string} eyes
   * @param {string} breeds
   * @param {string[]} extraImg
   * @param {any[]} kittens
   */
  constructor(name, img, colors, gender, eyes, breeds, extraImg, kittens) {
    this.name = name || ''
    this.img = img || ''
    this.colors = colors || ''
    this.gender = gender || ''
    this.eyes = eyes || ''
    this.breeds = breeds || ''
    this.extraImg = extraImg || []
    this.kittens = kittens || []
  }

  /**
   * get cat image path
   * @returns {any}
   */
  getImg() {
    return CatItem.getImg(this.img)
  }

  /**
   * get cat extra image path
   * @returns {any[]}
   */
  getExtraImg() {
    return this.extraImg.map(CatItem.getImg)
  }

  /**
   * get cat link to detail page
   * @returns {string}
   */
  getLink() {
    return CatItem.getLink(this.name, this.gender)
  }

  /**
   * get cat info string
   * @returns {string}
   */
  getInfoStr() {
    return [this.breeds, this.gender, this.colors, this.eyes]
      .filter((i) => !!i)
      .map(startCase)
      .join('&nbsp;&nbsp;/&nbsp;&nbsp;')
  }

  /**
   * get kittens
   * @returns {KittenItem}
   */
  getKittens() {
    return findKittenByParent(this.name)
  }

  /**
   * get cat link to detail page
   * @param {string} name
   * @param {string} gender
   * @returns {string}
   */
  static getLink(name, gender) {
    return `/${gender}s/${name.toLowerCase().replace(/\s/g, '_')}`
  }

  /**
   * get lower name from router param
   * @param {string} paramName
   * @returns {string}
   */
  static getLowerNameFromRouteParam(paramName) {
    return paramName.replace(/_/g, ' ')
  }

  /**
   * get img path
   * @param {string} path
   * @returns {string}
   */
  static getImg(path) {
    return require(`~/assets/img/cats/${path}`)
  }
}
