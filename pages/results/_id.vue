<script>
import { mapState } from 'vuex'

export default {
	async asyncData ({ app, params, store }) {
	 	await app.$axios.$get(`/search?term=${params.id}&entity=album`)
			.then(res => {
				store.commit('add', res.results)
			})
	},
	computed: {
		...mapState ([
			'albums'
		]),
		albumExists () {
			return this.albums.length > 0
		}
	}
}
</script>

<template>
	<div>
		<h1 class='[ title ]'>
			Results for {{ $route.params.id }}
		</h1>

		<div
		v-if='albumExists'
		>
			{{ albums }}
		</div>

		<h1 v-else>Could not find Album</h1>
	</div>
</template>
