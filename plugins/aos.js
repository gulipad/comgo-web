import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    disable: 'phone',
    duration: 1000,
    offset: 10,
    once: true
  })
}
