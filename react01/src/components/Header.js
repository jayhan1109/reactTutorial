import React, { Fragment, Component } from "react";

class Header extends Component {

  state={
    count:0,
    active:'active'
  }

  

  onClick_logo = () => {
    console.log("I was clicked");
  };

  // onChange_input = (e) => {
  //   const value = e.target.value===''?'active':'non-active';
  //   this.setState({
  //     keywords:e.target.value,
  //     active:value
  //   })
  // };

  addOne=()=>{
    this.setState((state,props)=>({
      count:state.count+1
    }))
  }

  render() {
   

    return (
      <Fragment>
        <header className={this.state.active}>
          <div className="logo" onClick={this.onClick_logo}>
            Logo
          </div>
          <input type="text" onChange={this.props.keywords} />
        </header>
      </Fragment>
    );
  }
}

// const Header = () => {
//   return (
//     <Fragment>
//       <header>
//         <div>Logo</div>
//         <input type="text"/>
//       </header>
//     </Fragment>
//   );
// };

export default Header;
