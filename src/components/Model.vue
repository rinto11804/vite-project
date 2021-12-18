<template>
	<div @click.self="closeModel" class="backdrop">
		<div class="model" :class="{
			sale: theme === 'sale'
		}">
			<h1>{{header}}</h1>
			<p>{{text}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['header', 'text', 'theme'],
	methods: {
		closeModel() {
			this.$emit('close')
		}
	}
}
</script>

<style>
.model {
	width: 400px;
	margin: 100px auto;
	padding: 20px;
	background-color: white;
	border-radius: 10px;
}
.backdrop {
	z-index: 10;
	top: 0;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
}
.model.sale {
	background-color: crimson;
	color: white;
}
.model.sale p {
	margin: 9px;
	color: white;
}
</style>
