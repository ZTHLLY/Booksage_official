<!-- BookItem.vue -->

<template>
  <div :data-category="book.category" class="book-item col-xs-12 col-sm-6 col-md-4">
    <div class="pro-text text-center">
      <div class="pro-img">
        <img :src="book.imageSrc" :alt="book.title" style="height: 280px; width: 220px; padding: 10px;">
        <div class="hover-icon">
          <router-link :to="{ name: 'ShopDetail', query: { index: book.id } }" target="_blank"><span class="icon icon-Search"></span></router-link>
        </div>
      </div>
      <div class="pro-text-outer">
        <span>{{ book.category }}</span>
        <a href="#">
          <h4>{{ book.title }}</h4>
        </a>
        <p class="wk-price">{{ book.price }}</p>
		<p>Sales: {{book.sales}}</p>
        <a href="#" class="add-btn">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['book'],
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
