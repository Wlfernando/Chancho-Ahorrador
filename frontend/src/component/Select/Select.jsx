import { useEffect, useRef, useState } from "react";
import './Select.css'

export default function Select({
  options,
  leyend,
  className = '',
  name = '',
  onChange,
}) {
  const [inert, setInert] = useState(true);
  const [radio, setRadio] = useState(leyend);
  const listRef = useRef(null);
  const indexRef = useRef(-1);

  useEffect(() => {
    if (inert) {
      listRef.current.setAttribute('inert', '')
      return
    } else listRef.current.removeAttribute('inert')

    const children = listRef.current.children
    const length = children.length - 1
    const focus = (index) => children[index].firstElementChild.focus()

    const listen = (e) => {
      const { key } = e
      const arrowUp = key === 'ArrowUp'
      const arrowDown = key === 'ArrowDown'
      const home = key === 'Home'
      const end = key === 'End'
      const escape = key === 'Escape'

      if (arrowUp || arrowDown || home || end) e.preventDefault()
      else if (escape) {
        indexRef.current = -1
        setInert(true)
        return
      }

      if (arrowUp && indexRef.current > 0) {
        focus(--indexRef.current)
        return
      } else if (arrowUp) return

      if (arrowDown && indexRef.current < length) {
        focus(++indexRef.current)
        return
      } else if (arrowDown) return

      if (home) {
        focus(indexRef.current = 0)
        return
      }

      if (end) {
        focus(indexRef.current = length)
        return
      }
    }

    window.addEventListener('keydown', listen);
    return () => {
      window.removeEventListener('keydown', listen);
    }
  }, [inert])

  function handleSelect(input) {
    setRadio(input)
    setInert(!inert)
  }

  return (
    <>
      <fieldset 
        className={`select${className && ` ${className}`}`} 
        role="menu" 
        aria-roledescription="select"
      >
        <div 
          className="label" 
          onClick={() => setInert(!inert)} 
          tabIndex={0} 
          onKeyDown={({ key }) => {if (key === 'Enter') setInert(!inert)}}
        >
          <span className="leyend">{radio}</span>
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 0H12L6 6Z" fill="#6C757D"/>
          </svg>
        </div>
        <ul role="radiogroup" ref={listRef}>
          {options.map((o, i) => {
            const isChecked = o === radio

            return <li key={i} >
            <label
              tabIndex={0}
              onKeyDown={({ key }) => {
                if (key !== 'Enter') return
                handleSelect(o)
              }}
              onFocus={() => {
                indexRef.current = i
              }}
            >
              <input 
                type="radio"
                name={name}
                value={o.toLowerCase()}
                onChange={() => {
                  handleSelect(o)
                  onChange(o)
                }}
                tabIndex={-1}
                checked={isChecked}
              />
              <span>{o}</span>
            </label>
          </li>})}
        </ul>
      </fieldset>
    </>
  )
}