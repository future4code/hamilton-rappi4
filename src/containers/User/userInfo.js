import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
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
  }

  render() {
    const { user } = this.props;
    const ordersToString = JSON.stringify(this.props.orders);

    return (
      <WrapperProfile>
        <Header title={"Meu perfil"} goBack={false} />

        <CustomDiv>
          <p>
            {user && user.name} <img src={editIcon} />
          </p>
          <p>{user && user.email}</p>
          <p>{user && user.cpf}</p>
        </CustomDiv>

        <DarkDiv>
          <span>Endereço cadastrado</span>
          <p>
            {user && user.address} <img src={editIcon} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
