<template>
  <main class="flex flex-wrap justify-center p-10 gap-20 text-black">
    <div
      v-for="product in products"
      :key="product.name"
      class="card w-80 bg-wite flex-2"
    >
      <figure class="px-10 pt-10">
        <img
          src="https://static.wixstatic.com/media/3b36c5_88eb1b85e64848c1aa0986eb87f4626f~mv2.jpeg/v1/fill/w_500,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b36c5_88eb1b85e64848c1aa0986eb87f4626f~mv2.jpeg"
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ product.name }}</h2>
        <button @click="addToCart(product)" class="btn">Add to cart</button>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "ShopView",
  inject: ["cart"],
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Hardwood Sawdust",
          price: 20,
          image:
            "https://static.wixstatic.com/media/3b36c5_88eb1b85e64848c1aa0986eb87f4626f~mv2.jpeg/v1/fill/w_500,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b36c5_88eb1b85e64848c1aa0986eb87f4626f~mv2.jpeg",
        },
        {
          id: 2,
          name: "Master's Mix",
          price: 20,
          image:
            "https://static.wixstatic.com/media/3b36c5_88eb1b85e64848c1aa0986eb87f4626f~mv2.jpeg/v1/fill/w_500,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b36c5_88eb1b85e64848c1aa0986eb87f4626f~mv2.jpeg",
        },
        {
          id: 3,
          name: "Hardwood + Wheat Bran",
          price: 20,
          image:
            "https://static.wixstatic.com/media/3b36c5_88eb1b85e64848c1aa0986eb87f4626f~mv2.jpeg/v1/fill/w_500,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b36c5_88eb1b85e64848c1aa0986eb87f4626f~mv2.jpeg",
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
};
</script>
