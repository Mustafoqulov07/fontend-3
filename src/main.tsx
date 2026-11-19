import {createRoot} from "react-dom/client";
import './styles.css';
import TopBookItem from "./TopBookItem.tsx";

const root = createRoot(document.getElementById('root')!);
root.render(<div>
    <TopBookItem author="D.Bronstein" title="Zurixdagi shaxmat musobaqasi" image="/book.png"/>
    <TopBookItem author="A.Nimzowitsch" title="Mening tizimim" image="/book2.png"/>
    <TopBookItem author="B.Fischer" title="Mening esdaqolarlik o'yinlarim" image="/book3.png"/>
</div>);