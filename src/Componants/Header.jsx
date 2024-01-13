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
            <li className="nav-item nav-profile">
              <a href="#" className="nav-link">
                <div className="profile-image">
                  <img className="img-xs rounded-circle" src="images/faces/face8.jpg" alt="profile image"/>
                  <div className="dot-indicator bg-success"></div>
                </div>
                <div className="text-wrapper">
                  <p className="profile-name">Allen Moreno</p>
                  <p className="designation">Administrator</p>
                </div>
                <div className="icon-container">
                  <i className="icon-bubbles"></i>
                  <div className="dot-indicator bg-danger"></div>
                </div>
              </a>
            </li>
            <li className="nav-item nav-category">
              <span className="nav-link">Dashboard</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <span className="menu-title">Dashboard</span>
                <i className="icon-screen-desktop menu-icon"></i>
              </a>
            </li>
            <li className="nav-item nav-category"><span className="nav-link">UI Elements</span></li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <span className="menu-title">Basic UI Elements</span>
                <i className="icon-layers menu-icon"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/icons/simple-line-icons.html">
                <span className="menu-title">Icons</span>
                <i className="icon-globe menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/forms/basic_elements.html">
                <span className="menu-title">Form Elements</span>
                <i className="icon-book-open menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/charts/chartist.html">
                <span className="menu-title">Charts</span>
                <i className="icon-chart menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/tables/basic-table.html">
                <span className="menu-title">Tables</span>
                <i className="icon-grid menu-icon"></i>
              </a>
            </li>
            <li className="nav-item nav-category"><span className="nav-link">Sample Pages</span></li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <span className="menu-title">General Pages</span>
                <i className="icon-doc menu-icon"></i>
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item pro-upgrade">
              <span className="nav-link">
                <a className="btn btn-block px-0 btn-rounded btn-upgrade" href="https://www.bootstrapdash.com/product/stellar-admin-template/" target="_blank"> <i className="icon-badge mx-2"></i> Upgrade to Pro</a>
              </span>
            </li>
          </ul>
        </nav>

        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row purchace-popup">
              <div className="col-12 stretch-card grid-margin">
                <div className="card card-secondary">
                  <span className="card-body d-lg-flex align-items-center">
                    <p className="mb-lg-0">Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more! </p>
                    <a href="https://www.bootstrapdash.com/product/stellar-admin/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" target="_blank" className="btn btn-warning purchase-button btn-sm my-1 my-sm-0 ml-auto">Upgrade To Pro</a>
                    <button className="close popup-dismiss ml-2">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Sessions by channel</h4>
                    <div className="aligner-wrapper">
                      <canvas id="sessionsDoughnutChart" height="210"></canvas>
                      <div className="wrapper d-flex flex-column justify-content-center absolute absolute-center">
                        <h2 className="text-center mb-0 font-weight-bold">8.234</h2>
                        <small className="d-block text-center text-muted  font-weight-semibold mb-0">Total Leads</small>
                      </div>
                    </div>
                    <div className="wrapper mt-4 d-flex flex-wrap align-items-cente">
                      <div className="d-flex">
                        <span className="square-indicator bg-danger ml-2"></span>
                        <p className="mb-0 ml-2">Assigned</p>
                      </div>
                      <div className="d-flex">
                        <span className="square-indicator bg-success ml-2"></span>
                        <p className="mb-0 ml-2">Not Assigned</p>
                      </div>
                      <div className="d-flex">
                        <span className="square-indicator bg-warning ml-2"></span>
                        <p className="mb-0 ml-2">Reassigned</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body performane-indicator-card">
                    <div className="d-sm-flex">
                      <h4 className="card-title flex-shrink-1">Performance Indicator</h4>
                      <p className="m-sm-0 ml-sm-auto flex-shrink-0">
                        <span className="data-time-range ml-0">7d</span>
                        <span className="data-time-range active">2w</span>
                        <span className="data-time-range">1m</span>
                        <span className="data-time-range">3m</span>
                        <span className="data-time-range">6m</span>
                      </p>
                    </div>
                    <div className="d-sm-flex flex-wrap">
                      <div className="d-flex align-items-center">
                        <span className="dot-indicator bg-primary ml-2"></span>
                        <p className="mb-0 ml-2 text-muted font-weight-semibold">Complaints (2098)</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="dot-indicator bg-info ml-2"></span>
                        <p className="mb-0 ml-2 text-muted font-weight-semibold"> Task Done (1123)</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="dot-indicator bg-danger ml-2"></span>
                        <p className="mb-0 ml-2 text-muted font-weight-semibold">Attends (876)</p>
                      </div>
                    </div>
                    <div id="performance-indicator-chart" className="ct-chart mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row quick-action-toolbar">
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-header d-block d-md-flex">
                    <h5 className="mb-0">Quick Actions</h5>
                    <p className="ml-auto mb-0">How are your active users trending overtime?<i className="icon-bulb"></i></p>
                  </div>
                  <div className="d-md-flex row m-0 quick-action-btns" role="group" aria-label="Quick action buttons">
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"> <i className="icon-user mr-2"></i> Add Client</button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="icon-docs mr-2"></i> Create Quote</button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="icon-folder mr-2"></i> Enter Payment</button>
                    </div>
                    <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                      <button type="button" className="btn px-0"><i className="icon-book-open mr-2"></i>Create Invoice</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-sm-flex align-items-baseline report-summary-header">
                          <h5 className="font-weight-semibold">Report Summary</h5> <span className="ml-auto">Updated Report</span> <button className="btn btn-icons border-0 p-2"><i className="icon-refresh"></i></button>
                        </div>
                      </div>
                    </div>
                    <div className="row report-inner-cards-wrapper">
                      <div className=" col-md -6 col-xl report-inner-card">
                        <div className="inner-card-text">
                          <span className="report-title">EXPENSE</span>
                          <h4>$32123</h4>
                          <span className="report-count"> 2 Reports</span>
                        </div>
                        <div className="inner-card-icon bg-success">
                          <i className="icon-rocket"></i>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl report-inner-card">
                        <div className="inner-card-text">
                          <span className="report-title">PURCHASE</span>
                          <h4>95,458</h4>
                          <span className="report-count"> 3 Reports</span>
                        </div>
                        <div className="inner-card-icon bg-danger">
                          <i className="icon-briefcase"></i>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl report-inner-card">
                        <div className="inner-card-text">
                          <span className="report-title">QUANTITY</span>
                          <h4>2650</h4>
                          <span className="report-count"> 5 Reports</span>
                        </div>
                        <div className="inner-card-icon bg-warning">
                          <i className="icon-globe-alt"></i>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl report-inner-card">
                        <div className="inner-card-text">
                          <span className="report-title">RETURN</span>
                          <h4>25,542</h4>
                          <span className="report-count"> 9 Reports</span>
                        </div>
                        <div className="inner-card-icon bg-primary">
                          <i className="icon-diamond"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="row income-expense-summary-chart-text">
                      <div className="col-xl-4">
                        <h5>Income And Expenses Summary</h5>
                        <p className="small text-muted">A comparison of people who mark themselves of their ineterest from the date range given above. Learn more.</p>
                      </div>
                      <div className=" col-md-3 col-xl-2">
                        <p className="income-expense-summary-chart-legend"> <span ></span> Total Income </p>
                        <h3>$ 1,766.00</h3>
                      </div>
                      <div className="col-md-3 col-xl-2">
                        <p className="income-expense-summary-chart-legend"> <span ></span> Total Expense </p>
                        <h3>$ 5,698.30</h3>
                      </div>
                      <div className="col-md-6 col-xl-4 d-flex align-items-center">
                        <div className="input-group" id="income-expense-summary-chart-daterange">
                          <div className="inpu-group-prepend input-group-text"><i className="icon-calendar"></i></div>
                          <input type="text" className="form-control"/>
                          <div className="input-group-prepend input-group-text"><i className="icon-arrow-down"></i></div>
                        </div>
                      </div>
                    </div>
                    <div className="row income-expense-summary-chart mt-3">
                      <div className="col-md-12">
                        <div className="ct-chart" id="income-expense-summary-chart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-sm-flex align-items-center mb-4">
                      <h4 className="card-title mb-sm-0">Products Inventory</h4>
                      <a href="#" className="text-dark ml-auto mb-3 mb-sm-0"> View all Products</a>
                    </div>
                    <div className="table-responsive border rounded p-1">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="font-weight-bold">Store ID</th>
                            <th className="font-weight-bold">Amount</th>
                            <th className="font-weight-bold">Gateway</th>
                            <th className="font-weight-bold">Created at</th>
                            <th className="font-weight-bold">Paid at</th>
                            <th className="font-weight-bold">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img className="img-sm rounded-circle" src="images/faces/face1.jpg" alt="profile image"/> Katie Holmes
                            </td>
                            <td>$3621</td>
                            <td><img src="images/dashboard/alipay.png" alt="alipay" className="gateway-icon mr-2"/> alipay</td>
                            <td>04 Jun 2019</td>
                            <td>18 Jul 2019</td>
                            <td>
                              <div className="badge badge-success p-2">Paid</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img className="img-sm rounded-circle" src="images/faces/face2.jpg" alt="profile image"/> Minnie Copeland
                            </td>
                            <td>$6245</td>
                            <td><img src="images/dashboard/paypal.png" alt="alipay" className="gateway-icon mr-2"/> Paypal</td>
                            <td>25 Sep 2019</td>
                            <td>07 Oct 2019</td>
                            <td>
                              <div className="badge badge-danger p-2">Pending</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img className="img-sm rounded-circle" src="images/faces/face3.jpg" alt="profile image"/> Rodney Sims
                            </td>
                            <td>$9265</td>
                            <td><img src="images/dashboard/alipay.png" alt="alipay" className="gateway-icon mr-2"/> alipay</td>
                            <td>12 dec 2019</td>
                            <td>26 Aug 2019</td>
                            <td>
                              <div className="badge badge-warning p-2">Failed</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img className="img-sm rounded-circle" src="images/faces/face4.jpg" alt="profile image"/> Carolyn Barker
                            </td>
                            <td>$2263</td>
                            <td><img src="images/dashboard/alipay.png" alt="alipay" className="gateway-icon mr-2"/> alipay</td>
                            <td>30 Sep 2019</td>
                            <td>20 Oct 2019</td>
                            <td>
                              <div className="badge badge-success p-2">Paid</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex mt-4 flex-wrap">
                      <p className="text-muted">Showing 1 to 10 of 57 entries</p>
                      <nav className="ml-auto">
                        <ul className="pagination separated pagination-info">
                          <li className="page-item"><a href="#" className="page-link"><i className="icon-arrow-left"></i></a></li>
                          <li className="page-item active"><a href="#" className="page-link">1</a></li>
                          <li className="page-item"><a href="#" className="page-link">2</a></li>
                          <li className="page-item"><a href="#" className="page-link">3</a></li>
                          <li className="page-item"><a href="#" className="page-link">4</a></li>
                          <li className="page-item"><a href="#" className="page-link"><i className="icon-arrow-right"></i></a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin templates</a> from Bootstrapdash.com</span>
            </div>
          </footer>
         
        </div>
       
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
