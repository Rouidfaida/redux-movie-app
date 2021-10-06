import './App.css';
import 'antd/dist/antd.css';
import Navbare from './Components/Navbare';
import { Layout, Menu, Breadcrumb } from 'antd';
import MovieCard from './Components/MovieCard';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';

import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux';

const {Content, Footer } = Layout;
function App() {
  const movie = useSelector(state => state.movie)

  return (
    <div className="App">
<Layout className="layout">
  
      <Menu style={{backgroundColor:"black"}}mode="horizontal" >
      <Navbare movie={movie}/>
      </Menu>
   <AddMovie/>
    <Content style={{ padding: '0 50px' }}>
     
<MovieList /> 
 </Content>
    <Footer style={{ textAlign: 'center' }}>Movie App create by Rouid Faida</Footer>
  </Layout>,    </div>
  );
}

export default App;
