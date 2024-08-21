# bloomly

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# api url
https://bloomly.onrender.com


    created() {
    this.$store.dispatch("fetchAllProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  }
