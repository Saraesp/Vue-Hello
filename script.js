const{
	createApp
} = Vue;

createApp({
    data(){
        return{
            message: 'Hello word',
            url: 'https://picsum.photos/id/109/4287/2392'
        }
    }
}).mount('#app')