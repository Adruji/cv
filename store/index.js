export  const  state  = () => ({
  bloglist: []
});

export  const  mutations  = {
	set(state, list) {
		state.bloglist  =  list;
	}
};

export const actions = { 
	async nuxtServerInit({ commit }) { 
    let files = await require.context('~/assets/blog/articles/', false, /\.md$/);
    let posts = files 
    .keys() 
    .map(key => {
      const markdown = require(`~/assets/blog/articles/${key.slice(2)}`)
      let res = markdown.attributes;
      res.path = key.slice(2, key.length - 3)
      return res; 
    })
    .sort((a, b) => { 
      return a.date < b.date; 
    }); 
    await commit("set", posts); 
	 }
 };