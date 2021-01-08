import React, { Component } from 'react';
import Navbar from './Navbar';

class Createbook extends Component {
    
    function  (params) {
        
    }
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">

                            </div>
                            <div class="col-9">
                                {/* <!-- One of three columns --> */}

                                <div class="jumbotron jumbotron-fluid">
                                    <div class="container">
                                        <h1 class="display-4" > <center>จองรถด่วน </center> </h1>
                                        {/* <!-- <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> --> */}
                                    </div>
                                </div>

                                <form >
                                    <div class="row mb-3">
                                        <label for="" class="col-sm-2 col-form-label">จุดเรึ่มตัน</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" name='StartPts' />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="" class="col-sm-2 col-form-label">จุดหมายปลายทาง</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" name='DestPts' />
                                        </div>
                                    </div>



                                    <div class="row mb-3">
                                        <label for="" class="col-sm-2 col-form-label"> วันที่ออกเริ่มเดินทาง </label>
                                        <div class="col-sm-10">
                                            <input type="date" class="form-control" name='dateappoint' />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="" class="col-sm-2 col-form-label">รายละเอียดเส้นทาง</label>
                                        {/* <div class="col-sm-10"> */}
                                        {/* <input type="text" class="form-control" name='Route' /> */}
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='Route'></textarea>
                                        {/* </div> */}
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick >จองรถ</button>
                                    <button type="reset" class="btn btn-danger">ล้าง</button>
                                </form>
                            </div>
                            {/* <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%" />
                            </div> */}

                            <div class="col-sm">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default Createbook;