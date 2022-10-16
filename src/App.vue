<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name: ''
    }
  },
  metaInfo: {
    title: "页面标题",
    meta: [
      { name: "viewport", content: "width=device-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no;" },
      { name: "yes", content: "apple-mobile-web-app-capable"}
    ],
  },
  mounted () {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let locale = urlParams.get('locale');
    if (this._isMobile() && this.$route.path.match(/privacy/)) {
      this.$router.replace('/privacy/m_license?locale='+locale)
    } 
    if (!this._isMobile() && this.$route.path.match(/privacy/)) {
      this.$router.replace('/privacy/p_license?locale='+locale)
    }
    if (this._isMobile() && this.$route.path.match(/termofservice/)) {
      this.$router.replace('/termofservice/m_license?locale='+locale)
    } 
    if (!this._isMobile() && this.$route.path.match(/termofservice/)) {
      this.$router.replace('/termofservice/p_license?locale='+locale)
    }
    if (this._isMobile() && this.$route.path.match(/3rdsdk/)) {
      this.$router.replace('/3rdsdk/m_license?locale='+locale)
    } 
    if (!this._isMobile() && this.$route.path.match(/3rdsdk/)) {
      this.$router.replace('/3rdsdk/p_license?locale='+locale)
    }
  },
  methods: {
    _isMobile () {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  }
}
</script>

<style type="text/css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,body,#app{
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
   /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  min-height: 30px;
  width: 100%;
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

div {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

</style>
