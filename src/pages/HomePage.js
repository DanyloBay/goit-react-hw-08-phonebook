// import homeBg from '../images/homeBg.jpg';
import { BsBookHalf } from 'react-icons/bs';
import Container from 'components/Container';

function HomePage() {
  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>

      <BsBookHalf style={{color: '#0084ff', width: 100, height: 100,}}/>
      </div>
    </Container>
  );
}

export default HomePage;
