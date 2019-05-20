<template>
    <div>
        <div class="d-flex page-container">
            <div class="img-container">
                <img src="../assets/images/child.jpg" alt="">
            </div>
            <div class="text-container">
                <p>Hugh is</p>
                <input-group />
                <p>years old</p>
            </div>
        </div>
        <div class="d-flex page-container">
            <div class="img-container">
                <img src="../assets/images/child.jpg" alt="">
            </div>
            <div class="text-container">
                <p>Hugh is</p>
                <input-group />
                <p>years old</p>
            </div>
        </div>
    </div>
</template>

<script>
    import InputGroup from './InputGroup'

    export default {
        name: "TestParent",

        components: {
            InputGroup,
        },
    }
</script>
<style scoped>
    .page-container {
        width: 350px;
        margin: 0 auto 15px auto;
    }
    .img-container {
        margin-right: 30px;
    }
    .img-container img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        object-fit: cover;
    }
    .text-container {
        line-height: 20px;
        min-width: 300px;
    }
    .text-container p{
        margin-bottom: 5px;
    }
</style>