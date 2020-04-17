<template>
    <el-container>
        <el-header>
            header
        </el-header>
        <el-container>
            <el-aside style="width:200px">
                <el-row>
                    <el-col :span="24">
                        <el-menu
                        :default-active="jumpInstruction"
                        router
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                            <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/table" >选项1
                                    </el-menu-item>
                                    <el-menu-item index="1-2">选项2</el-menu-item>
                                    <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                    <template slot="title">选项4</template>
                                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span slot="title">导航三</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>
               <router-view/>
            </el-main>
        </el-container>
    </el-container>  
</template>
<script>
export default {
    name : "App",
    computed: {
        jumpInstruction(){
        //初始化时,导航显示首页
        if(this.$route.path=='/'){
            this.$router.push('/Table')
            return '/Table'
        }else{
            //非导航跳转页面时,导航栏选中相应选项
            return this.$route.path
        }      
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>>
<style  scoped>
    .el-aside{
        background-color: #D3DCE6;
        color: #333;
        line-height: 50px;
    }
    .el-header{
        line-height : 50px;
        background-color: #b3c0d1;
        color: #333;
        padding: 0;
        z-index: 1000;
    }
    .el-main{
        line-height : 30px;
        background-color: #E9EEF3;
        color: #333;
    }
    .el-container{
        position: absolute; 
        width: 100%; 
        top: 0px ; 
        left: 0 ; 
        bottom: 0;
    }

    .el-header .fr{
        float: right;
    }
    .el-header .el-menu{
        border-bottom: none;
    }
    .el-aside, .el-main{
        padding-top: 60px;
    }
    .el-aside{
        background: #545c64;
    }
    .el-aside .el-menu{
        border-right: none;
    }
</style>