import React from 'react';

class App extends React.Component{
  state = {
    isLoading : true,    
    movies:[],
  };

  componentDidMount(){
    //영화 데이터 로딩!

    setTimeout( ()=>{
      this.setState({isLoading:false});
    }, 2000);
  }

  render(){
    const {isLoading} = this.state;

    return (
      <div>
        {isLoading ? 'Loading...' : 'we are ready(영화 데이터 출력!)'}
      </div>
    );
  }
}

export default App;
