<template>
<svg
    :width = "width" :height="height" :viewBox="viewBox" fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <path :d="d" :fill="iconColor"></path>
</svg>

</template>

<script>
export default {
    props : {
        width : {type : [Number, String], default: 18},
        height : {type : [Number, String], default: 18},
        viewBox : {type : String, defalut : "0 0 23 22"},
        iconColor : {type : String, defalut : "#7980AB"},
        iconName : {type : String, default : ""},
        d : {type : String},
        
    }
}
</script>

<style>

</style>