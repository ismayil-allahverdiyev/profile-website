import BottomBarView from "../../bottombar/view/bottom_bar_view";
import HomeDisplay from "../../homedisplay";
import ProjectDisplay from "./project_display";

export default function HomePageView() {
    return <>
        <div className='flex flex-col'>
            <HomeDisplay />
            <ProjectDisplay />
            <BottomBarView />
        </div >
    </>;
}