import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import { WrapperProfile, CustomDiv, DarkDiv, TextProfile} from "../../components/globalStyle"
import { getUserInfo } from '../../actions/profile'
import editIcon from '../../img/edit.svg'

class Profile extends React.Component {
  state = {};
  
  componentDidMount() {
    const token = localStorage.getItem("token")    
    this.props.getUserInfo(token)
  }
  
  render() {  
    
    const { user } = this.props
    
    return (
      <WrapperProfile>
        <Header title={"Meu perfil"} goBack={false} />

        <CustomDiv>
          <p>{user && user.name} <img src={editIcon} /></p>
          <p>{user && user.email}</p>
          <p>{user && user.cpf}</p>          
        </CustomDiv>

        <DarkDiv>
          <span>Endereço cadastrado</span>
          <p>{user && user.address} <img src={editIcon} /></p>
        </DarkDiv>

        <TextProfile>Histórico de Pedidos</TextProfile>
        
        <hr />

        <TextProfile>Você não realizou nenhum pedido.</TextProfile>


      </WrapperProfile>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.profiles.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: (token) => dispatch(getUserInfo(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);