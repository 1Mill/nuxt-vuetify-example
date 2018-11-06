<script>
export default {
	data () {
		return {
			links: [
				{name: 'Home', to: '/'},
				{name: 'Login', to: '/login'},
			]
		}
	}
}
</script>

<template>
	<v-toolbar dark class='[ indigo ]'>
		<v-toolbar-side-icon/>
		<v-toolbar-title>iTurns Search</v-toolbar-title>
		<v-spacer/>
		<v-toolbar-items>
			<v-btn flat
			v-for='link in links' :key='link.name'
			:to='link.to'
			>
				{{ link.name }}
			</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>
