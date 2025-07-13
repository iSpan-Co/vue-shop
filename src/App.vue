<script setup>
import { onMounted } from "vue"

onMounted(() => { })
</script>

<template>
  <main class="main" id="top">
    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section class="py-0">
      <div class="container-small">
        <div class="ecommerce-topbar">
          <nav class="navbar navbar-expand-lg navbar-light px-0">
            <div class="row gx-0 gy-2 w-100 flex-between-center">
              <div class="col-auto">
                <a class="text-decoration-none" href="/">
                  <div class="d-flex align-items-center">
                    <img src="/assets/img/icons/logo.png" alt="雜貨商城" width="27" />
                    <h5 class="logo-text ms-2">雜貨商城</h5>
                  </div>
                </a>
              </div>
              <div class="col-auto order-md-1">
                <ul class="navbar-nav navbar-nav-icons flex-row me-n2">
                  <li class="nav-item">
                    <a class="nav-link px-2 icon-indicator icon-indicator-primary"
                      href="../../../apps/e-commerce/landing/cart.html" role="button"><span class="text-body-tertiary"
                        data-feather="shopping-cart" style="height: 20px; width: 20px"></span><span
                        class="icon-indicator-number">3</span></a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link px-2" id="navbarDropdownUser" href="#" role="button" data-bs-toggle="dropdown"
                      data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span
                        class="text-body-tertiary" data-feather="user" style="height: 20px; width: 20px"></span></a>
                    <div
                      class="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border mt-2"
                      aria-labelledby="navbarDropdownUser">
                      <div class="card position-relative border-0">
                        <div class="card-body p-0">
                          <div class="text-center pt-4 pb-3">
                            <div class="avatar avatar-xl">
                              <img class="rounded-circle" src="/assets/img/team/72x72/57.webp" alt="" />
                            </div>
                            <h6 class="mt-2 text-body-emphasis">
                              Jerry Seinfield
                            </h6>
                          </div>
                          <div class="mb-3 mx-3">
                            <input class="form-control form-control-sm" id="statusUpdateInput" type="text"
                              placeholder="更新您的狀態" />
                          </div>
                        </div>
                        <div class="overflow-auto scrollbar" style="height: 10rem">
                          <ul class="nav d-flex flex-column mb-2 pb-1">
                            <li class="nav-item">
                              <a class="nav-link px-3 d-block" href="#!">
                                <span class="me-2 text-body align-bottom"
                                  data-feather="user"></span><span>個人資料</span></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link px-3 d-block" href="#!"><span class="me-2 text-body align-bottom"
                                  data-feather="pie-chart"></span>儀表板</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link px-3 d-block" href="#!">
                                <span class="me-2 text-body align-bottom" data-feather="help-circle"></span>幫助中心</a>
                            </li>
                          </ul>
                        </div>
                        <div class="card-footer p-0 border-top border-translucent">
                          <div class="px-3">
                            <a class="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!">
                              <span class="me-2" data-feather="log-out"> </span>登出</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6">
                <div class="search-box ecommerce-search-box w-100">
                  <form class="position-relative">
                    <input class="form-control search-input search form-control-sm" type="search" placeholder="搜尋"
                      aria-label="Search" />
                    <span class="fas fa-search search-box-icon"></span>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->

    <nav class="navbar-responsive-navitems navbar-expand navbar-light bg-body-emphasis justify-content-between">
      <div class="container-small d-flex flex-between-center" data-navbar="data-navbar">
        <div class="dropdown">
          <button class="btn text-body ps-0 pe-5 text-nowrap dropdown-toggle dropdown-caret-none"
            data-category-btn="data-category-btn" data-bs-toggle="dropdown">
            <span class="fas fa-bars me-2"></span>分類
          </button>
          <div class="dropdown-menu border border-translucent py-0 category-dropdown-menu">
            <div class="card border-0 scrollbar" style="max-height: 657px">
              <div class="card-body p-6 pb-3">
                <div class="row gx-7 gy-5 mb-5">
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="d-flex align-items-center mb-3">
                      <span class="text-primary me-2" data-feather="pocket" style="stroke-width: 3"></span>
                      <h6 class="text-body-highlight mb-0 text-nowrap">
                        收藏品與藝術
                      </h6>
                    </div>
                    <div class="ms-n2">
                      <a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">收藏品</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">古董</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">運動紀念品</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">藝術品</a>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="d-flex align-items-center mb-3">
                      <span class="text-primary me-2" data-feather="home" style="stroke-width: 3"></span>
                      <h6 class="text-body-highlight mb-0 text-nowrap">
                        居家與花園
                      </h6>
                    </div>
                    <div class="ms-n2">
                      <a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">庭院、花園與戶外</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">手工藝品</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">居家修繕</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">寵物用品</a>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="d-flex align-items-center mb-3">
                      <span class="text-primary me-2" data-feather="globe" style="stroke-width: 3"></span>
                      <h6 class="text-body-highlight mb-0 text-nowrap">
                        運動用品
                      </h6>
                    </div>
                    <div class="ms-n2">
                      <a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">戶外運動</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">團體運動</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">運動與健身</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">高爾夫</a>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4">
                    <div class="d-flex align-items-center mb-3">
                      <span class="text-primary me-2" data-feather="monitor" style="stroke-width: 3"></span>
                      <h6 class="text-body-highlight mb-0 text-nowrap">
                        電子產品
                      </h6>
                    </div>
                    <div class="ms-n2">
                      <a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">電腦與平板</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">相機與攝影</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">電視、音響與監控</a><a
                        class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2"
                        href="#!">手機與配件</a>
                    </div>
                  </div>
                </div>
                <div class="text-center border-top border-translucent pt-3">
                  <a class="fw-bold" href="#!">查看所有分類<span class="fas fa-angle-right ms-1"
                      data-fa-transform="down-1"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="navbar-nav justify-content-end align-items-center">
          <li class="nav-item" data-nav-item="data-nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item" data-nav-item="data-nav-item">
            <router-link class="nav-link" :to="{ name: 'product' }">購物商城</router-link>
          </li>
          <li class="nav-item" data-nav-item="data-nav-item">
            <router-link class="nav-link" :to="{ name: 'wishlist' }">願望清單</router-link>
          </li>
          <li class="nav-item" data-nav-item="data-nav-item">
            <router-link class="nav-link" :to="{ name: 'order' }">我的訂單</router-link>
          </li>
          <li class="nav-item dropdown" data-nav-item="data-nav-item" data-more-item="data-more-item">
            <a class="nav-link dropdown-toggle dropdown-caret-none fw-bold pe-0" href="javascript: void(0)"
              id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-boundary="window"
              data-bs-reference="parent">
              更多<span class="fas fa-angle-down ms-2"></span></a>
            <div class="dropdown-menu dropdown-menu-end category-list" aria-labelledby="navbarDropdown"
              data-category-list="data-category-list"></div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="ecommerce-homepage pt-5 mb-9">
      <router-view />
    </div>

    <!-- ============================================-->
    <!-- <section> begin ============================-->
    <section class="bg-body-highlight dark__bg-gray-1100 py-9">
      <div class="container-small">
        <div class="row justify-content-between gy-4">
          <div class="col-12 col-lg-4">
            <div class="d-flex align-items-center mb-3">
              <img src="/assets/img/icons/logo.png" alt="phoenix" width="27" />
              <h5 class="logo-text ms-2">phoenix</h5>
            </div>
            <p class="text-body-tertiary mb-1 fw-semibold lh-sm fs-9">
              Phoenix
              是一個具有迷人功能和令人驚嘆佈局的管理儀表板模板。該模板對所有主流瀏覽器都具備響應式設計，並且兼容所有設備和螢幕尺寸。如果需要營利或開發，請自行至該網站購買授權。
            </p>
          </div>
          <div class="col-6 col-md-auto">
            <h5 class="fw-bolder mb-3">關於 Phoenix</h5>
            <div class="d-flex flex-column">
              <a class="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">招募人才</a>
              <a class="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">聯盟計畫</a>
              <a class="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">隱私政策</a>
              <a class="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">條款與條件</a>
            </div>
          </div>
          <div class="col-6 col-md-auto">
            <h5 class="fw-bolder mb-3">保持聯繫</h5>
            <div class="d-flex flex-column">
              <a class="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">部落格</a>
              <a class="mb-1 fw-semibold fs-9 d-flex" href="#!">
                <span class="fab fa-facebook-square text-primary me-2 fs-8"></span>
                <span class="text-body-secondary">Facebook 臉書</span>
              </a>
              <a class="mb-1 fw-semibold fs-9 d-flex" href="#!">
                <span class="fab fa-twitter-square text-info me-2 fs-8"></span>
                <span class="text-body-secondary">Twitter 推特</span>
              </a>
            </div>
          </div>
          <div class="col-6 col-md-auto">
            <h5 class="fw-bolder mb-3">客服服務</h5>
            <div class="d-flex flex-column">
              <a class="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">客服中心</a>
              <a class="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">24/7 支援</a>
              <a class="text-body-tertiary fw-semibold fs-9 mb-1" href="#!">Phoenix 社群</a>
            </div>
          </div>
        </div>
      </div>
      <!-- end of .container-->
    </section>
    <!-- <section> close ============================-->
    <!-- ============================================-->

    <footer class="footer position-relative">
      <div class="row g-0 justify-content-between align-items-center h-100">
        <div class="col-12 col-sm-auto text-center">
          <p class="mb-0 mt-2 mt-sm-0 text-body">
            Thank you for creating with Phoenix<span class="d-none d-sm-inline-block"></span><span
              class="d-none d-sm-inline-block mx-1">|</span><br class="d-sm-none" />2025 &copy;<a class="mx-1"
              href="https://themewagon.com">Themewagon</a>
          </p>
        </div>
        <div class="col-12 col-sm-auto text-center">
          <p class="mb-0 text-body-tertiary text-opacity-85">v1.23.0</p>
        </div>
      </div>
    </footer>
  </main>
  <!-- ===============================================-->
  <!--    End of Main Content-->
  <!-- ===============================================-->
</template>
