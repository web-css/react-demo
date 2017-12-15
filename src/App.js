import React from 'react'

class App extends React.Component {
  render() {
    const boss = 'liyunlong'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <App2 boss="lisi"></App2>
        <App3 boss="sundesheng"></App3>
      </div>
    )
  }
}

const App3 = (props) => (
  <h4>qi bing lian lian zhang:{props.boss}</h4>
)
class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      soliders: ['demo1', 'demo2', 'demo3', 'demo4']
    }
  }

  render() {
    return (
      <div>
        <h2>yi ying ying zhang:{this.props.boss}</h2> 
        <ul> 
        {this.state.soliders.map(data => {
        return <li key={data}>I am solider :{data}</li>
        })} 
        </ul>
      </div>
    )
  }
}


export default App