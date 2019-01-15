<template>
  <div>
    <Search></Search>
    <Main></Main>
    <Homenav></Homenav>
  </div>
</template>   
<script>
import Search from "./header/search.vue";
import Main from "./container/main.vue";
import Homenav from "./homenav/homenav.vue";

export default {
  name: "Home",
  components: { Search, Main, Homenav }
};
</script>