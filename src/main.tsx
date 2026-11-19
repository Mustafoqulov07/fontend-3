import {createRoot} from "react-dom/client";
import './styles.css';
import TopBooks from "./TopBooks.tsx";

const root = createRoot(document.getElementById('root')!);
root.render(<div>
  <TopBooks/>
</div>);