import {createRoot} from "react-dom/client";
import './styles.css';
import CourseHeader from "./CourseHeader.tsx";

const root = createRoot(document.getElementById('root')!);
root.render(<div className="p-7.75">
  <CourseHeader/>
</div>);