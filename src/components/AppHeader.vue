<script>
export default{
    name:'AppHeader',
}
</script>


<template>
    <header>
        <nav>
            <div id="logo">
                <a href="#"><h1>BOOLFLIX</h1></a>
            </div>
            <div id="search_bar">
                <input type="text">
            </div>
        </nav>
    </header>

</template>

<style lang="scss">
nav{
    background-color: black;
    height: 70px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
        h1{
            color: red;
        }
}
   

</style>