<script>
import { mapState } from 'vuex'

export default {
	middleware: 'search',
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
