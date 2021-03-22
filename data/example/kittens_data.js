/**
 * Format Master Data Anak Kucing
 *
 * keterangan:
 * name: nama kucing (harus uniuqe),
 * breeds: ras kucing,
 * gender: gender kucing,
 * image: gambar utama kucing (letakkan gambar di folder assets/img/kitten),
 * colors: warna kucing,
 * eyes: warna mata kucing,
 * birthdate: tanggal lahir kucing (dd-mm-yyyy)
 * available: apakah kucing ini available untuk di adopsi (true/false)
 * gallery: gambar kucing untuk gallery (letakkan gambar di folder assets/img/kitten)
 * parent: nama induk (male: indux jantan, female: induk betina). Induk harus ada di master data di file cats_data.js
 */
export default [
  {
    name: 'Kitten One',
    image: 'cat_2.jpeg',
    breeds: 'Persian',
    gender: 'male',
    colors: 'white orange',
    eyes: 'black yellow',
    birthdate: '15-01-2021',
    available: true,
    gallery: [
      'cat_1.jpeg',
      'cat_2.jpeg',
      'cat_3.jpeg',
      'cat_4.jpeg',
      'cat_5.jpeg',
    ],
    parent: {
      male: 'Cat One',
      female: 'Cat Two',
    },
  },
  {
    name: 'Kitten Two',
    image: 'cat_5.jpeg',
    breeds: 'Persian',
    gender: 'male',
    colors: 'white orange',
    eyes: 'black yellow',
    birthdate: '15-01-2021',
    available: false,
    gallery: [
      'cat_1.jpeg',
      'cat_2.jpeg',
      'cat_3.jpeg',
      'cat_4.jpeg',
      'cat_5.jpeg',
    ],
    parent: {
      male: 'Cat One',
      female: 'Cat Two',
    },
  },
  {
    name: 'Kitten Three',
    image: 'cat_3.jpeg',
    breeds: 'Persian',
    gender: 'male',
    colors: 'white orange',
    eyes: 'black yellow',
    birthdate: '12-02-2021',
    available: true,
    gallery: [
      'cat_1.jpeg',
      'cat_2.jpeg',
      'cat_3.jpeg',
      'cat_4.jpeg',
      'cat_5.jpeg',
    ],
    parent: {
      male: 'Cat Three',
      female: 'Cat Four',
    },
  },
  {
    name: 'Kitten Four',
    image: 'cat_7.jpeg',
    breeds: 'Persian',
    gender: 'male',
    colors: 'white orange',
    eyes: 'black yellow',
    birthdate: '12-02-2021',
    available: true,
    gallery: [
      'cat_1.jpeg',
      'cat_2.jpeg',
      'cat_3.jpeg',
      'cat_4.jpeg',
      'cat_5.jpeg',
    ],
    parent: {
      male: 'Cat Three',
      female: 'Cat Four',
    },
  },
]
