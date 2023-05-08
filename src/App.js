import './App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import BooksInfo from './components/BooksInfo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <img 
      alt='two-people-reading-books' 
      className='hero-img' 
      src='https://cdn.discordapp.com/attachments/1008571165893197845/1105067699391967344/alexcatlin_offshorly_people_reading_self_help_books_with_slight_21a4074d-5bd7-4385-a03a-493d10c6793b.png'></img>
      <Books/>
      <BooksInfo/>
      
    </div>
  );
}

export default App;
