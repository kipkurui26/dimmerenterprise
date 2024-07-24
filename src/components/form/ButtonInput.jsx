import './form.css'

const ButtonInput = ({buttonName}) => {
  return (
    <div className="form__element">
        <button className='form__element--button'>{buttonName}</button>
    </div>
  )
}

export default ButtonInput