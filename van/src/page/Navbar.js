import React from 'react';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <a class="navbar-brand" href="#">bookvan</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">  <i class="fas fa-address-book"></i>หนัาหลัก </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/create"><i class="fas fa-car"></i> จองรถด่วน </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/view"> <i class='fas fa-calendar-alt'></i> ติดตามการจองรถ </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/regis"> ลงทะเบียน </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/login"> <i class="fas fa-sign-in-alt"></i> เข้าสู่ระบบ </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

