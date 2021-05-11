<template>
	<img :src="imageUrl" alt="" type="image/png" class="logo" />
	<HelloWorld msg="Hello, Parcel 2 + Vue 3" />
	<button @click="increment">
		Count is: {{ state.count }} Double is: {{ state.double }}
	</button>
	<div class="container">
		<a-button type="primary">Button</a-button>
		<a-input v-model:value="value" placeholder="Basic usage" />
	</div>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div>
	<router-view />
</template>

<script>
import { reactive, computed, ref, defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import imageUrl from 'url:./assets/logo.png';
export default defineComponent({
	components: {
		HelloWorld,
	},
	setup() {
		const value = ref('');

		const state = reactive({
			count: 0,
			double: computed(() => state.count * 2),
		});

		function increment() {
			state.count++;
		}

		return {
			value,
			state,
			increment,
			imageUrl,
		};
	},
});
</script>
<style lang="scss" scoped>
/* This style will only apply to this module */
$color: #42b983;
h1 {
	color: $color;
}
.container {
	width: 300px;
	margin: 10px auto;
}
.logo {
	width: 30%;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
