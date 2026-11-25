import { BookCard1, BookCard2 } from './BookCardItems';

export function BookCard() {
  return (
    <div className="flex flex-col gap-5">
      <BookCard1 image="/tanishuv.png" title="Shaxmat donalari bilan tanishuv" author="Robert Fisher" oldPrice="205 000.00 uzs" newPrice="96 000.00 uzs" levelImage="/levelBeginer.svg" level="Boshlang'ich" chapters="5 ta bo'lim" category="Strategiya" />
      <BookCard2 image="/hujum.png" title="Shoxga hujum qilish" author="Andre Konfutsiy" newPrice="96 000.00 uzs" levelImage="/levelBeginer.svg" level="Boshlang'ich" chapters="5 ta bo'lim" category="Strategiya" />
      <BookCard1 image="/kubok.png" title="Mot qilish" author="David Harikon" oldPrice="160 000.00 uzs" newPrice="107 000.00 uzs" levelImage="/levelBeginer.svg" level="Boshlang'ich" chapters="5 ta bo'lim" category="Strategiya" />
    </div>
  );
}
