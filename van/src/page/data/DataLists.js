import React from 'react';
import DisplaySeason from './ViewSeason';
// import { nativeTouchData } from 'react-dom/test-utils';


const DataList = () => {
    const data = [
        {
            id: 1,
            StartPts: "กรุงเทพ",
            DestPts: "เชียงใหม่",
            Route: "...",
            dateappoint: "29/12/2020",
            TimeAppoint: "9.00",
            Status: "ยกเลิกการจอง",
            StatusVal: 2,
            Season: "covid-19 ไม่สามารถออกได้"
        },
        {
            id: 2,
            StartPts: "กรุงเทพ",
            DestPts: "สระบุรี",
            dateappoint: "05/01/2020",
            TimeAppoint: "13.00",
            Route: "...",
            Status: "ยันยันแลัว",
            StatusVal: 1,
            Season: ""
        },
        {
            id: 3,
            StartPts: "กรุงเทพ",
            DestPts: "หนองคาย",
            dateappoint: "29/01/2020",
            TimeAppoint: "6.00",
            Route: "...",
            Status: "รอการยันยัน",
            StatusVal: 0,
            Season: ""
        }
    ]

    // const display = (pro) => {
    //     return 
    // }


    const Lists = data.map((item) => {
        return (
            <div key={item.id} className="col-lg-4 col-sm-4 mt-2" >
                <div class="card">
                    <div class="card-body">
                        <div className="row">
                            <dt className="col-lg-6 col-md-6 col-sm-5 col-6"> หมายเลขการจอง : </dt>
                            <dd className="col-lg-6 col-md-6 col-sm-5 col-6">{item.id}</dd>
                            <dt className="col-lg-6 col-md-6 col-sm-5 col-6">จุดเรึ่มตัน : </dt>
                            <dd className="col-lg-6 col-md-6 col-sm-5 col-6">{item.StartPts}</dd>
                            <dt className="col-lg-6 col-md-6 col-sm-5 col-6"> จุดหมายปลายทาง : </dt>
                            <dd className="col-lg-6 col-md-6 col-sm-5 col-6">{item.DestPts}</dd>
                            <dt className="col-lg-6 col-md-6 col-sm-5 col-6"> วันที่นัดหมาย : </dt>
                            <dd className="col-lg-6 col-md-6 col-sm-5 col-6">{item.dateappoint}</dd>
                            <dt className="col-lg-6 col-md-6 col-sm-5 col-6"> เวลาที่นัดหมาย :  </dt>
                            <dd className="col-lg-6 col-md-6 col-sm-5 col-6">{item.TimeAppoint}</dd>
                            <dt className="col-lg-6 col-md-6 col-sm-5 col-6"> รายละเอียดเส้นทาง : </dt>
                            <dd className="col-lg-6 col-md-6 col-sm-5 col-6">{item.Route}</dd>
                            <dt className="col-lg-6 col-md-6 col-sm-5 col-6"> สถานะ : </dt>
                            <dd className="col-lg-6 col-md-6 col-sm-5 col-6">{item.Status}</dd>
                            <div>
                                {
                                    // data.Status === 3 ?
                                    // <DisplaySeason Season={item.Season} />  :
                                    // null

                                     if (data.Status === 3) 
                                    { return ( <DisplaySeason Season={item.Season} /> )}  else
                                    {return()}
                                    null
                                }
                            </div>
                            <hr />
                            <br />
                            <div>
                                {
                                    /* <button type="button" class="btn btn-danger">ยกเลิกการจอง</button> */
                                    //    data.Status == "รอการยันยัน" ?
                                    data.Status === 0 ?
                                        <button type="button" class="btn btn-danger">ยกเลิกการจอง</button> :
                                        <button type="button" class="btn btn-danger" disabled >ยกเลิกการจอง</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    })


    return (
        <div className="container">
            <div className="row" >
                {Lists}
            </div>
        </div>
    )
}

export default DataList;