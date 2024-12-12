import Priority from '../section/Priority';
import './ScrollCategory.css';
import mercadona from '/icon_mercadona.svg';
import milkIcon from '/milk_icon.png';
import drinkIcon from '/drink_icon.png';
import meatIcon from '/meat.png';
import chipsIcon from '/chips_icon.png';
import teaIcon from '/tea.png';
import coffeeIcon from '/coffee.png';
import spicesIcon from '/spices.png';

const category = [
  ['milk', 'Lácteos', milkIcon],
  ['birdMeat', 'Carnes', meatIcon],
  ['drink', 'Bebidas', drinkIcon],
  ['chips', 'Snacks', chipsIcon],
  ['infusion', 'Té', teaIcon],
  ['coffee', 'Café', coffeeIcon],
  ['spices', 'Especias', spicesIcon],
]

export default function ScrollCategory() {
  return (
    <>
      <Priority title='Elige una categoría' >
        <img src={mercadona} alt="mercadona's logo" />
        <p>Por favor elige una categoría a revisar de productos</p>
        <menu className='category' >
          {category.map(([value, name, icon]) => <li>
            <button type='button' value={value} >{name}<img src={icon} alt={name} /></button>
          </li>)}
        </menu>
      </Priority>
    </>
  )
}