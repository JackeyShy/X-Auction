<template>
  <div class="hello">
    <div class="home_top0">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="home_top1">
              <span>X</span><img src="../assets/brand.png" onclick="toHome"
                style="cursor: pointer;" /><span>Auction</span>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple"
            style="text-align: right; border-right: solid; border-right-color: darkgrey;">
            <el-menu :default-active="activeIndex" id="top_menu" class="el-menu-demo" mode="horizontal"
              @select="handleSelect">
              <el-menu-item index="1" class="nav_menu" @click="toAuction">Auctions</el-menu-item>
              <el-menu-item index="2" class="nav_menu" @click="toBidding">My Bidding</el-menu-item>
              <el-menu-item index="3" class="nav_menu" @click="toSelling">My Selling</el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple wallet">
            <el-button icon="el-icon-wallet" class="wallet_button" @click="dialogFormVisible = true">Wallet</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-left: 100px; margin-right: 100px; margin-top: 50px;">
      <template>
        <div class="block">
          <el-carousel height="450px" type="card" width="750px">
            <el-carousel-item v-for="item in imgList" :key="item">
              <img class="carousel_img" :src="item" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </template>
    </div>
    <el-row style="margin-top: 20px;">
      <el-button type="success" class="auction_now" icon="el-icon-coin" @click="toAuction">Auction now!</el-button>
    </el-row>
    <h1>{{ msg }}</h1>
    <el-dialog title="Your address" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Address" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" style="width:70%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>



<script>
const bluepic = require('../assets/blue.png')
const gallary = require('../assets/gallary.png')
const magic = require('../assets/magic.png')
const tech = require('../assets/technology.png')
// import bluepic from '../assets/blue.png'
// import gallary from '../assets/gallary.png'
// import magic from '../assets/magic.png'
// import tech from '../assets/technology.png'

export default {
  name: 'Mainpage',
  data() {
    return {
      imgList: [gallary, bluepic, magic, tech],
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
    }
  },
  props: {
    msg: String
  },
  methods: {
    toHome() {
      this.$router.replace('/');
    },
    toAuction() {
      this.$router.push('/auction');
    },
    toBidding() {
      this.$router.push('/bidding');
    },
    toSelling() {
      this.$router.push('/selling');
    }
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel_img {
  width: 100%;
  height: inherit;
}

.wallet_button {
  border: none;
  background-color: transparent;
  font-family: Times;
  font-size: larger;
}

.wallet {
  margin-top: 9px;
  margin-right: 60px;
  text-align: left;
}

.nav_menu {
  font-family: Times;
  font-size: larger;
  font-weight: 800
}

.auction_now {
  padding: 22px 42px;
  font-size: large;
  font-weight: 800;
  font-family: inherit;
  border-radius: 34px
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin-top: 160px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

#top_menu {
  border-bottom-style: none
}

.home_top0 {
  margin-top: 50px;
}

.home_top1 {
  margin-right: 180px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
