<template>
  <div>
    <el-container id="container">
      <el-header class="header"
        style="text-align: center; font-size: 300%;height:100px;line-height: 100px;background-image: url('/static/img/header.png');"
        >
        <font color="black" >Lazy? Come to be here!</font>
      </el-header>
       
      <div style="width:80%;align;center;margin:0 auto;">
        <el-divider content-position="left">搜索引擎</el-divider>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.baidu.com"><img class="icon" style="vertical-align: text-bottom " src="https://www.baidu.com/favicon.ico" />百度</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.google.com"><img class="icon" style="vertical-align: text-bottom " src="https://www.google.com/favicon.ico" />谷歌</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.bing.com/?mkt=zh-CN"><img class="icon" style="vertical-align: text-bottom " src="https://www.bing.com/favicon.ico" />必应</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.yahoo.com/"><img class="icon" style="vertical-align: text-bottom " src="https://www.yahoo.com/favicon.ico" />雅虎</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://duckduckgo.com/"><img class="icon" style="vertical-align: text-bottom " src="https://www.duckduckgo.com/favicon.ico" />Duck</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://amazon.com"><img class="icon" style="vertical-align: text-bottom " src="https://www.amazon.com/favicon.ico" />Amazon</a></div></el-col>
          </el-row>
        </el-main>

        <el-divider content-position="left">技术问答</el-divider>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://github.com/"><img class="icon" style="vertical-align: text-bottom " src="https://github.com/favicon.ico" />GitHub</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://stackoverflow.com/"><img class="icon" style="vertical-align: text-bottom " src="https://stackoverflow.com/favicon.ico" />stackoverflower</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.zhihu.com/signin?next=%2F"><img class="icon" style="vertical-align: text-bottom " src="https://www.zhihu.com/favicon.ico" />知乎</a></div></el-col>
          </el-row>
        </el-main>
      
        <el-divider content-position="left">站长工具</el-divider>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://tool.chinaz.com/"><img class="icon" style="vertical-align: text-bottom " src="https://tool.chinaz.com/favicon.ico" />站长之家</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://17ce.com/"><img class="icon" style="vertical-align: text-bottom " src="https://17ce.com//favicon.ico" />17ce</a></div></el-col>
          </el-row>
        </el-main>
      
        <el-divider content-position="left">IP查询</el-divider>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><a href="http://ip111.cn/"><img class="icon" style="vertical-align: text-bottom " src="https://dan.com//favicon.ico" />IP111</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://ip138.com/"><img class="icon" style="vertical-align: text-bottom " src="https://ip138.com//favicon.ico" />IP138</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://myip.ipip.net/"><img class="icon" style="vertical-align: text-bottom " src="https://www.speedtest.cn/favicon.ico" />MYIP</a></div></el-col>
          </el-row>
        </el-main>
      
        <el-divider content-position="left">Golang学习</el-divider>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><a href="http://golang.iswbm.com/">Go 编程时光</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="http://c.biancheng.net/golang/"><img class="icon" style="vertical-align: text-bottom " src="http://c.biancheng.net/favicon.ico" />C语言中文网</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.runoob.com/go/go-tutorial.html"><img class="icon" style="vertical-align: text-bottom " src="https://www.runoob.com/favicon.ico" />菜鸟教程</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.w3school.com.cn/"><img class="icon" style="vertical-align: text-bottom " src="https://www.w3school.com.cn/ui2019/logo-180.png" />w3school</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.yiibai.com/go/"><img class="icon" style="vertical-align: text-bottom " src="https://www.yiibai.com/favicon.ico" />易百教程</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="http://www.topgoer.com/"><img class="icon" style="vertical-align: text-bottom " src="http://www.topgoer.com/gitbook/images/favicon.ico" />ToperGoer</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://hyper0x.github.io/go_command_tutorial/#/">Go命令教程</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://chai2010.gitbooks.io/advanced-go-programming-book/content/">GO语言高级编程</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.ctolib.com/go/categories/go-guide.html">CTOLib 码库</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://mojotv.cn/404#Golang"><img class="icon" style="vertical-align: text-bottom " src="https://mojotv.cn/assets/image/logo01.png" />mojotv 进阶系列</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://books.studygolang.com/gopl-zh/"><img class="icon" style="vertical-align: text-bottom " src="https://books.studygolang.com/gopl-zh/gitbook/images/favicon.ico" />Go语言圣经</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://talkgo.org/"><img class="icon" style="vertical-align: text-bottom " src="https://talkgo.org/uploads/default/optimized/1X/3e5431f3160782bc5133a607d2afe8e679525172_2_32x32.ico" />Go 夜读</a></div></el-col>
          </el-row>
        </el-main>

        <el-divider content-position="left">Python学习</el-divider>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.programcreek.com/python/">Python Code Examples</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.runoob.com/python/python-tutorial.html"><img class="icon" style="vertical-align: text-bottom " src="https://www.runoob.com/favicon.ico" />菜鸟教程</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://docs.python.org/zh-cn/3/tutorial/index.html"><img class="icon" style="vertical-align: text-bottom " src="https://docs.python.org/zh-cn/3/_static/py.svg" />Python官方文档</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="http://c.biancheng.net/python/"><img class="icon" style="vertical-align: text-bottom " src="http://c.biancheng.net/favicon.ico" />C语言中文网</a></div></el-col>
          </el-row>
        </el-main>

        <el-divider content-position="left">kubernetes</el-divider>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://kubernetes.io/"><img class="icon" style="vertical-align: text-bottom " src="https://kubernetes.io/images/favicon.png" />官网</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://github.com/prometheus-operator/kube-prometheus">Kube Prometheus</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://istio.io/"><img class="icon" style="vertical-align: text-bottom " src="https://istio.io/favicon.ico" />istio</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://book.kubebuilder.io/"><img class="icon" style="vertical-align: text-bottom " src="https://book.kubebuilder.io/logos/favicon.png" />kubebuilder</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://github.com/kubernetes/code-generator">codegenerator</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://book.kubebuilder.io/reference/markers.html">markerFORcodeGenerator1</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://book.kubebuilder.io/reference/markers/crd.html">markerFORcodeGenerator2</a></div></el-col>
          </el-row>
        </el-main>

        <el-divider content-position="left">在线画图</el-divider>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.iodraw.com/"><img class="icon" style="vertical-align: text-bottom " src="https://www.iodraw.com/static/img/common/favicon.ico" />iodraw</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://c.runoob.com/more/shapefly-diagram/"><img class="icon" style="vertical-align: text-bottom " src="https://www.runoob.com/favicon.ico" />菜鸟画图</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://naotu.baidu.com/home"><img class="icon" style="vertical-align: text-bottom " src="https://naotu.baidu.com/favicon.ico" />百度脑图</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://www.liuchengtu.com/home/myfile"><img class="icon" style="vertical-align: text-bottom " src="https://www.liuchengtu.com/favicon.ico" />迅捷画图</a></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><a href="https://mm.edrawsoft.cn/app/create"><img class="icon" style="vertical-align: text-bottom " src="https://mm.edrawsoft.cn/favicon.ico" />亿脑</a></div></el-col>
          </el-row>
        </el-main>



      </div>

      <el-divider></el-divider>
      <el-footer>
        @2014 - 2022 - 免责声明 - 资源举报 - 建议反馈<br>
        以上内容由网络爬虫自动抓取，以非人工方式自动生成。<br>
        本站不储存、复制、传播任何文件，其资源文件的完整性需要您自行判断。<br>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
    name: "SlugSet",
    data() {
       const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>


<style type="text/css" scoped>
  .el-header {
    background-color: #409EFF!important;
  }

  #container {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
     /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
    width: 100%;
  }

  a {
    font-size: 20px;
  }

  .icon {
    width: 20px;
  }
</style>