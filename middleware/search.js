export default async function ({ app, params, store }) {
	return await app.$axios.$get(`/search?term=${params.id}&entity=album`)
		.then(res => {
			store.commit('add', res.results)
		})
}
