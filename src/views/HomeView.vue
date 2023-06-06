<script setup>
import Categories from '@/components/Categories.vue';
import Featured from '@/components/Featured.vue';
import Banners from '@/components/Banners.vue';
import LatestProducts from '@/components/LatestProducts.vue';
import BlogPosts from '@/components/BlogPosts.vue';

import { onMounted } from 'vue';

import {
    setBg,
    categoriesSlider,
    latestProductSlider,
    productDiscountSlider,
    productDetailsSlider,
    rangeSlider,
    niceSelect,
    singleProduct,
    quantityChange
    } from '@/assets/js/main.js';

onMounted(() => {
    setBg(),
    categoriesSlider(),
    latestProductSlider(),
    productDiscountSlider(),
    productDetailsSlider(),
    rangeSlider(),
    niceSelect(),
    singleProduct(),
    quantityChange()
});

</script>

<template>

    <Categories></Categories>

    <Featured></Featured>

    <Banners></Banners>

    <LatestProducts></LatestProducts>

    <BlogPosts></BlogPosts>
    
</template>