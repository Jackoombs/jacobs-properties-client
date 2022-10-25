const Input = ({ name, type, label, placeholder, value, setValue }) => {
  
  return(
    <div className="min-w-[20rem] flex flex-col">
      <label className="pb-1 text-xs font-bold" htmlFor={name}>{label}</label>
      <input 
        className="bg-slate-50 p-2 rounded border shadow" 
        onChange={(e) => setValue(e.target.value)}
        { ...{ name, type, value, placeholder } }
      />
    </div>
  )
}

export default Input


