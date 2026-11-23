// import CourseSectionItem from "./CoursSectionItem";

import Footer from "./Footer";
import LibraryItems from "./LibraryItems";
import Navbar from "./Navbar";
import TopBooks from "./TopBooks";

export default function App() {
  return (
    <div className="p-7.75">
      {/* <div className="w-256.5 bg-[#1A1D1F] rounded-lg border border-[#1F272A]">
      <CourseSectionItem/>
      <CourseSectionItem/>
      <CourseSectionItem/>
    </div> */}
      <Navbar/>
      <div className="flex flex-row gap-6">
        <LibraryItems/>
        <TopBooks title='Tavfsiya'/>
      </div>
      <Footer/>

      
    </div>
  );
}
