// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Banner from "./components/Banner";
// // import Footer from "./components/Footer";
// import BookList from "./components/BookList";
// import Navbar from "./components/Navbar";
// import MobileNav from "./components/MobileNav";
// import Form from "./components/Form";

// const LearningUseEffect = (props) => {
//   // For Menu Handler
//   const [menuState, setMenuState] = useState({
//     isOpen: false,
//   });

//   const openHandler = () => {
//     setMenuState({
//       isOpen: !menuState.isOpen,
//     });
//   };
//   const closeHandler = () => {
//     setMenuState({
//       isOpen: false,
//     });
//   };

//   // For Form-Result

//   const [booksState, setBooksState] = useState({
//     books: [],
//   });

//   // Get Books Handler
//   const getBooks = (e) => {
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:9783161484100`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);

//         let bookList = data.items.map((item) => {
//           let id = item.id;
//           let authors = item.volumeInfo.authors;
//           let rating = item.volumeInfo.averageRating;
//           let categories = item.volumeInfo.categories;
//           let description = item.volumeInfo.description;
//           let language = item.volumeInfo.language;
//           let pageCount = item.volumeInfo.pageCount;
//           let publishedDate = item.volumeInfo.publishedDate;
//           let publisher = item.volumeInfo.publisher;
//           let title = item.volumeInfo.title;

//           let book = {
//             authors,
//             id,
//             rating,
//             categories,
//             description,
//             language,
//             pageCount,
//             publishedDate,
//             publisher,
//             title,
//           };
//           console.log(book);
//           return book;
//         });
//         // console.log(bookList)
//         return bookList;
//       })

//       .then((booksData) => {
//         console.log(booksData);
//         setBooksState(() => {
//           return {
//             books: booksData,
//           };
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getBooks();
//   }, []);

//   return (
//     <div>
//       <>
//         <Navbar openMenu={openHandler} />
//         <MobileNav closeMenu={closeHandler} openState={menuState.isOpen} />
//         <Banner />
//         <Form forInput={changeHandler} forForm={submitHandler} />
//         <BookList bookInfo={booksState.books} />
//         {/* <Footer /> */}
//       </>
//     </div>
//   );
// };

// export default LearningUseEffect;
