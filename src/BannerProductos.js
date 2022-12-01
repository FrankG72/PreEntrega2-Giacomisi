import './style.css'
import Banner from './images/gaming-banner.jpg'


export function BannerProd () {
    return <div>
        <img src={Banner}  className='bannerProd'></img>
    </div>
}