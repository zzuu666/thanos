import Thanos from 'thanos-boom'
import 'thanos-boom/dist/index.css'

const thanos = new Thanos()

setTimeout(() => {
    thanos.disintegrate(document.querySelector('.example'))
}, 2000)
