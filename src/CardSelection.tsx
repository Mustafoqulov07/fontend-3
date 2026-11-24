import Baners from './Baners';
import Bread from './Bread';
import CardBanersItems from './CardBanersItems';
import CardItem from './CardIteam';
import Footer from './Footer';
import Navbar from './Navbar';

export default function CardSelection() {
  return (
    <div className="p-7.75">
      <div>
        <Navbar />
        <Bread />
      </div>
      <div className="flex flex-row gap-6">
        <CardItem />
        <div className="flex flex-col gap-6">
          <CardBanersItems />
          <Baners />
        </div>
      </div>
      <Footer />
    </div>
  );
}
