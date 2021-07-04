import { Sidebar } from "../../components/Sidebar";
import * as SC  from "./styles";

export function Home() {
    return (
        <SC.HomeComponent>
            <Sidebar />
            <SC.HomeComponentTitle>
                <h1>Juvenal Bruno</h1>
                <p>Desenvolvedor Full Stack</p>
            </SC.HomeComponentTitle>
        </SC.HomeComponent> 
    );
}