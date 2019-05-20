<template>
    <div>
        <div class="d-flex page-container">
            <div class="img-container">
                <img src="../assets/images/child.jpg" alt="">
            </div>
            <div class="text-container">
                <span class="d-flex input-section">
                     <span>Hugh is</span>
                     <input-group />
                </span>
                <span class="label">years old</span>
            </div>
        </div>
        <div class="d-flex page-container">
            <div class="img-container">
                <img src="../assets/images/child.jpg" alt="">
            </div>
            <div class="text-container">
                <span class="d-flex input-section">
                     <span>Hugh is</span>
                     <input-group />
                </span>
                <span class="label">years old</span>
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
        display: flex;
        align-items: center;
        line-height: 20px;
        min-width: 300px;
    }
    .text-container .label {
        margin-top: 20px;
        margin-left: 20px;
        color: #9d9d9d;
    }
    .input-section {
        flex-direction: column;
        align-items: flex-start;
    }
</style>