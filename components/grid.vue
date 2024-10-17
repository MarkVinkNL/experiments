<template>
  <div class="grid-container">
    <div class="container">
      <div class="grid">
        <div class="row">
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="col-xs-4 col-md-2 col-lg-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
          <div class="hide-down-sm col-md-1">
            <div class="lines"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scss>
.grid-container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
  pointer-events: none;

  .container {
    height: 100%;
  }

  .row {
    height: 100%;
  }

  .col-xs-4,
  .col-md-2,
  .col-md-1,
  .col-lg-1 {
    height: 100%;
  }
}

.grid {
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }

  .lines {
    position: relative;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 100%;
      opacity: .15;
      border: 1px solid white;
      border-top: none;
      border-bottom: none;
      mix-blend-mode: difference;
    }
  }
}

.hide-down-sm {
  @media (max-width: 992px) {
    display: none;
  }
}
</style>