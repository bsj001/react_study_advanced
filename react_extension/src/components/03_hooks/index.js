import React from 'react'
import ReactDOM from 'react-dom'
/* class Demo extends React.Component {
  state = { count: 0 }

  add = () => {
    //1.
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  render () {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}>点我加一</button>
      </div>
    )
  }
} */

function Demo () {

  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
    // }, [count])
  }, [])

  const myRef = React.useRef()

  function add () {
    // setCount(count + 1)
    setCount(count => count + 1)
  }


  function umount () {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }


  function showData () {
    alert(myRef.current.value)
  }

  return (
    <div>
      <input type='text' ref={myRef} />
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点我加一</button>
      <button onClick={umount}>点我卸载</button>
      <button onClick={showData}>点我提示数据</button>
    </div>
  )
}


export default Demo