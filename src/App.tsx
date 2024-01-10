import { Creator, List } from "@components"

import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Creator />
      <List />
    </div>
  )
}

export default App
