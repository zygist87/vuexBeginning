import axios from '@/packages/vue-axios'
import { FETCH_POSTS, FETCH_POST, FETCH_POST_COMMENT } from './action-types'
import { SET_POSTS } from './mutation-types'

export default {
  async [FETCH_POSTS] ({ commit }) {
    const { data } = await axios.get('/posts')
    commit(SET_POSTS, data)
  },

  async [FETCH_POST] ({ state }, id) {
    const post = state.posts.find(post => post.id === id)
    if (post) {
      return post
    }
    const { data } = await axios.get(`/posts/${id}`)
    return data
  },

  //sta pats dasirasysiu
  async [FETCH_POST_COMMENT] ({state}, id) {
      
      const { data } = await axios.get(`/posts/${id}`)
      return data
  }
}
