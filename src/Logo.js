import Logo from './images/game-shop.jpg'
import './style.css'

export function Logotipo () {
    return <div className='logo'>
        <img src= { Logo } alt="#"></img>
        <div>
        <h3>Game Shop</h3>
        <h6>Your style, your games</h6>
        </div>
    </div>
        
}