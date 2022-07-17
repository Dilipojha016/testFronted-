import React from "react";
import routeRules from "../../../Routes/routeRules";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { toggleSubNav } from "../../../Redux/Actions/ToggleSubnavAction";

const menuData = [
  {
    title: "Copy to use desktop",
    icon: "home.png",
    link: routeRules.analytics,
    label: "Dashboard",
    key: "Dashboard",
  },

  {
    title: "Copy to use group",
    icon: "list",
    link: routeRules.items,
    label: "Items",
    key: "manage_items",
  }
 
];

class LeftNavigation extends React.Component {
  constructor(props) {
    super(props);

    var sel = this.props.location.pathname;
    if (sel === "/dashboard") {
      sel = "/welcome";
    }
    
    this.state = {
      menu: menuData,
      activeLink: sel,
    };
  }

  handleClickMenu = (e, menuItem) => {
    let menuClone = [...this.state.menu];
    if (e) {
      e.stopPropagation();
    } else {
      menuClone.forEach((menu, index) => {
        menu.open = false;
      });
    }
    this.props.history.replace(menuItem.link);
    
    this.setState((prevState) => ({
      ...prevState,
      activeLink: menuItem.link,
      menu: menuClone,
    }));
  };
  toggleMenu = (menuItem, i) => {
    let menuClone = [...this.state.menu];
    menuClone.forEach((menu, index) => {
      menu.open = index === i ? true : false;
    });
    // menuClone[i].open = !menuClone[i].open;
    this.setState({
      menu: menuClone,
      activeLink: menuClone[i].link,
    });
  };

  render() {
   
    const imageName = ["challenge.png","reward.png","team.png","home.png"];
    const { menu, activeLink } = this.state;
    
    return (
      <div className="dashboard-sidenav-left">
        <div className="dashboard-sidenav-left-menu">
          <div className="app-sidebar sidebar-shadow">
            <div className="scrollbar-sidebar">
              <div className="app-sidebar__inner">
                <ul
                  className="vertical-nav-menu metismenu"
                  onClick={(e) => e.stopPropagation()}
                >
                  {menu.map((menuItem, i) => {
                    
                    if (
                      Array.isArray(menuItem.link) &&
                      menuItem.link.length > 0
                    ) {
                      return (
                        <li
                          key={menuItem.key}
                          onClick={() => this.toggleMenu(menuItem, i)}
                          className={menuItem.open ? "mm-active" : "drp-icon"}
                        >
                          <a style={{ cursor: "pointer" }} >


                          {imageName.includes(menuItem.icon)?
                          (<img  className="menu-img" src={"./assets/images/"+menuItem.icon} alt=""/>)
                          :
                            (<span className="material-icons" style={{color:"#804aff"}}>
                              
                              {menuItem.icon}
                            </span>)}

                            <span style={{color:"#804aff"}}> {menuItem.label}</span>

                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                          </a>
                          <ul
                            className={
                              menuItem.open
                                ? "mm-collapse mm-show"
                                : "mm-collapse"
                            }
                          >
                            {menuItem.link.map((subMenuItem, i) => (
                              <li
                                key={subMenuItem.key}
                                onClick={($event) =>
                                  this.handleClickMenu($event, subMenuItem)
                                }
                              >
                                <a style={{ cursor: "pointer" }}>
                                  <i className="metismenu-icon pe-7s-display2" />
                                  {subMenuItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    } else {
                      return (
                        <li
                          key={menuItem.key}
                          onClick={($event) =>
                            this.handleClickMenu(null, menuItem)
                          }
                        >
                          <a
                            style={{ cursor: "pointer" }}
                            className={
                              activeLink === menuItem.link ? "mm-active mm-active1" : "mm-active"
                            }
                          >

                          {imageName.includes(menuItem.icon)?
                          (<img  className="menu-img"  src={"./assets/images/"+menuItem.icon} alt=""/>)
                          :
                            (<span className="material-icons">
                              
                              {menuItem.icon}
                            </span>)}
                            
                            <span> {menuItem.label}</span>
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   
  };
};

export default compose(
  connect(mapStateToProps, { toggleSubNav }),
  withRouter
)(LeftNavigation);

