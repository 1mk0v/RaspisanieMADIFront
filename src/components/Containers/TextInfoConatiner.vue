<template>
    <div id="text-container">
        <span style="text-align: center;">{{ customText }}</span>
    </div>
</template>

<script>
export default {
    props: {
        customText:String,
    }
}
</script>

<style>
#text-container {
    display: flex;
    padding: 11px 27px;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    border-radius: 50px;
    background: linear-gradient(113deg, rgba(221, 221, 221, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%);
    backdrop-filter: blur(10px);
}
</style>