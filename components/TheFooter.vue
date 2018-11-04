<script>
export default {
	data () {
		return {
			icons: [
				'fab fa-facebook',
				'fab fa-twitter',
				'fab fa-google-plus',
				'fab fa-linkedin',
				'fab fa-instagram'
			]
		}
	}
}
</script>

<template>
	<v-footer dark height='auto'>
		<v-card class='flex' flat tile>
			<v-card-title class='teal'>
				<strong class='subheading'>
					Get connected with us on social media!
				</strong>
				<v-spacer/>
				<v-btn
				v-for='(icon, index) in icons' :key='index'
				dark icon
				class='mx-3'
				>
					<v-icon>{{ icon }}</v-icon>
				</v-btn>
			</v-card-title>
			<v-flex gray lighten-2 py-1 text-xs-center >
				&copy;2018 — <strong>Vuetify</strong>
			</v-flex>
		</v-card>
	</v-footer>
</template>
