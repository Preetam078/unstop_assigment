import LeftbarTab from "./LeftbarTab/leftbarTab"

export default function LeftbarTabs({data}){
  return (
    <div>
        {
                data.leftbar_tabs.map((tab, index) => (
                    <LeftbarTab key={index} tab={tab}/>
                ))
            }
    </div>
  )
}
