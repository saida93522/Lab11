<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ helloMessage }}</h2>
    <!-- message from server-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      helloMessage: "Hello ITEC 2560 Web Programmers",
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    // Makes API calls as app loads
    this.$hello_api.getHelloMessage().then((resp) => {
      this.helloMessage = resp.message; //data
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
