<script>
import TheFooter from '~/components/TheFooter'
import TheNav from '~/components/TheNav'

export default {
	components: {
		TheFooter,
		TheNav
	}
}
</script>

<template>
	<div id='app'>
		<v-app>
			<the-nav/>

			<nuxt/>

			<the-footer/>
		</v-app>
	</div>
</template>
