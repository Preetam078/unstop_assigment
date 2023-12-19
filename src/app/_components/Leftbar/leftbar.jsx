import LeftbarAdminTab from "./components/LeftbarAdminTab/leftbarAdminTab";
import LeftbarTabs from "./components/LeftbarTabs/leftbarTabs";
import style from "./leftbar.module.css";
import data from "@/app/_data/data";
export default function LeftBar() {

    return (
        <div className={style.leftbar_container}>
            {/*Passed the required tab data to the component that will render it later*/}
            <LeftbarTabs data={data} />
            <div dangerouslySetInnerHTML={{ __html: data.tabSeperator }} />
            <LeftbarAdminTab/>
        </div>
    )
}