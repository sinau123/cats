export class CatItem {
  /**
   *
   * @param {string} name
   * @param {string} img
   * @param {string} colors
   */
  constructor(name, img, colors) {
    this.name = name || ''
    this.img = img || ''
    this.colors = colors || ''
  }

  /**
   * get cat image path
   * @returns {string}
   */
  getImg() {
    return `/images/cats/${this.img}`
  }
}
