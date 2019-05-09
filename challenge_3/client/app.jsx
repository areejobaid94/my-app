class App extends React.Component {
   constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.toggleHidden.bind(this)} >
        Checkout
        </button>
        {!this.state.isHidden && <FORM1 />}
      </div>
    )
  }
}





const FORM1 = () => (
<div className='modal'>
      NAME :
      e-mail :
      Password :Z
      Account creation: 
  </div>
)


ReactDOM.render(<App />, document.getElementById('app'));

