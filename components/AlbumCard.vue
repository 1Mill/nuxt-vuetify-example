<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		artistName: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		},
		color: {
			type: String,
			required: true
		}
	}
}
</script>

<template>
	<v-card
	:href='url' target='_blank'
	:class='color'
	>
		<v-container>
			<v-layout align-center>
				<v-flex xs6>
					<v-layout column>
						<h1 class='[ headline ]'>{{ title }}</h1>
						<div class='[ caption ]'>{{ artistName }}</div>
					</v-layout>
				</v-flex>
				<v-flex xs6>
					<v-img
					:src='image'
					/>
				</v-flex>
			</v-layout>
		</v-container>
	</v-card>
</template>
