export class NavbarItem {
  /**
   *
   * @param {string} name
   * @param {string} link
   * @param {NavbarItem[]} items
   */
  constructor(name, link, items) {
    this.items = items ?? []
    this.name = name
    this.link =
      link ?? name.toLowerCase().replaceAll(' / ', '-').replaceAll(' ', '-')
  }

  /**
   * @param {string} path
   * @returns {string}
   */
  getLinkPath(path) {
    if (this.link) return path + '/' + this.link
    return (
      path +
      '/' +
      this.name.toLowerCase().replaceAll(' / ', '-').replaceAll(' ', '-')
    )
  }

  /**
   *
   * @returns {string}
   */
  getName() {
    return this.name.toUpperCase()
  }

  /**
   *
   * @returns {boolean}
   */
  hasItems() {
    return this.items.length > 0
  }
}
