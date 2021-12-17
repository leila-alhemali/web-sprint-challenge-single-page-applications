import React from 'react'

export default function PizzaForm(props) {
    const{
        values,
        submit,
        change,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form className= 'form container' id='pizza-form'>
            <div className='form-group submit'>
            <h1>Order a Pizza</h1>

            <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.size}</div>
            </div>
    
            </div>

        <div className='form-group inputs'>
            <label>Enter a name for your order.
                <input id='name-input'
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
            </label>
            </div>
            
        <div className='form-group select'>    
            <label>Role
              <select
                onChange={onChange}
                value={values.size}
                name='size'
                >
                <option value=''>- Select your size -</option>
                <option value='small'>Small(10in)</option>
                <option value='medium'>Medium(12in)</option>
                <option value='large'>Large(14in)</option>
                <option value='jumbo'>Jumbo(20in)</option>
              </select>
            </label>
        </div>

        <div className='form-group checkboxes'>
            <h4>Toppings</h4>
                <label>Pesto
                    <input
                        type= 'checkbox'
                        name= 'topping1'
                        checked={values.topping1}
                        onChange={onChange}
                    />
                </label>
                <label>Red Bell Pepper
                    <input
                        type= 'checkbox'
                        name= 'topping2'
                        checked={values.topping2}
                        onChange={onChange}
                    />
                </label>
                <label>Pecorino Romano
                    <input
                        type= 'checkbox'
                        name= 'topping3'
                        checked={values.topping3}
                        onChange={onChange}
                    />
                </label>
                <label>Morel Mushrooms
                    <input
                        type= 'checkbox'
                        name= 'topping4'
                        checked={values.topping4}
                        onChange={onChange}
                    />
                </label>

        </div>
        <div className='form-group inputs'>
            <label id='special-text'>Special Instructions
                <input
                    value={values.name}
                    onChange={onChange}
                    type='input'
                    name='special'
                />
            </label>
        </div>

        <button id="order-button">Order Pizza</button>
        
    </form>
  )
}