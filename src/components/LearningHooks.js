// import React, { Component } from "react";
// import "./App.css";
// import Banner from "./components/Banner";
// // import Footer from "./components/Footer";
// import BookList from "./components/BookList";
// import Navbar from "./components/Navbar";
// import MobileNav from "./components/MobileNav";
// import Form from "./components/Form";

// class App extends Component {
//   state = {
//     books: [],
//     sortedBooks: [],
//     loading: true,
//     bookOne: "",
//     isOpen: false,
//   };

//   // menu handler
//   openHandler = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   };
//   closeHandler = () => {
//     this.setState({
//       isOpen: false,
//     });
//   };

//   // Form input Handler
//   handleChange = (event) => {
//     event.preventDefault();
//     const bookg = event.target.value;

//     this.setState({ bookOne: bookg });
//     console.log(bookg);
//   };

//   // Form submit Handler
//   handleSubmit = (event) => {
//     event.preventDefault();
//     // console.log(bookOne);

//     fetch(
//       `https://www.googleapis.com/books/v1/volumes?q=isbn:${this.state.bookOne}`
//     )
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
//         this.setState(() => {
//           return {
//             books: booksData,
//           };
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   render() {
//     return (
//       <>
//         <Navbar openMenu={this.openHandler} />
//         <MobileNav
//           closeMenu={this.closeHandler}
//           openState={this.state.isOpen}
//         />
//         <Banner />
//         <Form forInput={this.handleChange} forForm={this.handleSubmit} />
//         <BookList bookInfo={this.state.books} />
//         {/* <Footer /> */}
//       </>
//     );
//   }
// }

// export default App;
