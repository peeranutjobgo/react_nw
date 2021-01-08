import React, { Component } from 'react';
import DataList from './data/DataLists';
import Navbar from './Navbar';


// function Viewbook() {
class Viewbook extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4" > <center>ติดตามการจองรถ </center> </h1>
                        {/* <!-- <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> --> */}
                    </div>

                </div>
                <DataList />
            


                {/* <div class="container">
                    <div class="row">
                        <div class="col-sm">
                        </div>
                        <div class="col-11">
                            {/* <!-- One of three columns --> 

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">หมายเลขการจอง</th>
                                        <th scope="col">จุดเรึ่มตัน</th>
                                        <th scope="col">จุดหมายปลายทาง</th>
                                        <th scope="col">รายละเอียดเส้นทาง </th>
                                        <th scope="col">สถานะ </th>
                                        <th scope="col"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">00001</th>
                                        <td>กรุงเทพ</td>
                                        <td>เชียงใหม่</td>
                                        <td>....</td>
                                        <td>รอการยันยัน</td>
                                        <td><a href="#" class="link-danger">ยกเลิกการจอง</a> <button type="button" class="btn btn-danger">ยกเลิกการจอง</button ></td>
                                    </tr>
                                    <div class="col-sm">
                                    </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                // </div> */ }
            </div>
        )
    }
}

export default Viewbook; 