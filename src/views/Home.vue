<template>
  <div class="home">
      <p v-if="posts.length === 0"> Loading... </p>
      <ul>
        <li
          v-for="post in posts"
          :key="post.id"
        >
          <RouterLink :to="{ name: 'Post', params: { id: post.id }}">
            {{ post.title }}
          </RouterLink>
        </li>
      </ul>
  </div>
</template>

<script>
import { FETCH_POSTS } from '@/store/modules/Products/action-types'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('Products')

export default {
  name: 'HomeView',
  computed: {
    ...mapState({
      posts: 'posts'
    })
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      fetchProducts: FETCH_POSTS
    })
  }
}
</script>
