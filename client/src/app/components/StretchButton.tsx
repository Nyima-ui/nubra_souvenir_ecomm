


type InputProps = {
    buttonText : string, 
    onClick?: () => void,
    type?: "button" | "submit"
}

const StretchButton = ({buttonText, onClick, type = "button"} : InputProps ) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className="bg-primary text-white w-full py-2.5 mt-7.5 cursor-pointer font-grotesk-500 tracking-[0.01em] hover:bg-primary/90"
    >
          {buttonText}
    </button>
  )
}

export default StretchButton
