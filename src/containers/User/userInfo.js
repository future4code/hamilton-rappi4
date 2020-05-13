import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import {
  WrapperProfile,
  CustomDiv,
  DarkDiv,
  TextProfile,
} from "../../components/globalStyle";
import { getUserInfo, getOrdersHistory } from "../../actions/profile";
import editIcon from "../../img/edit.svg";

class Profile extends React.Component {
  state = {};

  componentDidMount() {
    const token = localStorage.getItem("token");
    this.props.getUserInfo(token);
    this.props.getOrdersHistory();
    
    if(token === null){
      this.props.goToLogin()
    }
  }

  render() {
    const { user } = this.props;
    const ordersToString = JSON.stringify(this.props.orders);

    return (
      <WrapperProfile>
        <Header title={"Meu perfil"} goBack={false} />

        <CustomDiv>
          <p>
            {user && user.name} <img src={editIcon} onClick={() => this.props.goToUpdateUserInfo()} />
          </p>
          <p>{user && user.email}</p>
          <p>{user && user.cpf}</p>
        </CustomDiv>

        <DarkDiv>
          <span>Endereço cadastrado</span>
          <p>
            {user && user.address} <img src={editIcon} onClick={() => this.props.goToUpdateAddress()}/>
          </p>
        </DarkDiv>

        <TextProfile>Histórico de Pedidos</TextProfile>

        <hr />

        {ordersToString === "[]" || ordersToString === undefined ? (
          <TextProfile>Você não realizou nenhum pedido.</TextProfile>
        ) : (
          this.props.orders.map((order) => {
            return <p>{order}</p>;
          })
        )}

        <Footer />
      </WrapperProfile>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.profiles.userInfo,
  orders: state.profiles.orderHistory,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: (token) => dispatch(getUserInfo(token)),
  getOrdersHistory: () => dispatch(getOrdersHistory()),
  goToLogin: () => dispatch(replace(routes.login)),
  goToUpdateUserInfo: () => dispatch(push(routes.updateInfo)),
  goToUpdateAddress: () => dispatch(push(routes.updateAddress))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
