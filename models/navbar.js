export class NavbarItem {
  /**
   *
   * @param {string} name
   * @param {string} link
   */
  constructor(name, link) {
    this.name = name
    this.link = link || '/' + name.toLowerCase().replace(/\s/g, '_')
  }
}
