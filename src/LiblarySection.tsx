import Baners from "./Baners";
import Bread from "./Bread";
import Footer from "./Footer";
import LibraryItems from "./LibraryItems";
import Navbar from "./Navbar";
import TopBooks from "./TopBooks";

export default function LibrarySection() {
  return (
    <div className="p-7.75">
      <Navbar />
      <Bread/>
      <div className="flex flex-row gap-6">
        <LibraryItems />
        <div className="flex flex-col gap-6">
            <Baners/>
            <TopBooks title="Tavfsiya" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
