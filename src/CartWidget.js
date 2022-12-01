import CartWidget from './images/shopping-cart3.png'
import './style.css'


export function CartImg() {
    return <div>
            <button className='btnStyle' onClick={()=>{alert ("Tu carrito esta vacio")}}><img src={CartWidget}  className='cartImg'/></button>
        </div>
}

