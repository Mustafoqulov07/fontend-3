// export function BookCard1({ image, title, author, oldPrice, newPrice, levelImage, level, chapters, category }) {
//   return (
//     <div className="flex flex-row w-169 h-47.25 bg-[#1A1D1F] gap-5 rounded-lg border border-[#1F272A] pt-[24px] pl-[24px] pb-[24px]">
//       <div className="">
//         <img className="w-46.25 h-35.25 rounded-md" src={image} alt={title} />
//       </div>

//       <div className="flex flex-col justify-between gap-4">
//         <div>
//           <h2 className="text-[20px] text-[#F7F9FA] font-bold">{title}</h2>
//           <p className="text-[14px] text-[#F7F9FA]/60">{author}</p>
//         </div>

//         <div>
//           <p className="text-[12px] line-through decoration-[#DC2D2D]/80 text-[#F7F9FA]/64">{oldPrice}</p>
//           <p className="text-[16px] text-[#82CC27] font-bold">{newPrice}</p>
//         </div>

//         <div className="book-card-info flex flex-row justify-between">
//           <div className="book-card-details flex flex-row">
//             <div className="book-card-detail flex flex-row items-center">
//               <img src={levelImage} alt="icon" />
//               <p>{level}</p>
//             </div>

//             <div className="book-card-divider"></div>

//             <div className="book-card-detail flex flex-row items-center">
//               <img src="/icons8-student_center 1.svg" alt="icon" />
//               <p>{chapters}</p>
//             </div>

//             <div className="book-card-divider"></div>

//             <div className="book-card-detail flex flex-row items-center">
//               <img src="/grid 1.svg" alt="icon" />
//               <p>{category}</p>
//             </div>
//           </div>

//           <img className="book-card-heart" src="/heart-outline.svg" alt="favorite" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export function BookCard2({ image, title, author, newPrice, levelImage, level, chapters, category }) {
//   return (
//     <div className="book-card flex flex-row">
//       <div className="book-card-image">
//         <img src={image} alt={title} />
//       </div>

//       <div className="book-card-content flex flex-col justify-between">
//         <div>
//           <h2 className="book-card-title">{title}</h2>
//           <p className="book-card-author">{author}</p>
//         </div>

//         <div>
//           <p className="new-price">{newPrice}</p>
//         </div>

//         <div className="book-card-info flex flex-row justify-between">
//           <div className="book-card-details flex flex-row">
//             <div className="book-card-detail flex flex-row items-center">
//               <img src={levelImage} alt="icon" />
//               <p>{level}</p>
//             </div>

//             <div className="book-card-divider"></div>

//             <div className="book-card-detail flex flex-row items-center">
//               <img src="/icons8-student_center 1.svg" alt="icon" />
//               <p>{chapters}</p>
//             </div>

//             <div className="book-card-divider"></div>

//             <div className="book-card-detail flex flex-row items-center">
//               <img src="/grid 1.svg" alt="icon" />
//               <p>{category}</p>
//             </div>
//           </div>

//           <img className="book-card-heart" src="/heart-outline.svg" alt="favorite" />
//         </div>
//       </div>
//     </div>
//   );
// }


export function BookCard1({ image, title, author, oldPrice, newPrice, levelImage, level, chapters, category }) {
  return (
    <div className="book-card flex flex-row">
      <div className="book-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="book-card-content flex flex-col justify-between">
        <div>
          <h2 className="book-card-title">{title}</h2>
          <p className="book-card-author">{author}</p>
        </div>

        <div>
          <p className="old-price line-through decoration-[#DC2D2D]/80">{oldPrice}</p>
          <p className="new-price">{newPrice}</p>
        </div>

        <div className="book-card-info flex flex-row justify-between">
          <div className="book-card-details flex flex-row">
            <div className="book-card-detail flex flex-row items-center">
              <img src={levelImage} alt="icon" />
              <p>{level}</p>
            </div>

            <div className="book-card-divider"></div>

            <div className="book-card-detail flex flex-row items-center">
              <img src="/icons8-student_center 1.svg" alt="icon" />
              <p>{chapters}</p>
            </div>

            <div className="book-card-divider"></div>

            <div className="book-card-detail flex flex-row items-center">
              <img src="/grid 1.svg" alt="icon" />
              <p>{category}</p>
            </div>
          </div>

          <img className="book-card-heart" src="/heart-outline.svg" alt="favorite" />
        </div>
      </div>
    </div>
  );
}

export function BookCard2({ image, title, author, newPrice, levelImage, level, chapters, category }) {
  return (
    <div className="book-card flex flex-row">
      <div className="book-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="book-card-content flex flex-col justify-between">
        <div>
          <h2 className="book-card-title">{title}</h2>
          <p className="book-card-author">{author}</p>
        </div>

        <div>
          <p className="new-price">{newPrice}</p>
        </div>

        <div className="book-card-info flex flex-row justify-between">
          <div className="book-card-details flex flex-row">
            <div className="book-card-detail flex flex-row items-center">
              <img src={levelImage} alt="icon" />
              <p>{level}</p>
            </div>

            <div className="book-card-divider"></div>

            <div className="book-card-detail flex flex-row items-center">
              <img src="/icons8-student_center 1.svg" alt="icon" />
              <p>{chapters}</p>
            </div>

            <div className="book-card-divider"></div>

            <div className="book-card-detail flex flex-row items-center">
              <img src="/grid 1.svg" alt="icon" />
              <p>{category}</p>
            </div>
          </div>

          <img className="book-card-heart" src="/heart-outline.svg" alt="favorite" />
        </div>
      </div>
    </div>
  );
}



