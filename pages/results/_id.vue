<script>
import { mapState } from 'vuex'

import AlbumCard from '~/components/AlbumCard'

export default {
	components: {
		AlbumCard
	},
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
	},
	methods: {
		picker (index) {
			return index % 2 == 0 ? 'red' : 'blue'
		}
	}
}
</script>

<template>
	<div>
		<h1 class='[ title ]'>
			Results for {{ $route.params.id }}
		</h1>

		<v-container
		v-for='(album, index) in albums' :key='index'
		>
			<v-layout>
				<v-flex>
					<album-card
					:title="album.collectionCensoredName"
					:image="album.artworkUrl100"
					:artistName="album.artistName"
					:url="album.artistViewUrl"
					:color="picker(index)"
					/>
				</v-flex>
			</v-layout>
		</v-container>

		<h1 v-if=!albumExists>Could not find Album</h1>
	</div>
</template>
