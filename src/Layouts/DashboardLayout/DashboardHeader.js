import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import routeRules from "../../Routes/routeRules";
import Button from "../../Components/Button";
import history from "../../Store/history";


class DashboardHeader extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false,
      domainUrl: "",
    };
  }
  handleLogoutModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  handleLogout = async () => {
    this.handleLogoutModal();
    localStorage.clear();
    history.push(routeRules.landingPage);
  };
  
  render() {
    return (
      <div className="dashboard-header">
        <div
          className="remodal shadow-lg"
          style={
            this.state.showModal
              ? {
                  display: "block",
                  maxHeight: "730px",
                  position: "fixed",
                  zIndex: 1050,
                  width: "100%",
                }
              : { display: "none" }
          }
        >
          <i
            onClick={() => this.handleLogoutModal()}
            className="fa fa-times"
            aria-hidden="true"
          ></i>

          <div className="terms-modal">
            <h1 className="seconday-heading" style={{ fontSize: "30px" }}>
              Do you really want to logout ?
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <div className="col-4 text-right">
                <Button name="Logout" onClick={() => this.handleLogout()} />
              </div>
              <div className="col-4 text-right">
                <Button
                  name="Cancel"
                  onClick={() => this.handleLogoutModal()}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-header-left logo-box">
          <Link to="/welcome">
            <img src="./assets/images/logo_old.png" alt="logo" />
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="dashboard-header-link dashboard-header-profile">
            <div
              className="dashboard-header-link dashboard-header-profile"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="dashboard-header-profile-left"></div>
              <div className="dashboard-header-profile-right">
                <div className="profile-welcome-text">Welcome</div>
                <span className="dashboard-header-link">
                  {localStorage.getItem("user")}
                </span>
              </div>
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
             
              <div
                className={`dashboard-sidenav-left-menu-item-default bg-white`}
              >
               <div  style={{"fontSize": "19px", "marginLeft":"34px","cursor":"pointer"}} onClick={() => this.handleLogoutModal()}>
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default DashboardHeader
