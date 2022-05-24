/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Navbar, ListGroup } from 'react-bootstrap';
import { actions as newsActions } from './slices/newsSlice.js';
import routes from './routes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(routes.getNewsIds());
        const ids = data.slice(0, 100);
        const promises = ids.map(async (id) => {
          const response = await axios.get(routes.getNewsItem(id));
          return response.data;
        });
        const entities = await Promise.all(promises);
        dispatch(newsActions.addNews(entities));
      } catch (err) {
        console.log('something wring: ', err);
      }
    };

    fetchData();
  }, []);

  const news = useSelector((state) => Object.values(state.newsReducer.entities));
  // const news = useSelector((state) => console.log(state));

  console.log('!!!! news: ', news);

  const clickNews = () => {
    console.log('open news item page');
  }
  return (

    <div className="App">
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Container>
        </Navbar>
        <Container fluid className='p-5'>
          <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1" className='border-0'>
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
              Link 2
            </ListGroup.Item>
            <ListGroup.Item action onClick={clickNews}>
              This one is a button
            </ListGroup.Item>
          </ListGroup>

          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
          </ListGroup>
        </Container>

      </Container>
    </div>
  );
}

export default App;
