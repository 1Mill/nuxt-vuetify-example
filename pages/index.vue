<script>
export default {
	data () {
		return {
			search: ''
		}
	}
}
</script>

<template>
	<v-container grid-list-md>
		<v-layout>
			<v-flex>
				<v-text-field label='Search iTunes'
				v-model='search'
				/>
			</v-flex>
		</v-layout>
	</v-container>
</template>
