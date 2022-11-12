import logo from './logo.svg';
import './App.css';
import Slide from './component/Slide'
import Nav from './component/Nav'
import IconBar from './component/IconBar';
import BottomNav from './component/BottomNav';
import Serviceproduct from "./component/ServiceProduct"
function App() {
  const Image =[{url:'	https://content.jdmagicbox.com/comp/lakhimpur-kheri/n7/9999p5872.5872.190127112120.z9n7/catalogue/easyday-club-maharaj-nagar-lakhimpur-kheri-grocery-stores-7l7e3wtzgt-250.jpg'
  },{url:'	https://cdn.shopify.com/s/files/1/0572/4779/3329/files/Dettol__lP_Banner_1024x1024.jpg?v=1644994837'
  },{url:'https://pbs.twimg.com/media/DckmugkV4AAgtHn.jpg'
  }]
  const consultancy={
    Topic:"Popular Service Products",
    Name:"Consultancy",
    Service:["Salary Return","Bussiness Return","Capital Gain Return","Salary Return","Bussiness Return","Capital Gain Return","Salary Return","Bussiness Return","Capital Gain Return"]

  }
  const serviceProvider={
    Topic:"All Popular Service Products",
    Name:"Construction",
    Service:["Salary Return","Bussiness Return","Capital Gain Return","Salary Return","Bussiness Return","Capital Gain Return"]

  }
  const BookStationary={
    Name:"Book & Stationery",
    Service:["Salary Return","Bussiness Return","Capital Gain Return"]

  }
  return (
    <div className="App">
      <Nav/>
      <Slide slide={Image}/>
      <IconBar />
      <Serviceproduct consultancy={consultancy} />
      <Serviceproduct consultancy ={serviceProvider} />
      <div style={{marginBottom:"100px"}}>
      <Serviceproduct consultancy={BookStationary} />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
