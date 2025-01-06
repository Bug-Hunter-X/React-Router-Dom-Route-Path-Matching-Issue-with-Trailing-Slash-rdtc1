```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} /> {/*Solution 1: Using a wildcard */}
        {/* or */}
        <Route path="/about" element={<About />} >
          <Route index element={<About />} />
        </Route> {/*Solution 2: Using nested routes and index */}
        {/* ... more routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
```