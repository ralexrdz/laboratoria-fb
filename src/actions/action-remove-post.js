function removePost(post) {
  return {
    type: 'REMOVE_POST',
    payload: post
  }
}
export default removePost