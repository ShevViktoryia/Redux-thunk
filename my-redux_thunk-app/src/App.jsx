import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import UsersPage from './components/pages/UsersPage'
import UserPage from './components/pages/UserPage'
import Home from './components/pages/Home'
import PostsPage from './components/pages/PostsPage'
import PageNotFound from './components/pages/PageNotFound'
import AboutPage from './components/pages/AboutPage'
import { ThemeContext } from './context/ThemeContext/ThemeContext'
import ContactsPage from './components/pages/ContactsPage'
import { TeamPage } from './components/pages/TeamPage'
import { ContactsContext } from './context/ContactsContext/ContactsContext'
import CommentsPage from './components/pages/CommentsPage'

function App() {
  const [theme, setTheme] = useState('white');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ContactsContext.Provider value={{
        contacts: {header: 'Contacts Page',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
        },
        team: [{
          name: 'Max',
          position: 'CEO'
        },
        {
          name: 'Armando',
          position: 'COO'
        },
        {
          name: 'Carlo',
          position: 'CTO'
        },
        {
          name: 'Jesus',
          position: 'Lead Designer'
        },
        {
          name: 'Valerio',
          position: 'SoftWare Engineer'
        }]}}>
        <div className="App" id={theme}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='users' element={<UsersPage />} />
              <Route path='users/:id' element={<UserPage />} />
              <Route path='about' element={<AboutPage/>}>
                <Route path='contacts' element={<ContactsPage />} />
                <Route path='team' element={<TeamPage />} />
              </Route>
              <Route path='posts' element={<PostsPage />} />
              <Route path='posts/:id/comments' element={<CommentsPage />} />
              <Route path='*' element={<PageNotFound />} />
            </Route>
          </Routes>
        </div>
      </ContactsContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
