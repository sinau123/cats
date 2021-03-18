import catsData from '~/data/cats_data'
import kittensData from '~/data/kittens_data'
import catsPlanData from '~/data/cats_plans_data'
import { CatItem } from '~/models/catItem'
import { CatPlanItem } from '~/models/catPlanItem'
import { KittenItem } from '~/models/kittenItem'

export default {
  catsData,
  kittensData,
}

/**
 * transform json to CatItem object
 * @param {*} cat
 * @returns {CatItem}
 */
export const toCat = (cat) => {
  return new CatItem(
    cat.name,
    cat.image,
    cat.colors,
    cat.gender,
    cat.eyes,
    cat.breeds,
    cat.extra_image,
    cat.kittens
  )
}

/**
 * transform json to KittenItem object
 * @param {*} cat
 * @returns {KittenItem}
 */
export const toKitten = (cat) => {
  return new KittenItem(
    cat.name,
    cat.image,
    cat.colors,
    cat.gender,
    cat.eyes,
    cat.breeds,
    cat.birthdate,
    cat.extra_image,
    cat.parent
  )
}

/**
 * get cat by name
 * @param {string} name
 * @returns {CatItem}
 */
export const findCatByName = (name) => {
  const cat = catsData.find((c) => c.name.toLowerCase() === name.toLowerCase())
  return cat ? toCat(cat) : cat
}

/**
 * get cats by kitten name
 * @param {string} name
 * @returns {male: CatItem, female: CatItem}
 */
export const findCatsByKittenName = (name) => {
  const nameLower = name.toLowerCase()
  const parents = kittensData.find((c) => c.name.toLowerCase() === nameLower)
  return parents
    ? { male: toKitten(parents.male), female: toKitten(parents.female) }
    : parents
}

/**
 * get Kitten by parent name
 * @param {string} parentName
 * @returns {KittenItem[]}
 */
export const findKittenByParent = (parentName) => {
  const nameLower = parentName.toLowerCase()
  return kittensData
    .filter((k) => {
      const { male, female } = k.parent
      return (
        male.toLowerCase() === nameLower || female.toLowerCase() === nameLower
      )
    })
    .map(toKitten)
}

/**
 * @type {CatItem[]}
 */
export const getFemaleCats = catsData
  .filter((cat) => cat.gender === 'female')
  .map(toCat)

/**
 * @type {CatItem[]}
 */
export const getMaleCats = catsData
  .filter((cat) => cat.gender === 'male')
  .map(toCat)

/**
 * get plan item
 * @type {CatPlanItem[]}
 */
export const getPlanItems = catsPlanData.map((plan) => {
  return new CatPlanItem(findCatByName(plan.male), findCatByName(plan.female))
})

/**
 * get all detail cat page link
 * @returns {string[]}
 */
export const getCatDetailLinks = () => {
  return catsData.map((c) => {
    return CatItem.getLink(c.name, c.gender)
  })
}
