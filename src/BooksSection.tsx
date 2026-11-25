import Baners from "./Baners";
import { BookCard } from "./BookCard";
import Bread from "./Bread";
import Fillter from "./Fillter";
import Footer from "./Footer";
import KoproqButton from "./KoproqButton";
import Navbar from "./Navbar";
import OrganishButton from "./OrganishButton";
import Search from "./Search";

export default function BooksSection() {
    return <div className="flex flex-col gap-5.25">
            <div>
              <Navbar/>
              <Bread/>
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-5.75">
                <OrganishButton/>
                <Fillter/>
              </div>
              <div className="flex flex-col gap-5 items-center">
                <Search/>
                <BookCard/>
                <KoproqButton/>
              </div>
              <Baners/>
            </div>
            <Footer/>
          </div>
}