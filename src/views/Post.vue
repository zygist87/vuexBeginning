<template>
  <div class="post">
    {{ post }}
    <!-- {{post.comment}} -->
  </div>
</template>

<script>
import { FETCH_POST, FETCH_POST_COMMENT } from '@/store/modules/Products/action-types'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('Products')
export default {
  name: 'PostView',
  data () {
    return {
      post: null
    }
  },
  async created () {
    this.post = await this.fetchPost(this.$route.params.id)
    console.log(this.post)
    //cia darysiu
    this.postComent = await this.fetchComment()
  },
  methods: {
    ...mapActions({
      fetchPost: FETCH_POST,
      fetchComment: FETCH_POST_COMMENT,
    })
  }
}
</script>

<style>
</style>
