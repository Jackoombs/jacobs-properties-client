import { useState } from "react"
import Action from "./Action"

export default function BuyRentSellLet () {

  const [activeTab, setActiveTab] = useState("buy")
  const tabs = ["buy", "rent", "sell", "let"]
  const tabStyle = (tab) => {
    if (tab === activeTab) {
      return "bg-jacobs text-offwhite "
    } else {
      return "cursor-pointer"
    }
  }

  return(
    <div className="container mx-auto p-3 px-5 bg-slate-50 rounded-lg shadow-lg overflow-hidden lg:py-5">
      <ul className="flex justify-center pb-2 gap-1">
        {tabs.map(tab => (
          <li key={tab} onClick={() => setActiveTab(tab)}
            className={`${tabStyle(tab)} text-center min-w-[5rem] text-jacobs rounded-xl font-bold uppercase duration-150`}>
            {tab}
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center gap-4  items-center px-4 py-2 sm:flex-row sm:items-stretch md:p-0 md:gap-8 ">
        {activeTab === "buy" && <Action link="/for-sale" image="buy.png" title="See our properties" text="Find your property"/>}
        {activeTab === "rent" && <Action link="/for-rent" image="rent.png" title="See our properties" text="Find your property"/>}
        {activeTab === "sell" && (
          <>
            <Action link="/for-rent" image="sell.png" title="Book a valuation" text="Get a FREE expert"/>
            <div className="hidden border-l-2 border-slate-400 sm:block"></div>
            <hr className="px-2 border-1 w-full border-slate-400 sm:hidden"/>
            <Action link="/for-rent" image="sell2.png" title="Instant valuation" text="Get a FREE one online"/>
          </>
        )}
        {activeTab === "let" && <Action link="/for-rent" image="let.png" title="See our properties" text="Find your property"/>}
      </div>
    </div>
  )
}