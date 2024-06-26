import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useStateContext } from "../../context";

const Header = () => {
  const { address, disconnect, connect, userBalance } = useStateContext();

  return (
    <>
      <header class="rn-header haeder-default header--sticky">
        <div class="container">
          <div class="header-inner">
            <div class="header-left">
              <div class="logo-thumbnail logo-custom-css">
                {/* <a class="logo-light" href="/">
                  <img src="/logo/logo-white.png" alt="nft-logo" />
                </a>
                <a class="logo-dark" href="/">
                  <img src="/logo/logo-dark.png" alt="nft-logo" />
                </a> */}
              </div>
              <div class="mainmenu-wrapper">
                <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
                  <ul class="mainmenu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/author">
                            Author
                          </a>
                      </li>

                      <li>
                          <a href="/create">
                            Create
                          
                          </a>
                        </li>

                    
                      {/* <a href="/explore">Explore</a>
                      <ul class="submenu">
                        <li>
                          <a href="/collection">
                            Collection<i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/active">
                            Activity<i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/author">
                            Author<i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/connect">
                            Connect<i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/create">
                            Create
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/creator">
                            Creator
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>

                        <li>
                          <a href="/product">
                            Product
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/blog">
                            Blog
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/blogdetail">
                            Blog Detail
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/contact">
                            Contact
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/explor">
                            Explore
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="/forget">
                            Forget
                          </a>
                        </li>
                        <li>
                          <a class="live-expo" href="explore-live-three.html">
                            Live With Place Bid
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li> */}
                      {/* <a href="/">Pages</a>
                      <ul class="submenu">
                        <li>
                          <a href="/fourm">
                            Fourm<i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/login">
                            Login<i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/news">
                            News<i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/privacy">
                            Privacy<i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/ranking">
                            Ranking
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/signup">
                            SignUp
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/upcoming">
                            Upcoming
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/edit-profile">
                            Edit Profile
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/404">
                            404
                            <i class="feather-fast-forward"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li> 
                      <a class="down" href="/blog">
                        Blog
                      </a>
                    </li>
                    */}
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="header-right">
              <div class="setting-option d-none d-lg-block">
                <form class="search-form-wrapper" action="#">
                  <input
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                  />
                  <div class="search-icon">
                    <button>
                      <i class="feather-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div class="setting-option rn-icon-list d-block d-lg-none">
                <div class="icon-box search-mobile-icon">
                  <button>
                    <i class="feather-search"></i>
                  </button>
                </div>
                <form
                  id="header-search-1"
                  action="#"
                  method="GET"
                  class="large-mobile-blog-search"
                >
                  <div class="rn-search-mobile form-group">
                    <button type="submit" class="search-button">
                      <i class="feather-search"></i>
                    </button>
                    <input type="text" placeholder="Search ..." />
                  </div>
                </form>
              </div>

              {/* //CONNECT WALLET */}

              {address ? (
                ""
              ) : (
                <div
                  class="setting-option header-btn rbt-site-header"
                  id="rbt-site-header"
                >
                  <div class="icon-box">
                    <button
                      onClick={() => connect()}
                      class="btn btn-primary-alta btn-small"
                    >
                      Wallet connect
                    </button>
                  </div>
                </div>
              )}

              {/* //END CONNECT WALLET */}
              <div class="setting-option rn-icon-list notification-badge">
                <div class="icon-box">
                  <a href="/activity">
                    <i class="feather-bell"></i>
                    {/* <span class="badge">6</span> */}
                  </a>
                </div>
              </div>

              {address ? (
                <div>
                  <div class="setting-option rn-icon-list user-account">
                    <div class="icon-box">
                      <a href="/author">
                        <img src="/icons/boy-avater.png" alt="Images" />
                      </a>
                      <div class="rn-dropdown">
                        <div class="rn-inner-top">
                          <h4 class="title">
                            <a href="product-details.html">
                              Ultimate Being
                            </a>
                          </h4>
                         
                        </div>
                        <div class="rn-product-inner">
                          <ul class="product-list">
                            <li class="single-product-list">
                              <div class="thumbnail">
                                <a href="product-details.html">
                                  <img
                                    src="/portfolio/portfolio-07.jpg"
                                    alt="Nft Product Images"
                                  />
                                </a>
                              </div>
                              <div class="content">
                                <h6 class="title">
                                  <a href="product-details.html">Balance</a>
                                </h6>
                                <span class="price">
                                  {userBalance?.slice(0, 6)} CELO
                                </span>
                              </div>
                              <div class="button"></div>
                            </li>
                            
                          </ul>
                        </div>
                        <div class="add-fund-button mt--20 pb--20">
                          {/* <a class="btn btn-primary-alta w-100" href="/connect">
                            Add Your More Funds
                          </a> */}
                        </div>
                        <ul class="list-inner">
                          <li>
                            <a href="/author">My Profile</a>
                          </li>
                          {/* <li>
                            <a href="/edit-profile">Edit Profile</a>
                          </li>
                          <li>
                            <a href="/connect">Manage funds</a>
                          </li> */}
                          <li>
                            <a href="/" onClick={() => disconnect()}>
                              Disconnect
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div class="setting-option mobile-menu-bar d-block d-xl-none">
                <div class="hamberger">
                  <button class="hamberger-button">
                    <i class="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div class="popup-mobile-menu">
        <div class="inner">
          <div class="header-top">
            <div class="logo logo-custom-css">
              <a class="logo-light" href="index.html">
                <img src="/logo/logo-white.png" alt="nft-logo" />
              </a>
              <a class="logo-dark" href="index.html">
                <img src="/logo/logo-dark.png" alt="nft-logo" />
              </a>
            </div>
            <div class="close-menu">
              <button class="close-button">
                <i class="feather-x"></i>
              </button>
            </div>
          </div>
          <nav>
            <ul class="mainmenu">
              <li>
                <a class="nav-link its_new" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a class="nav-link its_new" href="/explor">
                  Explore
                </a>
              </li>
              <li>
                <a class="nav-link its_new" href="/">
                  Pages
                </a>
              </li>
              <li>
                <a class="nav-link its_new" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
