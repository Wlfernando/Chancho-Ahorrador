import './InputNum.css'
import formatCurrency from '../../lib/utils'

const format = (v) => v.replace(/^$|^0+(\d+)|([^\d,.]+)/, (match, digit, char) => match === '' ? '0' : char ? '' : digit)

export default function InputNum({
  name = '',
  value = '',
  symbol = '',
  onChange: handleChange,
  onBlur,
}) {

  function onChange({ currentTarget: { name, value } }) {
    handleChange(name, format(value))
  }

  return (
    <>
      <label className='input-num'>
        <span className={`currency`} >{symbol}</span>
        <input
          name={name}
          type='text'
          inputMode='numeric'
          value={value}
          required
          onChange={onChange}
          pattern='^(([1-9]\d*(\.\d+)?|0?\.\d+)|[1-9]\d{0,2}(,\d{3})*(\.\d+)?)$'
          autoComplete='off'
          onBlur={({ currentTarget }) => {
            if(typeof onBlur !== 'function') return
            const format = formatCurrency(+currentTarget.value.replace(/,/g, ''), {style: undefined})
            onBlur(currentTarget.name, format)
          }}
        />
      </label>
    </>
  )
}