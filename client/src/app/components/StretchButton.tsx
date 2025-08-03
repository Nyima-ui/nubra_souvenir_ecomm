


type InputProps = {
    buttonText : string, 
}

const StretchButton = ({buttonText} : InputProps ) => {
  return (
    <button className="bg-primary text-white w-full py-2.5 mt-15 cursor-pointer font-grotesk-500 tracking-[0.01em] hover:bg-primary/90">
          {buttonText}
    </button>
  )
}

export default StretchButton
