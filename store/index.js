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
    let files = await require.context('~/assets/blog/articles/', true, /\.md$/);
    let posts = files 
    .keys() 
    .map(key => { 
      let res = {}; 
      res.title = key.slice(11, -3); 
      let sdate = key.slice(2, 10);
      res.date = new Date(sdate.slice(0, 4), sdate.slice(4, 6), sdate.slice(6, 8));
      return res; 
    })
    .sort((a, b) => { 
      return a.date < b.date; 
    }); 
    await commit("set", posts); 
	 }
 };