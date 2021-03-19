import startCase from 'lodash/startCase'
import { parse, format } from 'date-fns'
import { CatItem } from './catItem'
// eslint-disable-next-line no-unused-vars
import { KittenParent } from './kittenParent'

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
   * @param {boolean} available
   * @param {string[]} extraImg
   * @param {KittenParent} parent
   */
  constructor(
    name,
    img,
    colors,
    gender,
    eyes,
    breeds,
    birthdate,
    available,
    extraImg,
    parent
  ) {
    this.name = name || ''
    this.img = img || ''
    this.colors = colors || ''
    this.gender = gender || ''
    this.eyes = eyes || ''
    this.breeds = breeds || ''
    this.birthdate = birthdate
    this.available = available || true
    this.extraImg = extraImg || []
    this.parent = parent
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
    return [
      ...[
        this.breeds,
        this.gender,
        this.colors,
        this.eyes ? this.eyes + ' eyes' : '',
      ]
        .filter((i) => !!i)
        .map(startCase),
      ...[
        format(parse(this.birthdate, 'dd-MM-yyyy', new Date()), 'dd MMM yyyy'),
      ],
    ].join('&nbsp;&nbsp;/&nbsp;&nbsp;')
  }

  /**
   * get cat info string
   * @returns {string}
   */
  getSimpleInfoStr() {
    return [
      ...[this.breeds, this.gender, this.colors]
        .filter((i) => !!i)
        .map(startCase),
      ...[
        format(parse(this.birthdate, 'dd-MM-yyyy', new Date()), 'dd MMM yyyy'),
      ],
    ].join('&nbsp;&nbsp;/&nbsp;&nbsp;')
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
