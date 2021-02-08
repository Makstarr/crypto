<template>
  <div id="app">
    <div class="content-wrapper">
      <nav id="nav" class="nav">
        <router-link class="nav-item" to="/">Конвертер криптовалют</router-link>
        <router-link class="nav-item" to="/wallet">Кошелек</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style lang="sass">
body
  background-color:#292929
  color:#D7D7D7
.content-wrapper
  box-sizing: border-box
  margin: 50px 20px
  border: 1px solid #494949
  border-radius: 0 5px 5px
  position: relative
  z-index: 1
  padding: 0 10px 20px
  .nav
    position: absolute
    border-radius: 5px
    top: -40px
    z-index: 0
    &-item
      transition: color .35s
      position: relative
      z-index: 0
      background-color:#292929
      border: 1px solid #494949
      color:#494949
      display: flex
      text-decoration: none
      padding: 10px 50px
      font-size: 20px
      line-height: 20px
      height: 40px
      left: -1px
      margin: 0 5px 0 0 
      border-radius: 5px  5px 0 0
      cursor: pointer
    &-item:hover
      color:#D7D7D7
    &-item.router-link-exact-active
      border-bottom: 0
.smallLabel
  opacity: 0.3
  font-size: 12px
.small-title
  font-size: 15px
  font-weight: 300
  opacity: 0.5
.main-container
  max-width: 1000px
  margin: auto
  display: flex
  justify-content: space-between
  &__column
    display: flex
    flex-direction: column
    width: 47%
@media screen and (max-width: 860px) 
  .main-container
    flex-direction: column
    &__column
      width: 100%
  .content-wrapper
    padding: 0 10px 50px
    .nav-item
      padding: 10px 30px
      font-size: 18px
      line-height: 20px
@media screen and (max-width: 480px) 
  .content-wrapper
    margin: 50px 5px
    .nav-item
      padding: 10px 3px
      font-size: 14px
      line-height: 20px
</style>
