import { Button } from './lib/button/button';
import './App.scss';

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Button size={'xs'}>xs</Button>
        <Button size={'sm'}>sm</Button>
        <Button size={'md'}>md</Button>
        <Button size={'lg'}>lg</Button>
        <Button size={'xl'}>xl</Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Button variant={'outline'}>outline</Button>
        <Button variant={'solid'}>solid</Button>
        <Button variant={'simple'}>simple</Button>
        <Button variant={'clean'}>clean</Button>
        <Button variant={'link'}>link</Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Button color={'primary'}>primary</Button>
        <Button color={'danger'}>danger</Button>
        <Button color={'info'}>info</Button>
        <Button color={'success'}>success</Button>
        <Button color={'warning'}>warning</Button>
        <Button color={'clean'}>clean</Button>
      </div>
    </>
  );
}

export default App;
