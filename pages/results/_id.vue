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
		])
	}
}
</script>

<template>
	<div>
		Hello from {{ $route.params.id }}

		{{ albums }}
	</div>
</template>
