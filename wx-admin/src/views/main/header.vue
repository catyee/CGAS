<template>
    <div class="header height-60">
        <div class="header-title">
            <i class="iconlogo-hong iconfont f40"></i>
            <div class="f16" >养老照料公众号后台管理</div>
        </div>
        <div class="header-right pr-16"><i class="el-icon-user f32 pointer"></i></div>
    </div>
</template>
<script>
export default {

}
</script>
<style  lang="scss" scoped>
    .header{
        display: flex;
        align-items: center;
    }
    .header-title{
           color: #fff;

        i{
           font-size: 40px;

        }
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: $menu-width;
        background: $system-color;
    }
    .header-right{
       display: flex;
       justify-content: flex-end;
       align-items: center;
       flex: 1;
       height: 100%;
    }
</style>
