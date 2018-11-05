<script>
export default {
	data () {
		return {
			valid: false,

			email: null,
			name: null,
			password: null
		}
	},
	methods: {
		submit () {
			console.log(`${this.name} <${this.email}>, password: ${this.password}`)
		}
	}
}
</script>

<template>
	<v-container>
		<v-form @submit.prevent='submit'>
			<v-text-field
			v-model='name'
			label='Name'
			required
			/>

			<v-text-field
			v-model='email'
			label='E-mail'
			required
			/>

			<v-text-field
			v-model='password'
			label='Password' type='password'
			required
			/>

			<v-btn class='success' type='submit'>
				Submit
			</v-btn>
		</v-form>
	</v-container>
</template>
