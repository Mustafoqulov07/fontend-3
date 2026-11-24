import CartSectionItem from "./CartSectionItem";

export default function CardItem() {
    return <div className="flex flex-col gap-5">
            <CartSectionItem image='/sarlavha.png' title='Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va barchani' newPrice='155 000.00 uzs' oldPrice='205 000.00 uzs'/>
            <CartSectionItem image='/medal.png' title='Shaxmatchilar klubi nishoni' newPrice='2 000 000.00 uzs' oldPrice='2 500 000.00 uzs'/>
            <CartSectionItem image='/shox.png' title='“Shox”lar uchun shox donasi ko‘rinishidagi nishon' newPrice='525 250.00 uzs' oldPrice='600 000.00 uzs'/>
          </div>
}