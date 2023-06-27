import '../styles/App.css';
import GridFactory from '../factories/GridFactory';
import Footer from './Footer';

function GridPage() {
  return (
    <div>
      <GridFactory/>
      <Footer />
    </div>
  );
}


export default GridPage;