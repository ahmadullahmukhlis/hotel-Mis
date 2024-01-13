import Main from './Main'
function Header() {

  return (
    <body>
    <div className="container-scroller">
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex align-items-center">
          <a className="navbar-brand brand-logo" href="index.html">
            <img src="images/logo.svg" alt="logo" className="logo-dark" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo" /></a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center flex-grow-1">
          <h5 className="mb-0 font-weight-medium d-none d-lg-flex">Welcome stallar dashboard!</h5>
          <ul className="navbar-nav navbar-nav-right ml-auto">
            <form className="search-form d-none d-md-block" action="#">
              <i className="icon-magnifier"></i>
              <input type="search" className="form-control" placeholder="Search Here" title="Search here"/>
            </form>
            <li className="nav-item"><a href="#" className="nav-link"><i className="icon-basket-loaded"></i></a></li>
            <li className="nav-item"><a href="#" className="nav-link"><i className="icon-chart"></i></a></li>
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator message-dropdown" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <i className="icon-speech"></i>
                <span className="count">7</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                <a className="dropdown-item py-3">
                  <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                  <span className="badge badge-pill badge-primary float-right">View all</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face10.jpg" alt="image" className="img-sm profile-pic"/>
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face12.jpg" alt="image" className="img-sm profile-pic"/>
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face1.jpg" alt="image" className="img-sm profile-pic"/>
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown language-dropdown d-none d-sm-flex align-items-center">
              <a className="nav-link d-flex align-items-center dropdown-toggle" id="LanguageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <div className="d-inline-flex mr-3">
                  <i className="flag-icon flag-icon-us"></i>
                </div>
                <span className="profile-text font-weight-normal">English</span>
              </a>
              <div className="dropdown-menu dropdown-menu-left navbar-dropdown py-2" aria-labelledby="LanguageDropdown">
                <a className="dropdown-item">
                  <i className="flag-icon flag-icon-us"></i> English </a>
                <a className="dropdown-item">
                  <i className="flag-icon flag-icon-fr"></i> French </a>
                <a className="dropdown-item">
                  <i className="flag-icon flag-icon-ae"></i> Arabic </a>
                <a className="dropdown-item">
                  <i className="flag-icon flag-icon-ru"></i> Russian </a>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
              <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <img className="img-xs rounded-circle ml-2" src="images/faces/face8.jpg" alt="Profile image"/> <span className="font-weight-normal"> Henry Klein </span></a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <div className="dropdown-header text-center">
                  <img className="img-md rounded-circle" src="images/faces/face8.jpg" alt="Profile image"/>
                  <p className="mb-1 mt-3">Allen Moreno</p>
                  <p className="font-weight-light text-muted mb-0">allenmoreno@gmail.com</p>
                </div>
                <a className="dropdown-item"><i className="dropdown-item-icon icon-user text-primary"></i> My Profile <span className="badge badge-pill badge-danger">1</span></a>
                <a className="dropdown-item"><i className="dropdown-item-icon icon-speech text-primary"></i> Messages</a>
                <a className="dropdown-item"><i className="dropdown-item-icon icon-energy text-primary"></i> Activity</a>
                <a className="dropdown-item"><i className="dropdown-item-icon icon-question text-primary"></i> FAQ</a>
                <a className="dropdown-item"><i className="dropdown-item-icon icon-power text-primary"></i>Sign Out</a>
              </div>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="icon-menu"></span>
          </button>
        </div>
      </nav>
     
      <div className="container-fluid page-body-wrapper">
   
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
          
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Dashboard</span>
                <i className="icon-screen-desktop menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span className="menu-title">Branches</span>
                <i className="icon-layers menu-icon"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">kabul </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Nangarhar</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/icons/simple-line-icons.html">
                <span className="menu-title">Rooms</span>
                <i className="icon-globe menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/forms/basic_elements.html">
                <span className="menu-title">Guest</span>
                <i className="icon-book-open menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/charts/chartist.html">
                <span className="menu-title">Reservation</span>
                <i className="icon-chart menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/tables/basic-table.html">
                <span className="menu-title">Staff</span>
                <i className="icon-grid menu-icon"></i>
              </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="">
                <span className="menu-title">Department</span>
                <i className="icon-grid menu-icon"></i>
              </a>
            </li>
            <li className="nav-item nav-category"><span className="nav-link">information</span></li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <span className="menu-title">Services</span>
                <i className="icon-doc menu-icon"></i>
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Services </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Facility </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> Event </a></li>
                  
                </ul>
              </div>
            </li>
            
          </ul>
        </nav>

      <Main/>
       
      </div>
      
    </div>
   
    <script src="vendors/js/vendor.bundle.base.js"></script>
   
    <script src="./vendors/chart.js/Chart.min.js"></script>
    <script src="./vendors/moment/moment.min.js"></script>
    <script src="./vendors/daterangepicker/daterangepicker.js"></script>
    <script src="./vendors/chartist/chartist.min.js"></script>
  
    <script src="js/off-canvas.js"></script>
    <script src="js/misc.js"></script>
   
    <script src="./js/dashboard.js"></script>
    
  </body>
  )
}

export default Header
