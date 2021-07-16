import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import PhotoGallery from './Components/PhotoGallery';



function App() {
    
    
  return (
    <div className="App">
     {Navigation}
      <section className="bodySection">
        <Home />
        <PhotoGallery />

      </section>
    </div>
  );
}

export default App;
