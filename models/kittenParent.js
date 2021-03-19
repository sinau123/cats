// eslint-disable-next-line no-unused-vars
const { CatItem } = require('./catItem')

export class KittenParent {
  /**
   *
   * @param {CatItem} male
   * @param {CatItem} female
   */
  constructor(male, female) {
    this.male = male
    this.female = female
  }
}
