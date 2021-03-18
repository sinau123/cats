import startCase from 'lodash/startCase'
import { CatItem } from './catItem'

export class KittenItem {
  /**
   *
   * @param {string} name
   * @param {string} img
   * @param {string} colors
   * @param {string} gender
   * @param {string} eyes
   * @param {string} breeds
   * @param {string} birthdate
   * @param {string[]} extraImage
   * @param {CatItem[]} parent
   */
  constructor(
    name,
    img,
    colors,
    gender,
    eyes,
    breeds,
    birthdate,
    extraImage,
    parent
  ) {
    this.name = name || ''
    this.img = img || ''
    this.colors = colors || ''
    this.gender = gender || ''
    this.eyes = eyes || ''
    this.breeds = breeds || ''
    this.birthdate = birthdate
    this.extraImage = extraImage || []
    this.parent = parent || []
  }

  /**
   * get cat image path
   * @returns {any}
   */
  getImg() {
    return require(`~/assets/img/kittens/${this.img}`)
  }

  /**
   * get cat link to detail page
   * @returns {string}
   */
  getLink() {
    return CatItem.getLink(this.name)
  }

  /**
   * get cat info string
   * @returns {string}
   */
  getInfoStr() {
    return [this.breeds, this.gender, this.colors, this.eyes, this.birthdate]
      .filter((i) => !!i)
      .map(startCase)
      .join('&nbsp;&nbsp;/&nbsp;&nbsp;')
  }

  /**
   * get cat link to detail page
   * @param {string} name
   * @param {string} gender
   * @returns {string}
   */
  static getLink(name) {
    return `/kittens/${name.toLowerCase().replace(/\s/g, '_')}`
  }

  /**
   * get lower name from router param
   * @param {string} paramName
   * @returns {string}
   */
  static getLowerNameFromRouteParam(paramName) {
    return paramName.replace(/_/g, ' ')
  }
}
