import Footer from "./Footer";
import LibraryItems from "./LibraryItems";
import Navbar from "./Navbar";
import TopBooks from "./TopBooks";

export default function LibrarySection() {
  return (
    <div className="p-7.75">
      <Navbar />
      <div className="flex flex-row gap-6">
        <LibraryItems />
        <TopBooks title="Tavfsiya" />
      </div>
      <Footer />
    </div>
  );
}
