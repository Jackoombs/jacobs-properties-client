import { useState } from "react"
import Input from "./Input"

export default function ReferAFriendForm () {

  const [fname, setFname] = useState("")
  const [sname, setSname] = useState("")
  const [email, setEmail] = useState("")

  const template = [
    {
      name: "fname",
      type: "text",
      label: "First Name:",
      placeholder: "Bob",
      value: fname,
      setValue: setFname
    },
    {
      name: "sname",
      type: "text",
      label: "Second Name:",
      placeholder: "Dylan",
      value: sname,
      setValue: setSname
    },
    {
      name: "email",
      type: "email",
      label: "Email:",
      placeholder: "bob.dylan@email.com",
      value: email,
      setValue: setEmail
    }
  ]

  const handleSumbit = async (e) => {
    e.preventDefault();
    const data = { firstName: fname, secondName: sname, email: email }
    console.log(data)
    await fetch("https://jacobs-server.onrender.com/send", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return(
    <form onSubmit={handleSumbit}>
      <div className="pb-10 flex flex-col gap-4">
        {
          template.map(({ name, type, label, placeholder, value, setValue }) => (
            <Input key={name} {...{ name, type, label, placeholder, value, setValue } } />
          ))
        }
      </div>
      <button type="submit" className="w-full text-center font-medium border-jacobs border-[1px] rounded-sm text-jacobs px-4 py-1 text-xl 
      self-center duration-150 lg:text-xl hover:bg-jacobs hover:text-slate-50">Send Code</button>
    </form>
  )
}
