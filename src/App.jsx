import Header from "./components/Header"
import News from "./components/News"
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<News key="top" title="Top News" category="top"/>}></Route>
        <Route exact path="/business" element={<News key="business" title="Business" category="business"/>}></Route>
        <Route exact path="/sports" element={<News key="sports" title="Sports" category="sports"/>}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" title="Entertainment" category="entertainment"/>}></Route>
        <Route exact path="/education" element={<News key="education" title="Education" category="education"/>}></Route>
        <Route exact path="/technology" element={<News key="technology" title="Technology" category="technology"/>}></Route>
        <Route exact path="/health" element={<News key="health" title="Health" category="health"/>}></Route>
      </Routes>
    </>
  )
}

export default App
