<script>
export default {
	data () {
		return {
			search: ''
		}
	},
	methods: {
		submit () {
			this.$router.push(`/results/${this.search}`)
		}
	}
}
</script>

<template>
	<v-container grid-list-md>
		<v-layout>
			<v-flex>
				<v-form @submit.prevent='submit'>
					<v-text-field label='Search iTunes'
					v-model='search'
					/>
				</v-form>
			</v-flex>
		</v-layout>
	</v-container>
</template>
