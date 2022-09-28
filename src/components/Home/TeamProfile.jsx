const TeamProfile = ({ name, role, description, image }) => {
  return(
    <div className="flex flex-col gap-4 items-center text-offwhite">
      <img className="h-48" src={image} alt="" />
      <div className="text-center line">
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="font-light text-xs italic">{role}</p>
      </div>
      <p className="text-sm w-72">{description}</p>
    </div>
  )
}

export default TeamProfile