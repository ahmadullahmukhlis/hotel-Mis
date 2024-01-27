import Bundle from "../assets/bundle"

function Main(){
  return(  <>
      <div className="main-panel">
          <div className="content-wrapper">
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
    </>
  )
}
export default Main