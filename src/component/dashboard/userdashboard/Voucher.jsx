import './voucher.css'
const Voucher = () => {
  return (
    <>
      <div className="voucherDetailContainer" id="voucherdashboard">
        <h1 className="voucherOverview">voucher overview</h1>
        <div className="voucherDetailsContainerContent">
          <div className="voucherDetailContLeft">
            <div className="voucherDetailsContent">
              <h4 className="voucherDetailsHeader">voucher details</h4>
              <hr />
              <div className="voucherDetailsInfo">
                <p className="voucherDetailName">ogbudu dickson</p>
                <p className="voucherDetailEmail">dicksonudehz@gmail.com</p>
              </div>
            </div>
            <div className="voucherDetailsContent">
              <h4 className="voucherDetailsHeader">voucher details</h4>
              <hr />
              <div className="voucherDetailsInfo">
                <p className="voucherDetailName">type of voucher</p>
                <p className="voucherDetailEmail">89847hsdf34</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voucher;
