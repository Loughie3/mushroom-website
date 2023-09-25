<template>
  <div>
    <Hero />

    <section class="bg-custom-linen p-8 h-64 flex items-center justify-center">
      <h1 class="text-3xl font-semibold text-center">
        Brisbane Based Company, creating sterilised substrate for mushroom
        cultivation.
      </h1>
    </section>
    <div class="custom-shape-divider-bottom-1695423420">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style="background-color: transparent"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="#f3e9dc"
          class="shape-fill"
        ></path>
      </svg>
    </div>

    <section class="mx-auto min-h-screen text-white p-8 w-full">
      <h1 class="text-black text-3xl font-bold mb-6 p-8">
        Shop for Premium Steralised Substrate
      </h1>

      <article class="flex flex-wrap justify-center p-10 gap-20 text-black">
        <div
          v-for="product in products"
          :key="product.name"
          class="card w-full md:w-64 bg-base-100 flex-1 bg-white hover:scale-105 transition duration-300 ease-in-out"
        >
          <router-link class="mx-2" to="/shop">
            <figure class="px-10 pt-10">
              <img
                src="https://static.wixstatic.com/media/3b36c5_88eb1b85e64848c1aa0986eb87f4626f~mv2.jpeg/v1/fill/w_500,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b36c5_88eb1b85e64848c1aa0986eb87f4626f~mv2.jpeg"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center text-black">
              <h2 class="card-title">{{ product.name }}</h2>

              <div class="card-actions">
                <button class="btn bg-inherit border-none">Buy Now</button>
              </div>
            </div>
          </router-link>
        </div>
      </article>

      <article class="text-black grid grid-cols-6 justify-center p-8">
        <div class="col-start-2 col-span-2 text-left space-y-4">
          <!-- Added 'space-y-4' for vertical spacing -->
          <h1 class="text-4xl font-semibold mb-3">Our Substrate Bags</h1>
          <!-- Increased font size and made it semi-bold -->
          <p class="text-xl leading-relaxed">
            We create <strong>premium substrate</strong> for mycology purposes.
          </p>
          <p class="text-xl leading-relaxed">
            Our bags undergo sterilisation in our advanced industrial steriliser
            and are immediately sealed, guaranteeing
            <strong>no contamination</strong>.
          </p>
          <p class="text-xl leading-relaxed">
            We also offer a range of different substrates to suit your needs.
            Including supplemented substrate to
            <strong>enhance mushroom growth/yields</strong>.
          </p>
          <p class="text-xl leading-relaxed">
            The bags we use are <strong>food safe and durable</strong>
          </p>
        </div>
        <aside class="col-start-4 col-span-2">
          <figure class="px-10 pt-10">
            <img
              src="https://images.pexels.com/photos/2203683/pexels-photo-2203683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Substrate Image"
              class="rounded-xl"
            />
          </figure>
        </aside>
      </article>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "../components/Hero.vue";
export default {
  name: "HomeView",
  components: { Hero },
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
};
</script>
<style></style>
