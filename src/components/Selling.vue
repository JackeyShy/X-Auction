<template>
    <div class="hello">
        <div class="home_top0">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div class="home_top1">
                            <span>X</span><el-image :src="require('../assets/brand.png')" :fit="fit" @click="toHome"
                                style="cursor: pointer;"></el-image><span>Auction</span>
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
                        <el-button icon="el-icon-wallet" class="wallet_button">Wallet</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="show_list">
            <template>
                <el-table :data="tableData"
                    style="width: 100%; border-top: solid ; border-color:gainsboro; margin-top: 75px;"
                    :show-header="false">
                    <el-table-column label="picture" width="500">
                        <template slot-scope="scope">
                            <img :src="scope.row.pic" width="200" height="200">
                        </template>
                    </el-table-column>
                    <el-table-column label="operator" width="500">
                        <template slot-scope="scope">
                            <i class="el-icon-loading"></i><span style="padding-left: 5px; font-size: large;">last:
                                {{ scope.row.lasttime }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <div style="margin-bottom: 5px;">
                                <el-button class="auction_btn" style="padding: 14px 62px;">Details</el-button>
                            </div>
                            <el-button class="auction_btn" style="padding: 14px 54px;" size="medium" type="danger"
                                @click="handleDelete(scope.$index, scope.row)">Withdraw
                            </el-button>
                            <div style="padding-left: 5px; margin-top: 5px;">current price: {{ scope.row.price }}</div>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>

<script>
import goods1 from "../assets/goods1.png"

export default {
    name: 'Bidding',
    data() {
        return {
            tableData: [{
                pic: goods1,
                name: 'nft1',
                address: '0x3214122412132'
            }, {
                pic: goods1,
                name: 'nft2',
                address: '0x3728651712413'
            }, {
                pic: goods1,
                name: 'nft3',
                address: '0x8421791893181'
            }, {
                pic: goods1,
                name: 'nft4',
                address: '0x3287489127489'
            }]
        }
    },
    methods: {
        handleEdit() {
            //console.log(index, row);
        },
        handleDelete() {
            //console.log(index, row);
        },
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

<style scoped>
.input-with-select .el-input-group__prepend {
    padding: 22px 25px;
    font-size: large;
    background-color: #fff;
}

.auction_btn {
    padding: 12px 10px;
    font-size: mini;
    font-weight: 800;
    font-family: inherit;
}

.show_list {
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;
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

.auction_button {
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