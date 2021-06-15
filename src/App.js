import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Landing } from './pages'
import './theme/type.module.scss'
import {colorsCss} from './theme/colors'

function App() {
  const [theme, setTheme] = React.useState('dark')
    
  return (
    <section style={{'--theme': theme, ...colorsCss(theme)}}>
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Landing/>
          </Route>
        </Switch>
      </BrowserRouter>
      <button onClick={() => setTheme((s) => s === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
      <span>{theme}</span>
    </section>
  )
}

export default App;
