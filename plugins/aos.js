import AOS from 'aos'
import 'aos/dist/aos.css'
export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    disable: 'phone',
    offset: 80, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
  })
}
