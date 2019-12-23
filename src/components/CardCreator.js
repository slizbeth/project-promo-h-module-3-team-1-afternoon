import React from 'react';
import Header from './card-creator/Header';
import Footer from './landing/Footer';
import logo from '../images/logo-adalab.png';
import girl from '../images/girl.png';
import Preview from './card-creator/Preview';
import MenuCollapsible from './card-creator/MenuCollapsible';

<<<<<<< HEAD
class CardCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(data, id){
    console.log(data)
    console.log(id)
    this.setState((prevState, props) => {
      let newName = prevState.name;
      let newJob = prevState.job;
      if (id === 'txtFullName') {
        newName = data;
      } else if (id === 'txtJob') {
        newJob = data;
      } else {
        console.log(`onChangeHandler(id=${id}) valor no está considerado`)
      }
      return { 
        name: newName, 
        job: newJob 
      };
    });
  }

  render() {
    return (
      <div className="cardCreator__wrapper">
        <Header linkHeader="#" />
        <div className="content">
          <Preview
            urlImage={girl}
            name={this.state.name} 
            job={this.state.job}
          />
          <div className="create">
            <Design />
            <Form onChangeHandler={this.onChangeHandler}>
            </Form>
            <Share />
          </div>
        </div>
        <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
      </div >
    );
  }
=======
const CardCreator = () => {
  return (
    <div className="cardCreator__wrapper">
      <Header linkHeader="#" />
      <div className="content">
        <Preview
          urlImage={girl}
          name='Nombre Apellidos'
          profession='Front-End Developer'
        />
        <MenuCollapsible />
      </div>
      <Footer textFooter="Awesome profile cards @2019" linkFooter="https://adalab.es/" logoFooter={logo} logoName="logo Adalab" />
    </div >
  );
>>>>>>> dev
}

export default CardCreator;